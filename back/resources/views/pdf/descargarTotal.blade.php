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
<body>
{{--protected $fillable = ['user_id', 'viaje_id', 'descarga', 'dia', 'fecha', 'status'];--}}
<div class="text-center text-h5">Viaje: {{$viaje->fechaInicio}} - {{$viaje->fechaFin}} - {{$viaje->estado}}</div>
<div class="text-bold">
    Barco: {{$viaje->boat->name}}
</div>
<div class="">
    Observacion: {{$viaje->observaciones}}
</div>
<table class="table">
    <tr>
        <th class="text-center text-bold" style="width: 90%">Producto</th>
        <th class="text-center text-bold" style="width: 10%">Cantidad</th>
    </tr>
{{--    protected $fillable = ['product_id', 'viaje_id', 'cantidad', 'fecha', 'status', 'user_id', 'descarga_id'];--}}
{{--    <pre>{{$productos}}</pre>--}}
    @foreach($productos as $d)
        <tr>
            <td class="">{{$d['product']['name']}}</td>
            <td class="text-right">{{$d['cantidad']}}</td>
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
</body>
</html>
