<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <div class="row">
        <div class="col-12">
          <div class="text-h5 text-center bg-primary text-white">Concolidados</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <q-btn
            color="primary"
            label="Volver"
            @click="() => { this.$router.push('/viajesActivos') }"
            no-caps
            icon="arrow_back"
            size="sm"
            :loading="loading"
          />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Viaje</label>
          <br>
          <q-chip :label="viaje?.status" text-color="white"  dense v-if="viaje?.status === 'Finalizado'" color="green" />
          <q-chip :label="viaje?.status" text-color="white"  dense v-if="viaje?.status === 'Pendiente'" color="orange" />
          <q-chip :label="viaje?.status" text-color="white"  dense v-if="viaje?.status === 'En curso'" color="blue" />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Fechas</label>
          <div>{{$filters.formatdMY(viaje.fechaInicio)}} {{$filters.formatdMY(viaje.fechaFin)}}</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Barco</label>
          <div>{{viaje.boat?.name}}</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Empresa</label>
          <br>
          <q-chip size="12px" :label="viaje?.boat?.company?.name" text-color="white" :style="{backgroundColor: viaje?.boat?.company?.color}" icon="business" />
        </div>
        <div class="col-6 col-md-2 q-pa-xs q-mt-md">
<!--          btn actualizar-->
          <q-btn
            color="primary"
            label="Actualizar"
            @click="getViaje"
            no-caps
            icon="refresh"
            size="sm"
            :loading="loading"></q-btn>
<!--          <q-btn :loading="loading" label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>-->
        </div>
        <div class="col-12 col-md-3 q-pa-xs">
          <div class="bg-primary text-white text-h6 text-center">Descargas</div>
        </div>
        <div class="col-12 col-md-3 q-pa-xs">
          <div class="bg-primary text-white text-h6 text-center">Lances</div>
        </div>
        <div class="col-12 col-md-3 q-pa-xs">
          <div class="bg-primary text-white text-h6 text-center">Ventas</div>
        </div>
        <div class="col-12 col-md-3 q-pa-xs">
          <div class="bg-primary text-white text-h6 text-center">Inventario</div>
        </div>
      </div>
    </q-card>
    <div id="myElement" class="hidden"></div>
<!--    <pre>{{viaje}}</pre>-->
  </q-page>
</template>

<script>
import { debounce } from 'lodash';
import moment from "moment";
import DialogGasto from "pages/index/DialogGasto.vue";

export default {
  name: 'ViajesShow',
  // components: {DialogGasto},
  data () {
    return {
      id: '',
      viaje: {
        observaciones: ''
      },
      gastoDialog: false,
      debouncedUpdateObservaciones: null,
      dialogAgregarProducto: false,
      products: [],
      productsAll: [],
      product: '',
      cantidad: '',
      loading: false,
      productViaje: [],
      productBuy: [],
      descargar: {
        viaje_id: '',
        descarga: '',
        dia: '',
        fecha: '',
      },
      lanceDialog: false,
      lance: {},
      lances: [],
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getViaje()
    this.debouncedUpdateObservaciones = debounce(this.updateObservaciones, 1000);
    this.productsGet()
  },
  methods: {
    gastoCreated (gasto) {
      this.gastoDialog = false
    },
    productAdd() {
      this.loading = true
      this.$axios.post('productAdd', {
        products: this.productBuy,
        descarga: this.descargar
      })
        .then(response => {
          // this.productViaje.unshift(response.data)
          this.dialogAgregarProducto = false
          this.$alert.success('Producto agregado')
          this.getViaje()
        })
        .catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
    },
    productsGet() {
      this.$axios.get('products')
        .then(response => {
          this.products = response.data
          this.productsAll = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateObservaciones(value) {
      this.$axios.put(`updateObservaciones/${this.id}`, { observaciones: value })
        .then(response => {
          // this.viaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getViaje() {
      this.loading = true
      this.$axios.get(`viajesConciliacion/${this.id}`)
        .then(response => {
          this.viaje = response.data.viaje
          // this.productViaje = response.data.productoViaje
          // this.lances = response.data.lances
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    }
  }
};
</script>
