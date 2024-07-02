<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lista de tripulantes</title>
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
<table>
    <tr>
        <td class="text-center" style="width: 33%">
            <img src="{{ public_path('salva.png') }}" alt="Logo" width="100">
        </td>
        <td class="text-center" style="width: 33%">
            <img src="{{ public_path('marina.png') }}" alt="Logo" width="100">
        </td>
        <td class="text-center" style="width: 33%">
            <img src="{{ public_path('fal.jpeg') }}" alt="Logo" width="100">
        </td>
    </tr>
</table>
<br>
<div class="text-center text-bold text-h5">LISTA DE TRIPULACION</div>
<table class="table">
    <tr>
        <th style="width: 20%">Fecha de Salida:</th>
        <th style="width: 10%">Hora:</th>
        <th style="width: 20%">Dias de Pesca</th>
        <th style="width: 25%">ZARPE N</th>
        <th style="width: 25%">Fecha de Llegada:</th>
    </tr>
    <tr>
        <td class="text-center">{{ $viaje->fechaInicio }}</td>
        <td class="text-center">{{ $viaje->hora }}</td>
        <td class="text-center">{{ $viaje->dias }}</td>
        <td class="text-center">{{ $viaje->zarpe }}</td>
        <td class="text-center">{{ $viaje->fechaFin }}</td>
    </tr>
    <tr>
        <th colspan="3">Nombre del buque:</th>
        <th colspan="2">Puerto de salida:</th>
    </tr>
    <tr>
        <td colspan="3" class="text-center">{{ $viaje->boat->name }}</td>
        <td colspan="2" class="text-center">{{ $viaje->puertoSalida }}</td>
    </tr>
    <tr>
        <th colspan="3">Bandera: {{ $viaje->bandera }}</th>
        <th colspan="2">Puerto de llegada:</th>
    </tr>
    <tr>
        <td colspan="1" class="text-center">Empresa/Propietario:</td>
        <td colspan="2" class="text-center">{{ $viaje->propietario }}</td>
        <td colspan="2" class="text-center">{{ $viaje->puertoLlegada }}</td>
    </tr>
</table>
<br>
<table class="table">
    <tr>
        <th>N</th>
        <th>Nombre y Apellido</th>
        <th>Grado</th>
        <th>Nacionalidad</th>
        <th>Tipo Documento</th>
        <th>N Documento</th>
        <th>Telefono</th>
    </tr>
    @foreach($tripulantes as $tripulante)
        <tr>
            <td>{{ $loop->iteration }}</td>
            <td>{{ $tripulante->name }}</td>
            <td>{{ $tripulante->role }}</td>
            <td>{{ $tripulante->nacionalidad }}</td>
            <td>{{ $tripulante->tipoDocumento }}</td>
            <td>{{ $tripulante->numeroIdentificacion }}</td>
            <td>{{ $tripulante->telefono }}</td>
        </tr>
    @endforeach
</table>
<br>
<br>
<br>
<br>
<br>
<div class="text-center">
    <div>______________________________________</div>
    <div>Capitan/ Captain</div>
    <span class="text-bold">Nota: Anunciar sus zarpes y arribos 24 horas antes</span>
    <br>
    <span>Delegacion Puerto El Triunfo 2663-6908</span>
    <br>
    <span>VHF-Canal 16 (USA)</span>
</div>
</body>
</html>
