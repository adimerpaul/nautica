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
                $detail = Detail::where('sale_id', $sale->id)->first();
                if ($detail) {
                    foreach ($detail as $d) {
                        $details[] = [
                            'tipo_venta' => $sale->tipo_venta,
                            'mes' => $meses[date('n', strtotime($sale->date)) - 1],
                            'date' => $sale->date,
                            'proveedor' => $sale->client->name,
                            'numeroFactura' => $sale->numeroFactura,
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
                ];
            }
        }

        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('a.xlsx');

        $sheet = $spreadsheet->getActiveSheet();
//        $sheet->setCellValue('E2', 'Hello World !');
        foreach ($details as $key => $detail) {
//            Tipo	MES	Embarcacion	Fecha	Proveedor	Factura	Detalle	Resumen	 unidad 	 precio 	 Venta 	 Gastos 	 Totales
            $sheet->setCellValue('A' . ($key + 13), $detail['tipo_venta']);
            $sheet->setCellValue('B' . ($key + 13), $detail['mes']);
            $sheet->setCellValue('D' . ($key + 13), $detail['date']);
            $sheet->setCellValue('E' . ($key + 13), $detail['proveedor']);
            $sheet->setCellValue('F' . ($key + 13), $detail['numeroFactura']);
        }

        $tempFile = tempnam(sys_get_temp_dir(), 'excel');
        $tempFile .= '.xlsx';

        $writer = new Xlsx($spreadsheet);
        $writer->save($tempFile);

        $fileName = date('Y-m-d') . '.xlsx';

        return response()->download($tempFile, $fileName)->deleteFileAfterSend(true);
    }
}
