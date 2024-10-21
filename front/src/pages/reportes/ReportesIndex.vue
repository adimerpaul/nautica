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
        <div class="col-12 col-md-3 q-pa-xs">
          <q-input v-model="filter" label="Buscar" outlined dense :loading="loading" />
        </div>
        <div class="col-12 col-md-5 q-pa-xs text-right">
          <q-btn color="indigo" label="Buscar" @click="viajeActivosGet" no-caps icon="search" :loading="loading"/>
<!--          <q-btn color="green" label="Agregar" @click="viajeAdd" no-caps icon="add_circle_outline" :loading="loading"/>-->
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
      fechaInicio: moment().startOf('month').format('YYYY-MM-DD'),
      fechaFin: moment().endOf('month').format('YYYY-MM-DD'),
    }
  },
  mounted() {
  },
  methods: {
  },
};
</script>
