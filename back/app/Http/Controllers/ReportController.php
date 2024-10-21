<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class ReportController extends Controller{
    function reporte(Request $request){
//        {label: 'Gastos', value: 'Gastos'},
//        {label: 'Clientes', value: 'Clientes'},
//        {label: 'Deudores', value: 'Deudores'},
//        {label: 'Proveedores', value: 'Proveedores'},
//        {label: 'Consolidado', value: 'Consolidado'},
//        {label: 'Ganancias', value: 'Ganancias'},
//        {label: 'Venta', value: 'Venta'},
//        {label: 'Descarga', value: 'Descarga'},
//        {label: 'Lances', value: 'Lances'},
//        {label: 'Provision', value: 'Provision'},
//        {label: 'Cuentas por Cobrar', value: 'Cuentas por Cobrar'},
        $fechaInicio = $request->fechaInicio;
        $fechaFin = $request->fechaFin;
        $tipo = $request->tipo;

        if ($tipo == 'Gastos') {
            $sales = Sale::whereDate('date', '>=', $fechaInicio)
                ->whereDate('date', '<=', $fechaFin)
                ->where('status', 'ACTIVO')
                ->where('tipo_venta', 'EGRESO')
                ->get();
            $data = [
                'fechaInicio' => $fechaInicio,
                'fechaFin' => $fechaFin,
                'tipo' => $tipo,
                'data' => $sales
            ];
        }
        $pdf = Pdf::loadView('pdf.gastos',$data)->setPaper('letter');
        return $pdf->stream();
    }
}
