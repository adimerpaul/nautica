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
        $details = Detail::whereHas('sale', function ($query) use ($fechaInicioSemana, $fechaFinSemana) {
            $query->whereBetween('date', [$fechaInicioSemana, $fechaFinSemana]);
        })->with('sale')->get();

        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('a.xlsx');

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('E2', 'Hello World !');

        foreach ($details as $key => $detail) {
            $sheet->setCellValue('A' . ($key + 13), $detail->sale->tipo);
        }

        $tempFile = tempnam(sys_get_temp_dir(), 'excel');
        $tempFile .= '.xlsx';

        $writer = new Xlsx($spreadsheet);
        $writer->save($tempFile);

        $fileName = date('Y-m-d') . '.xlsx';

        return response()->download($tempFile, $fileName)->deleteFileAfterSend(true);
    }
}
