<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <div class="row">
        <div class="col-6 col-md-2 q-pa-xs">
          <q-input v-model="fechaInicio" label="Fecha Inicio" type="date" outlined dense :loading="loading" />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <q-input v-model="fechaFin" label="Fecha Fin" type="date" outlined dense :loading="loading" />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
<!--          <q-input v-model="filter" label="Buscar" outlined dense :loading="loading" />-->
          <q-select v-model="tipoReporte" :options="tipoReportes" label="Tipo de Reporte" outlined dense :loading="loading"
                    emit-value map-options
          />
        </div>
        <div class="col-6 col-md-2 q-pa-xs text-right">
          <q-btn color="primary" label="Consultar" no-caps :loading="loading" icon="search" @click="reporteGenerarList" />
        </div>
        <div class="col-6 col-md-4 q-pa-xs text-right">
          <q-btn color="primary" label="Generar" no-caps :loading="loading" icon="cloud_download" @click="reporteGenerar" />
        </div>
        <div class="col-12" v-if="tipoReporte === 'Gastos'">
          <q-markup-table dense flat bordered>
            <thead>
              <tr class="bg-primary text-white">
                <th>Fecha</th>
                <th>Proveedor</th>
                <th>Concepto</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.id">
                <td>{{item.date}}</td>
                <td>{{item.client?.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.total}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
        <div class="col-12">
<!--          <pre>{{data}}</pre>-->
<!--          [-->
<!--          {-->
<!--          "id": 4,-->
<!--          "date": "2024-10-16 16:16:00",-->
<!--          "client_id": 5,-->
<!--          "total": 2.5,-->
<!--          "tipo": "CONTADO",-->
<!--          "user_id": 24,-->
<!--          "status": "ACTIVO",-->
<!--          "observacion": "Pintura",-->
<!--          "pago": "EFECTIVO",-->
<!--          "description": "Pintura",-->
<!--          "tipo_venta": "EGRESO",-->
<!--          "numeroFactura": "sasdasd5458564",-->
<!--          "motivo_anulacion": null,-->
<!--          "viaje_id": null,-->
<!--          "boat_id": null,-->
<!--          "company_id": null,-->
<!--          "deleted_at": null,-->
<!--          "user": {-->
<!--          "id": 24,-->
<!--          "name": "Francisco",-->
<!--          "role": "SUPERADMIN",-->
<!--          "username": "francisco",-->
<!--          "email": null,-->
<!--          "email_verified_at": null,-->
<!--          "company_id": 19,-->
<!--          "bote_id": null,-->
<!--          "deleted_at": null-->
<!--          },-->
<!--          "company": null,-->
<!--          "client": {-->
<!--          "id": 5,-->
<!--          "name": "Juan",-->
<!--          "lastname": "Pueblo",-->
<!--          "company": "Freund",-->
<!--          "nit": "045478787",-->
<!--          "phone": "7778877878",-->
<!--          "tipo": "PROVEEDOR",-->
<!--          "company_id": 19,-->
<!--          "deleted_at": null-->
<!--          }-->
<!--          }-->
<!--          ]-->
        </div>
      </div>
    </q-card>
  </q-page>
</template>
<script>
import moment from "moment";

export default {
  name: 'ViajesActivosIndex',
  data () {
    return {
      loading: false,
      fechaInicio: moment().startOf('month').format('YYYY-MM-DD'),
      fechaFin: moment().endOf('month').format('YYYY-MM-DD'),
    //   - Reportes de Gastos en un rango de fechas
    // - Reporte de Clientes
    // - Reporte de Deudores
    // - Reporte de proveedores
    // - Reporte de consolidado.
    // - Reporte de Ganancias por rando de fechas.
    //   - reporte de Venta,
    //   - Reporte de descarga
    // - Reporte  de lances
    // - Reporte de provision consumida en el viaje
    // - Reporte  de cuentas por cobrar
      tipoReportes: [
        {label: 'Gastos', value: 'Gastos'},
        {label: 'Clientes', value: 'Clientes'},
        {label: 'Deudores', value: 'Deudores'},
        {label: 'Proveedores', value: 'Proveedores'},
        {label: 'Consolidado', value: 'Consolidado'},
        {label: 'Ganancias', value: 'Ganancias'},
        {label: 'Venta', value: 'Venta'},
        {label: 'Descarga', value: 'Descarga'},
        {label: 'Lances', value: 'Lances'},
        {label: 'Provision', value: 'Provision'},
        {label: 'Cuentas por Cobrar', value: 'Cuentas por Cobrar'},
      ],
      tipoReporte: 'Gastos',
      data: [],
    }
  },
  mounted() {
  },
  methods: {
    reporteGenerarList() {
      this.loading = true;
      this.$axios
        .get('reporte', {
          params: {
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            tipo: this.tipoReporte,
            get: 'list',
          }
        })
        .then(response => {
          // console.log(response.data);
          this.data = response.data;
        })
        .catch(error => {
          this.$alert.error('No existe información para el rango de fechas seleccionado');
        })
        .finally(() => {
          this.loading = false;
        });
    },
    reporteGenerar() {
      this.loading = true;
      this.$axios
        .get('reporte', {
          responseType: 'blob',
          params: {
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
            tipo: this.tipoReporte,
            get: 'pdf',
          }
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
          const link = window.document.createElement('a'); // Usa window.document para evitar conflictos
          link.href = url;
          link.setAttribute('download', `reporte.pdf`);
          window.document.body.appendChild(link);
          link.click();
          link.remove(); // Elimina el elemento del DOM
          window.URL.revokeObjectURL(url); // Libera el URL del blob
        })
        .catch(error => {
          this.$alert.error('No existe información para el rango de fechas seleccionado');
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
};
</script>
