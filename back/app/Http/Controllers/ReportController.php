<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class ReportController extends Controller{
    function reporte(Request $request){
//        compdf file
        $pdf = Pdf::loadView('pdf.gastos')->setPaper('letter');
        return $pdf->stream();
    }
}
