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
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'name', label: 'Empresa', align: 'left', field: row => row?.boat?.company?.name },
        { name: 'boat', label: 'Barco', align: 'left', field: row => row?.boat?.name },
        { name: 'zarpe', label: 'Zarpe', align: 'left', field: row => row.zarpe },
        { name: 'dias', label: 'Días', align: 'left', field: row => row.dias },
        { name: 'fechaInicio', label: 'Fecha Inicio', align: 'left', field: row => this.$filters.formatdMY(row.fechaInicio) },
        { name: 'fechaFin', label: 'Fecha Fin', align: 'left', field: row => this.$filters.formatdMY(row.fechaFin) },
        { name: 'status', label: 'Estado', align: 'left', field: row => row.status },
      ],
      loading: false,
      moment: moment,
      viajes: [],
      viaje: {},
      viajeDialog: false,
      clienDialogHistory: false,
      filter: '',
      passwordShow: false,
      boats: [],
      crewViajes: [
        { crew_id: '', cargo: '' },
      ],
      crews: [],
    }
  },
  mounted() {
    this.crewsGet()
    this.viajeActivosGet()
    this.boatsGet()
  },
  methods: {
    crewsGet () {
      this.loading = true
      this.$axios.get('crews').then(response => {
        this.crews = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    caculoDias () {
      if (this.viaje.fechaInicio && this.viaje.fechaFin) {
        const dias = moment(this.viaje.fechaFin).diff(moment(this.viaje.fechaInicio), 'days')
        this.viaje.dias = dias
      }
    },
    boatsGet () {
      this.loading = true
      this.$axios.get('boats').then(response => {
        this.boats = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    viajeSave () {
      const crewIds = this.crewViajes.map(crew => crew.crew_id)
      if (crewIds.length !== new Set(crewIds).size) {
        this.$alert.error('No puede agregar tripulantes repetidos')
        this.loading = false
        return
      }
      if (this.crewViajes.some(crew => !crew.crew_id)) {
        this.$alert.error('Debe seleccionar un tripulante')
        this.loading = false
        return
      }
      this.viaje.crews = this.crewViajes
      this.loading = true
      if (this.viaje.id) {
        this.$axios.put(`viajes/${this.viaje.id}`, this.viaje).then(response => {
          this.viajeDialog = false
          const index = this.viajes.findIndex(viaje => viaje.id === this.viaje.id)
          this.viajes.splice(index, 1, response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {

        this.$axios.post('viajes', this.viaje).then(response => {
          this.viajeDialog = false
          this.viajes.unshift(response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    viajeClose (viaje) {
      this.$alert.confirm('¿Está seguro de cerrar este viaje?').onOk(() => {
        this.loading = true
        this.$axios.put(`viajes/${viaje.id}/close`).then(response => {
          const index = this.viajes.findIndex(viaje => viaje.id === response.data.id)
          this.viajes.splice(index, 1, response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    listaTripulantes (viaje) {
      this.loading = true
      this.$axios.get(`listaTripulantes/${viaje.id}`, {
        responseType: 'blob'
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        const link = window.document.createElement('a'); // Usa window.document para evitar conflictos
        link.href = url;
        link.setAttribute('download', `listaTripulantes-${viaje.id}.pdf`);
        window.document.body.appendChild(link);
        link.click();
        link.remove(); // Elimina el elemento del DOM
        window.URL.revokeObjectURL(url); // Libera el URL del blob
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    addProducts (viaje) {
      this.$router.push('/viajesShow/' + viaje.id)
    },
    viajeDelete (viaje) {
      this.$alert.confirm('¿Está seguro de eliminar este viaje?').onOk(() => {
        this.loading = true
        this.$axios.delete(`viajes/${viaje.id}`).then(res => {
          const index = this.viajes.findIndex(viaje => viaje.id === res.data.id)
          console.log(index)
          if (index !== -1) this.viajes.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    viajeClick (event, viaje) {
      this.$router.push('/viajesConciliacion/' + viaje.id)
    },
    viajeEdit (viaje) {
      this.viajeDialog = true
      this.viaje = {...viaje}
      this.crewViajes = []
      viaje.crews.forEach(crew => {
        this.crewViajes.push({ crew_id: crew.id, cargo: crew.pivot.role })
      })
      if (this.crewViajes.length === 0) {
        this.crewViajes = [
          { crew_id: '', cargo: '' },
        ]
      }
    },
    viajeAdd () {
      this.crewViajes = [
        { crew_id: '', cargo: '' },
      ]
      this.viajeDialog = true
      this.viaje = {
        fechaInicio: moment().format('YYYY-MM-DD'),
        fechaFin: moment().add(1, 'month').format('YYYY-MM-DD'),
        boat_id: '',
        observaciones: '',
        hora: moment().format('HH:00'),
        dias: '',
        zarpe: '',
        puertoSalida: 'MUELLE DE PESCA, PUERTO EL TRIUNFO',
        puertoLlegada: 'MUELLE DE PESCA, PUERTO EL TRIUNFO',
        bandera: 'SALVADOREÑA ESA-00283 (ARB 90.74 TM)',
        propietario: 'LA REYNAGA MORENO, S.A. DE C.V.'
      }
      this.caculoDias()
    },
    viajeActivosGet () {
      this.loading = true
      this.$axios.get('viajesActivos',{
        params: {
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFin
        }
      }).then(response => {
        this.viajes = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  },
};
</script>
