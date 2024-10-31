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
            @click="() => { this.$router.go(-1) }"
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
          <q-btn
            color="primary"
            label="Actualizar"
            @click="viajesConciliacion"
            no-caps
            icon="refresh"
            size="sm"
            :loading="loading"></q-btn>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <q-input v-model="fechaIni" outlined dense label="Fecha Inicio" type="date"  />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <q-input v-model="fechaFin" outlined dense label="Fecha Fin" type="date"  />
        </div>
        <div class="col-12 col-md-8 q-pa-xs">
        </div>
        <div class="col-12">
          <q-markup-table flat dense bordered>
            <thead>
              <tr class="bg-primary text-white">
                <th class="text-center">Producto</th>
                <th class="text-center">Descarga</th>
                <th class="text-center">Lances</th>
                <th class="text-center">Ventas</th>
                <th class="text-center">Inventario</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product,i) in products" :key="i">
                <td>{{product.name}}</td>
                <td class="text-center">{{product.descarga}}</td>
                <td class="text-center">{{product.lances}}</td>
                <td class="text-center">{{product.ventas}}</td>
                <td class="text-center">{{product.inventario}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
<!--        <div class="col-12 col-md-3 q-pa-xs">-->
<!--          <div class="bg-primary text-white text-h6 text-center">Descargas</div>-->
<!--          <q-markup-table dense flat bordered>-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th class="text-center">Producto</th>-->
<!--                <th class="text-center">Cantidad</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--          </q-markup-table>-->
<!--        </div>-->
<!--        <div class="col-12 col-md-3 q-pa-xs">-->
<!--          <div class="bg-primary text-white text-h6 text-center">Lances</div>-->
<!--        </div>-->
<!--        <div class="col-12 col-md-3 q-pa-xs">-->
<!--          <div class="bg-primary text-white text-h6 text-center">Ventas</div>-->
<!--        </div>-->
<!--        <div class="col-12 col-md-3 q-pa-xs">-->
<!--          <div class="bg-primary text-white text-h6 text-center">Inventario</div>-->
<!--        </div>-->
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
      fechaIni: '',
      fechaFin: '',
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
    // this.productsGet()
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
      this.$axios.get(`viajes/${this.id}`)
        .then(response => {
          this.viaje = response.data.viaje
          this.fechaIni = moment(this.viaje.fechaInicio).format('YYYY-MM-DD')
          this.fechaFin = moment(this.viaje.fechaFin).format('YYYY-MM-DD')
          this.viajesConciliacion()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    },
    viajesConciliacion() {
      const params = {
        fechaIni: this.fechaIni,
        fechaFin: this.fechaFin
      }
      this.$axios.get(`viajesConciliacion/${this.id}`, { params })
          .then(response => {
            this.viaje = response.data.viaje
            this.products = response.data.productos
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
