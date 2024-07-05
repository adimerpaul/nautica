<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lista de ventas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
        }
        .text-center {
            text-align: center;
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
<div class="text-center text-h5">{{$fechaInicioSemana}} al {{$fechaFinSemana}}</div>
<table class="table">
    <tr>
        <th class="text-center text-bold" style="width: 5%">Cantidad</th>
        <th class="text-center text-bold" style="width: 5%">tipo</th>
        <th class="text-center text-bold" style="width: 60%">Producto</th>
        <th class="text-center text-bold" style="width: 10%">Ingreso</th>
        <th class="text-center text-bold" style="width: 10%">Egreso</th>
        <th class="text-center text-bold" style="width: 10%">Total</th>
    </tr>
    @php
        $totalVenta = 0;
        $totalGasto = 0;
    @endphp
    @foreach($details as $d)
        <tr>
            <td class="text-center">{{$d['unidad']}}</td>
            <td class="text-center">{{$d['tipo_venta']}}</td>
            <td>{{$d['detalle']}}</td>
            <td class="text-center">{{$d['venta']}}</td>
            <td class="text-center">{{$d['gasto']}}</td>
            <td class="text-center">
                {{$d['tipo_venta'] == 'EGRESO' ? '-' : ''}}
                {{$d['total']}}
            </td>
            @php
                $totalVenta += $d['venta'];
                $totalGasto += $d['gasto'];
            @endphp
        </tr>
    @endforeach
    <tr>
        <td colspan="3" class="text-center text-bold">Totales</td>
        <td class="text-center text-bold">{{$totalVenta}}</td>
        <td class="text-center text-bold">{{$totalGasto}}</td>
        <td class="text-center text-bold">{{$totalVenta - $totalGasto}}</td>
    </tr>
</table>
</body>
</html>
