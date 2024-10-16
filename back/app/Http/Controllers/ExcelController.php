<?php

namespace App\Http\Controllers;

use App\Models\Descarga;
use App\Models\Detail;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Viaje;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use function Laravel\Prompts\error;

class ExcelController extends Controller{
    function exportPdfLances($viaje_id){
        $viaje = Viaje::find($viaje_id);
        $products = Product::orderBy('id', 'asc')->get();
        $lances = $viaje->lances;
        $lancesRes = [];
        foreach ($lances as $lance) {
            if($lance->status == 'ACTIVO'){
                $lancesRes[] = $lance;
            }
        }
        $data = [
            'viaje' => $viaje,
            'lances' => $lancesRes,
            'products' => $products
        ];
        $pdf = Pdf::loadView('pdf.lances', $data)->setPaper('letter', 'landscape');
        return $pdf->stream();
    }
    function exportDescargarPdfTotal($viaje_id){
        $viaje= Viaje::find($viaje_id);
//        $productos = $viaje->productos;
//        $productoRes= [];
//        foreach ($productos as $producto) {
//            if ($producto->status == 'ACTIVO') {
//                if(isset($productoRes[$producto->product_id])){
//                    $productoRes[$producto->product_id]['cantidad'] += $producto->cantidad;
//                }else{
//                    $productoRes[$producto->product_id] = [
//                        'cantidad' => $producto->cantidad,
//                        'product' => $producto->product
//                    ];
//                }
//            }
//        }
        $productoRes= [];
        $descargas = Descarga::where('viaje_id', $viaje_id)
            ->where('status', 'ACTIVO')
            ->with('productos')
            ->get();
        foreach ($descargas as $descarga) {
            foreach ($descarga->productos as $producto) {
                if(isset($productoRes[$producto->product_id])){
                    $productoRes[$producto->product_id]['cantidad'] += $producto->cantidad;
                }else{
                    $productoRes[$producto->product_id] = [
                        'cantidad' => $producto->cantidad,
                        'product' => $producto->product
                    ];
                }
            }
        }
        $data = [
            'viaje' => $viaje,
            'productos' => $productoRes,
            'cantidadViajes' => count($viaje->descargas),
            'cantidadDias' => count($viaje->descargas)
        ];
//        error(json_encode($data));
        $pdf = Pdf::loadView('pdf.descargarTotal', $data);
        return $pdf->stream();
    }
    function exportDescargarPdf($id){
        $descargar = Descarga::find($id);
        $productos = $descargar->productos;
        $data = [
            'descargar' => $descargar,
            'productos' => $productos
        ];
        $pdf = Pdf::loadView('pdf.descargar', $data);
        return $pdf->stream();
    }
    public function exportSalesExcel(Request $request)
    {
        $fechaInicioSemana = $request->fechaInicioSemana;
        $fechaFinSemana = $request->fechaFinSemana;
//        $sales.blade.php = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])->with('details')->get();

        $details = [];
        $meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])->get();
        foreach ($sales as $sale) {
            if ($sale->tipo_venta == 'INGRESO') {
                $detailsGet = Detail::where('sale_id', $sale->id)->get();
                error(json_encode($detailsGet));
                if ($detailsGet) {
                    foreach ($detailsGet as $d) {
                        $details[] = [
                            'tipo_venta' => $sale->tipo_venta,
                            'mes' => $meses[date('n', strtotime($sale->date)) - 1],
                            'date' => $sale->date,
                            'proveedor' => $sale->client->name,
                            'numeroFactura' => $sale->numeroFactura,
                            'detalle' => $d->product_name,
                            'unidad' => $d->quantity,
                            'precio' => $d->price,
                            'venta' => $d->total,
                            'gasto' => 0,
                            'total' => $d->total,
                        ];
                    }
                }
            }else{
                $details[] = [
                    'tipo_venta' => $sale->tipo_venta,
                    'mes' => $meses[date('n', strtotime($sale->date)) - 1],
                    'date' => $sale->date,
                    'proveedor' => $sale->client->name,
                    'numeroFactura' => $sale->numeroFactura,
                    'detalle' => $sale->observacion == null ? $sale->description : $sale->observacion,
                    'unidad' => 1,
                    'precio' => $sale->total,
                    'venta' => 0,
                    'gasto' => $sale->total,
                    'total' => $sale->total,
                ];
            }
        }
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('a.xlsx');

        $sheet = $spreadsheet->getActiveSheet();
        foreach ($details as $key => $detail) {
//            Tipo	MES	Embarcacion	Fecha	Proveedor	Factura	Detalle	Resumen	 unidad 	 precio 	 Venta 	 Gastos 	 Totales
            $sheet->setCellValue('A' . ($key + 13), $detail['tipo_venta']);
            $sheet->setCellValue('B' . ($key + 13), $detail['mes']);
            $sheet->setCellValue('D' . ($key + 13), $detail['date']);
            $sheet->setCellValue('E' . ($key + 13), $detail['proveedor']);
            $sheet->setCellValue('F' . ($key + 13), $detail['numeroFactura']);
            $sheet->setCellValue('G' . ($key + 13), $detail['detalle']);
            $sheet->setCellValue('I' . ($key + 13), $detail['unidad']);
            $sheet->setCellValue('J' . ($key + 13), $detail['precio']);
            $sheet->setCellValue('K' . ($key + 13), $detail['venta']);
            $sheet->setCellValue('L' . ($key + 13), $detail['gasto']);
            $sheet->setCellValue('M' . ($key + 13), $detail['total']);
        }

        $tempFile = tempnam(sys_get_temp_dir(), 'excel');
        $tempFile .= '.xlsx';

        $writer = new Xlsx($spreadsheet);
        $writer->save($tempFile);

        $fileName = date('Y-m-d') . '.xlsx';

        return response()->download($tempFile, $fileName)->deleteFileAfterSend(true);
    }
    function exportSalesPdf(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana;
        $fechaFinSemana = $request->fechaFinSemana;
        $details = [];
        $meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])->get();
        foreach ($sales as $sale) {
            if ($sale->tipo_venta == 'INGRESO') {
                $detailsGet = Detail::where('sale_id', $sale->id)->get();
                error(json_encode($detailsGet));
                if ($detailsGet) {
                    foreach ($detailsGet as $d) {
                        $details[] = [
                            'tipo_venta' => $sale->tipo_venta,
                            'mes' => $meses[date('n', strtotime($sale->date)) - 1],
                            'date' => $sale->date,
                            'proveedor' => $sale->client->name,
                            'numeroFactura' => $sale->numeroFactura,
                            'detalle' => $d->product_name,
                            'unidad' => $d->quantity,
                            'precio' => $d->price,
                            'venta' => $d->total,
                            'gasto' => 0,
                            'total' => $d->total,
                        ];
                    }
                }
            }else{
                $details[] = [
                    'tipo_venta' => $sale->tipo_venta,
                    'mes' => $meses[date('n', strtotime($sale->date)) - 1],
                    'date' => $sale->date,
                    'proveedor' => $sale->client->name,
                    'numeroFactura' => $sale->numeroFactura,
                    'detalle' => $sale->observacion == null ? $sale->description : $sale->observacion,
                    'unidad' => 1,
                    'precio' => $sale->total,
                    'venta' => 0,
                    'gasto' => $sale->total,
                    'total' => $sale->total,
                ];
            }
        }
        $data = [
            'details' => $details,
            'fechaInicioSemana' => $fechaInicioSemana,
            'fechaFinSemana' => $fechaFinSemana
        ];
        $pdf = Pdf::loadView('pdf.sales', $data);
        return $pdf->stream();
    }
}
