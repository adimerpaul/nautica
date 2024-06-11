<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <div class="row">
        <div class="col-6 col-md-2 q-pa-xs">
          <q-input v-model="fechaInicio" label="Fecha Inicio" type="date" outlined dense />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <q-input v-model="fechaFin" label="Fecha Fin" type="date" outlined dense />
        </div>
        <div class="col-12 col-md-3 q-pa-xs">
          <q-input v-model="filter" label="Buscar" outlined dense />
        </div>
        <div class="col-12 col-md-5 q-pa-xs text-right">
          <q-btn color="indigo" label="Buscar" @click="viajeGet" no-caps icon="search" />
          <q-btn color="green" label="Agregar" @click="viajeAdd" no-caps icon="add_circle_outline" />
        </div>
      </div>
    </q-card>
    <q-table :rows="viajes" :columns="columns" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading">
      <template v-slot:body-cell-option="props">
        <q-td auto-width>
          <q-btn-dropdown label="Opciones" color="primary" auto-close no-caps size="10px" v-if="props.row.status !== 'Finalizado'">
            <q-list>
              <q-item clickable v-ripple @click="viajeEdit(props.row)">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Editar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="viajeDelete(props.row)">
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="addProducts(props.row)">
                <q-item-section avatar>
                  <q-icon name="add_shopping_cart" />
                </q-item-section>
                <q-item-section>Agregar productos</q-item-section>
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
          <q-chip :label="props.row?.status" text-color="white"  dense v-if="props.row?.status === 'Finalizado'" color="green" />
          <q-chip :label="props.row?.status" text-color="white"  dense v-if="props.row?.status === 'Pendiente'" color="orange" />
          <q-chip :label="props.row?.status" text-color="white"  dense v-if="props.row?.status === 'En curso'" color="blue" />
        </q-td>
      </template>
    </q-table>
<!--    <pre>{{viajes}}</pre>-->
    <q-dialog v-model="viajeDialog" persistent>
      <q-card style="width: 250px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ viaje.id ? 'Editar' : 'Agregar' }} Viaje</div>
          <q-space />
          <q-btn flat dense icon="close" @click="viajeDialog = false" />
        </q-card-section>
        <q-form @submit="viajeSave">
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <q-input v-model="viaje.fechaInicio" label="Fecha Inicio" type="date" outlined dense
                         :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <q-input v-model="viaje.fechaFin" label="Fecha Fin" type="date" outlined dense
                         :rules="[val => !!val || 'Campo requerido', val => moment(val).isSameOrAfter(viaje.fechaInicio) || 'La fecha debe ser mayor o igual a la fecha de inicio']" />
              </div>
              <div class="col-12">
                <q-select v-model="viaje.boat_id" :options="boats" label="Barco" outlined dense
                          :rules="[val => !!val || 'Campo requerido']"
                          map-options emit-value
                          option-value="id" option-label="name"
                />
              </div>
<!--              <pre>{{viaje}}</pre>-->
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" v-close-popup :loading="loading" />
            <q-btn color="primary" label="Guardar" type="submit" :loading="loading" />
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
      boats: []
    }
  },
  mounted() {
    this.viajeGet()
    this.boatsGet()
  },
  methods: {
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
    viajeEdit (viaje) {
      this.viajeDialog = true
      this.viaje = {...viaje}
    },
    viajeAdd () {
      this.viajeDialog = true
      this.viaje = {
        fechaInicio: moment().format('YYYY-MM-DD'),
        fechaFin: moment().add(1, 'week').format('YYYY-MM-DD'),
        boat_id: ''
      }
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
