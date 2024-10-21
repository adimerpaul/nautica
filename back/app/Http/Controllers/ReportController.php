<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
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
        $user = $request->user();
//        error_log($user->id);
        if (isset($user->id)) {
            error_log('entro');
        }else{
            $user = User::find(1);
        }
        if ($tipo == 'Gastos') {
            $data = Sale::whereDate('date', '>=', $fechaInicio)
                ->whereDate('date', '<=', $fechaFin)
                ->where('status', 'ACTIVO')
                ->where('tipo_venta', 'EGRESO')
                ->get();
        }
        error_log(json_encode($data));
        $data = [
            'fechaInicio' => $fechaInicio,
            'fechaFin' => $fechaFin,
            'tipo' => $tipo,
            'data' => $data,
            'user' => $user,
            'fecha' => Carbon::now()
        ];
        $pdf = Pdf::loadView('pdf.gastos',$data)->setPaper('letter');
        return $pdf->stream();
    }
}
