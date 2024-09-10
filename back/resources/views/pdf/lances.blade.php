<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lances</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body {
            font-family: Arial, sans-serif;
            font-size: 10px;
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
        .text-caption{
            font-size: 10px;
        }
    </style>
</head>
<body style="padding: 10px">
{{--protected $fillable = ['user_id', 'viaje_id', 'descarga', 'dia', 'fecha', 'status'];--}}
<div class="text-center text-h5">Viaje: {{$viaje->fechaInicio}} - {{$viaje->fechaFin}}</div>
<div class="text-bold text-center">
    CAPTURAS EN LIBRAS (APROXIMADO)
</div>
<div class="text-bold">
    {{$viaje->id}} Barco: {{$viaje->boat->name}}
</div>
<div class="">
    Observacion: {{$viaje->observaciones}}
</div>
@php
function calculateCantidad($lance_id, $product_id){
    $cantidad = 0;
    $lancesProductos = \App\Models\LanceProducto::where('lance_id', $lance_id)->where('product_id', $product_id)->get();
    if ($lancesProductos->count() > 0){
        $cantidad = $lancesProductos[0]->cantidad;
    }
    return $cantidad;
}
function calculateCantidadTotal($product_id, $viaje_id){
    $cantidad = 0;
    $lances = \App\Models\Lance::where('viaje_id', $viaje_id)->where('status', 'ACTIVO')->get();
    foreach ($lances as $lance){
        $cantidad += calculateCantidad($lance->id, $product_id);
    }
    return $cantidad;
}
@endphp
<table class="table">
    <tr>
        <td class="text-center text-caption text-bold">Fecha</td>
        <td class="text-center text-caption text-bold">Numero</td>
        <td class="text-center text-caption text-bold">Hora Inico</td>
        <td class="text-center text-caption text-bold">Hora Fin</td>
        <td class="text-center text-caption text-bold">Latitud</td>
        <td class="text-center text-caption text-bold">Longitud</td>
        @foreach($products as $d)
            <td class="text-center text-caption">{{$d['name']}}</td>
        @endforeach
    </tr>
    {{--    protected $fillable = ['product_id', 'viaje_id', 'cantidad', 'fecha', 'status', 'user_id', 'descarga_id'];--}}
    {{--    <pre>{{$productos}}</pre>--}}
    @foreach($lances as $d)
        <tr>
            <td class="" style="width: 65px">{{$d['fecha']}}</td>
            <td class="">{{$d['numero']}}</td>
            <td class="">{{substr($d['hora_inicio'], 0, 5)}}</td>
            <td class="">{{substr($d['hora_fin'], 0, 5)}}</td>
            <td class="">{{$d['latitud']}}</td>
            <td class="">{{$d['longitud']}}</td>
            @foreach($products as $p)
                <td class="text-right">{{calculateCantidad($d['id'], $p['id'])}}</td>
            @endforeach
        </tr>
    @endforeach
    <tr>
        <td class="text-right text-bold" colspan="6">Total</td>
        @foreach($products as $p)
            <td class="text-right text-bold">{{calculateCantidadTotal($p['id'], $viaje->id)}}</td>
        @endforeach
    </tr>
</table>
</body>
</html>
