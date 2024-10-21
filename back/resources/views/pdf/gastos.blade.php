<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Reporte de Gastos</title>
    <style>
        * {
            font-size: 9px;
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .table, .th, .td {
            border: 1px solid #000;
        }
        .th, .td {
            padding: 5px;
            text-align: left;
        }
        .th {
            background-color: #f2f2f2;
        }
        .bold {
            font-weight: bold;
        }
        .p-2 {
            padding: 2em;
        }
    </style>
</head>
<body class="p-2">
<table style="width: 100%;">
    <tr>
        <td style="width: 33%"></td>
        <td style="width: 34%;text-align: center;">
            <div class="bold">Reporte de {{$tipo}}</div>
            <div>
                Del {{$fechaInicio}} al {{$fechaFin}}
            </div>
        </td>
        <td style="width: 33%;text-align: right;">
            <div>
               <span class="bold"> Usuario:</span> {{ $user->name }}
            </div>
            <div>{{ $fecha }}</div>
        </td>
    </tr>
</table>

<table class="table">
    <thead>
    <tr>
        <th class="th">ID</th>
        <th class="th">Fecha</th>
        <th class="th">Cliente ID</th>
        <th class="th">Total</th>
        <th class="th">Tipo</th>
        <th class="th">Usuario ID</th>
        <th class="th">Status</th>
        <th class="th">Observación</th>
        <th class="th">Pago</th>
        <th class="th">Descripción</th>
        <th class="th">Tipo de Venta</th>
        <th class="th">Número de Factura</th>
    </tr>
    </thead>
    <tbody>
    @foreach($data as $item)
        <tr>
            <td class="td">{{ $item->id }}</td>
            <td class="td">{{ $item->date }}</td>
            <td class="td">{{ $item->client_id }}</td>
            <td class="td">{{ $item->total }}</td>
            <td class="td">{{ $item->tipo }}</td>
            <td class="td">{{ $item->user_id }}</td>
            <td class="td">{{ $item->status }}</td>
            <td class="td">{{ $item->observacion }}</td>
            <td class="td">{{ $item->pago }}</td>
            <td class="td">{{ $item->description }}</td>
            <td class="td">{{ $item->tipo_venta }}</td>
            <td class="td">{{ $item->numeroFactura }}</td>
        </tr>
    @endforeach
    </tbody>
</table>

</body>
</html>
