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
          <q-btn color="indigo" label="Buscar" @click="viajeGet" no-caps icon="search" :loading="loading"/>
          <q-btn color="green" label="Agregar" @click="viajeAdd" no-caps icon="add_circle_outline" :loading="loading"/>
        </div>
      </div>
    </q-card>
    <q-table :rows="viajes" :columns="columns" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading"
             @rowClick="viajeClick"
    >
      <template v-slot:body-cell-option="props">
        <q-td auto-width>
          <q-btn-dropdown label="Opciones" color="primary" auto-close no-caps size="10px" @click="(event) => { event.stopPropagation() }">
            <q-list>
              <q-item clickable v-ripple @click="viajeEdit(props.row)" v-if="props.row.estado === 'Activo'">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Editar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="viajeDelete(props.row)" v-if="props.row.estado === 'Activo'">
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="addProducts(props.row)" v-if="props.row.estado === 'Activo'">
                <q-item-section avatar>
                  <q-icon name="add_circle_outline" />
                </q-item-section>
                <q-item-section>Agregar Descarga</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="addLance(props.row)" v-if="props.row.estado === 'Activo'">
                <q-item-section avatar>
                  <q-icon name="add_circle_outline" />
                </q-item-section>
                <q-item-section>Agregar Lance</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="listaTripulantes(props.row)">
                <q-item-section avatar>
                  <q-icon name="print" />
                </q-item-section>
                <q-item-section>Lista Tripulantes</q-item-section>
              </q-item>
              <q-item clickable v-ripple :to="'/viajesConciliacion/' + props.row.id">
                <q-item-section avatar>
                  <q-icon name="check_circle" />
                </q-item-section>
                <q-item-section>Consolidado</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="viajeClose(props.row)" v-if="props.row.estado === 'Activo'">
                <q-item-section avatar>
                  <q-icon name="close" />
                </q-item-section>
                <q-item-section>Cerrar Viaje</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
<!--          <q-btn flat dense icon="edit" @click="viajeEdit(props.row)" >-->
<!--            <q-tooltip>Editar</q-tooltip>-->
<!--          </q-btn>-->
<!--          <q-btn flat dense icon="delete" @click="viajeDelete(props.row)" >-->
<!--            <q-tooltip>Eliminar</q-tooltip>-->
<!--          </q-btn>-->
        </q-td>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <q-chip :label="props.row?.boat?.company?.name" text-color="white" :style="{backgroundColor: props.row?.boat?.company?.color}" icon="business" />
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-chip :label="props.row?.estado" text-color="white"  dense v-if="props.row?.estado === 'Activo'" color="green" />
          <q-chip :label="props.row?.estado" text-color="white"  dense v-else color="red" />
        </q-td>
      </template>
    </q-table>
<!--    <pre>{{viajes}}</pre>-->
    <q-dialog v-model="viajeDialog" persistent>
      <q-card style="width: 650px;max-width: 95vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ viaje.id ? 'Editar' : 'Agregar' }} Viaje</div>
          <q-space />
          <q-btn flat dense icon="close" @click="viajeDialog = false" />
        </q-card-section>
        <q-form @submit="viajeSave">
          <q-card-section>
            <div class="row">
              <div class="col-6 col-md-3">
                <q-input v-model="viaje.fechaInicio" label="Fecha Inicio" type="date" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" @update:modelValue="caculoDias" />
              </div>
              <div class="col-6 col-md-3">
                <q-input v-model="viaje.fechaFin" label="Fecha Fin" type="date" outlined dense
                         :rules="[val => !!val || 'Campo requerido', val => moment(val).isSameOrAfter(viaje.fechaInicio) || 'La fecha debe ser mayor o igual a la fecha de inicio']"
                          @update:modelValue="caculoDias"
                />
              </div>
              <div class="col-6 col-md-3">
                <q-input v-model="viaje.hora" label="Hora" outlined dense type="time"
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-6 col-md-3">
                <q-input v-model="viaje.dias" label="Días" outlined dense type="number"
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="viaje.zarpe" label="Zarpe" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12 col-md-6">
                <q-select v-model="viaje.boat_id" :options="boats" label="Barco" outlined dense
                          :rules="[val => !!val || 'Campo requerido']"
                          map-options emit-value
                          @update:modelValue="changePropietario"
                          option-value="id" option-label="name"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="viaje.puertoSalida" label="Puerto de Salida" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="viaje.puertoLlegada" label="Puerto de Llegada" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="viaje.bandera" label="Bandera" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="viaje.propietario" label="Propietario" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <q-markup-table flat bordered dense wrap-cells>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Cargo</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(crew, index) in crewViajes" :key="index">
                      <td>{{index + 1}}</td>
                      <td>
                        <q-select v-model="crew.crew_id" :options="crews" outlined dense
                                  map-options emit-value
                                  option-value="id" option-label="name"/>
                      </td>
                      <td>
                        <q-select v-model="crew.cargo" :options="$cargos" outlined dense
                                  value-field="value" label-field="label"
                                  map-options emit-value/>
                      </td>
                      <td>
                        <q-btn rounded color="red" dense icon="delete" @click="crewViajes.splice(index, 1)" v-if="crewViajes.length > 1 && index !== crewViajes.length - 1" />
                        <q-btn rounded color="green" dense icon="add" @click="crewViajes.push({ crew_id: '', cargo: '' })" v-if="index === crewViajes.length - 1" />
                      </td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
<!--              <pre>{{crewViajes}}</pre>-->
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" v-close-popup :loading="loading"  no-caps class="text-bold"/>
            <q-btn color="primary" label="Guardar" type="submit" :loading="loading" no-caps class="text-bold" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import moment from "moment";

export default {
  name: 'CompaniesIndex',
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
    this.viajeGet()
    this.boatsGet()
  },
  methods: {
    changePropietario (val) {
      const boat = this.boats.find(boat => boat.id === val)
      this.viaje.propietario = boat.company.name
    },
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
    addLance (viaje) {
      this.$router.push('/viajesLance/' + viaje.id)
    },
    viajeDelete (viaje) {
      this.$alert.confirm('¿Está seguro de eliminar este viaje?').onOk(() => {
        this.loading = true
        this.$axios.delete(`viajes/${viaje.id}`).then(res => {
          const index = this.viajes.findIndex(viaje => viaje.id === res.data.id)
          console.log(index)
          if (index !== -1) this.viajes.splice(index, 1)
          this.$alert.success('Viaje eliminado')
        }).catch(error => {
          // this.$alert.error(error.response.data.message)
          this.$alert.error('No se puede eliminar este viaje')
        }).finally(() => {
          this.loading = false
        })
      })
    },
    viajeClick (event, viaje) {
      this.$router.push('/viajesShow/' + viaje.id)
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
    viajeGet () {
      this.loading = true
      this.$axios.get('viajes',{
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
