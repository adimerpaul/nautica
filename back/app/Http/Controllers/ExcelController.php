<?php

namespace App\Http\Controllers;

use App\Models\Detail;
use App\Models\Sale;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use function Laravel\Prompts\error;

class ExcelController extends Controller{
    public function exportSalesExcel(Request $request)
    {
        $fechaInicioSemana = $request->fechaInicioSemana;
        $fechaFinSemana = $request->fechaFinSemana;
//        $sales = Sale::whereBetween('date', [$fechaInicioSemana, $fechaFinSemana])->with('details')->get();

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
}
