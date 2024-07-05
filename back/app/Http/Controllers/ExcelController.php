<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class ExcelController extends Controller{
    public function exportSales(Request $request)
    {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('a.xlsx');

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('E2', 'Hello World !');

        $tempFile = tempnam(sys_get_temp_dir(), 'excel');
        $tempFile .= '.xlsx';

        $writer = new Xlsx($spreadsheet);
        $writer->save($tempFile);

        $fileName = date('Y-m-d') . '.xlsx';

        return response()->download($tempFile, $fileName)->deleteFileAfterSend(true);
    }
}
