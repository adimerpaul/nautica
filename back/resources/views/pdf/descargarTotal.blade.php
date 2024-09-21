<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lista de descarga</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
        }
        .text-center {
            text-align: center;
        }
        .text-right {
            text-align: right;
        }

        .text-bold {
            font-weight: bold;
        }

        .text-h5 {
            font-size: 1.5em;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
        }

        .table th, .table td {
            border: 1px solid black;
            padding: 5px;
        }
        table{
            width: 100%;
        }
    </style>
</head>
@php
function formatDate($date){
    $date = new DateTime($date);
    return $date->format('d/m/Y');
}
@endphp
<body>
{{--protected $fillable = ['user_id', 'viaje_id', 'descarga', 'dia', 'fecha', 'status'];--}}
<table style="width: 100%">
    <tr>
        <td style="width: 20%">
            <img src="{{public_path('img/logo.png')}}" alt="Logo" style="width: 100px">
        </td>
        <td style="width: 60%" valign="top">
            <div style="text-align: center; font-size: 1.3em;font-weight: bold">
                Reporte de productos por viaje
            </div>
        </td>
        <td style="width: 20%"></td>
    </tr>
</table>
<table>
    <tr>
        <td style="width: 50%">
            <div><b>Viajes:</b> {{$cantidadViajes}}</div>
        </td>
        <td style="width: 50%">
            <div><b>Dias:</b> {{$cantidadDias}}</div>
        </td>
    </tr>
    <tr>
        <td style="width: 50%">
            <div><b>Barco:</b> {{$viaje->boat->name}}</div>
        </td>
        <td style="width: 50%">
            <div><b>Estado:</b> {{$viaje->estado}}</div>
        </td>
    </tr>
    <tr>
        <td style="width: 50%">
            <div><b>Empresa:</b> {{$viaje->boat->company->name}}</div>
        </td>
        <td style="width: 50%">
            <div><b>Fecha:</b> {{formatDate($viaje->fechaInicio)}} - {{formatDate($viaje->fechaFin)}}</div>
        </td>
    </tr>
</table>
{{--<div class="text-center text-h5">Viaje: {{formatDate($viaje->fechaInicio)}} - {{formatDate($viaje->fechaFin)}} - {{$viaje->estado}}</div>--}}
{{--<div class="text-bold">--}}
{{--    Viajes: {{$cantidadViajes}}--}}
{{--</div>--}}
{{--<div class="text-bold">--}}
{{--    Barco: {{$viaje->boat->name}}--}}
{{--</div>--}}
{{--<div class="">--}}
{{--    Observacion: {{$viaje->observaciones}}--}}
{{--</div>--}}
<table class="table" style="padding: 5px 50px">
    <tr style="background-color: #153D64;color: white">
        <th class="text-center text-bold" style="width: 10%">N</th>
        <th class="text-center text-bold" style="width: 15%">Cantidad</th>
        <th class="text-center text-bold" style="width: 75%">Producto</th>
    </tr>
{{--    protected $fillable = ['product_id', 'viaje_id', 'cantidad', 'fecha', 'status', 'user_id', 'descarga_id'];--}}
{{--    <pre>{{$productos}}</pre>--}}
    @foreach($productos as $d)
        <tr>
            <td class="text-center">{{$loop->iteration}}</td>
            <td class="text-center">{{$d['cantidad']}}</td>
            <td class="">{{$d['product']['name']}}</td>
{{--            <td>{{$d['detalle']}}</td>--}}
{{--            <td class="text-center">{{$d['venta']}}</td>--}}
{{--            <td class="text-center">{{$d['gasto']}}</td>--}}
{{--            <td class="text-center">--}}
{{--                {{$d['tipo_venta'] == 'EGRESO' ? '-' : ''}}--}}
{{--                {{$d['total']}}--}}
{{--            </td>--}}
        </tr>
    @endforeach
</table>
{{--observaciones tiene HTML--}}
<div class="text-bold">
    Observaciones:
</div>
<div>
    {!! $viaje->observaciones !!}
</body>
</html>
