<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <div class="row">
        <div class="col-6 col-md-2 q-pa-xs">
          <q-btn
            color="primary"
            label="Volver"
            @click="() => { this.$router.push('/viajes') }"
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
          <label class="text-bold">Fecha Inicio</label>
          <div>{{$filters.formatdMY(viaje.fechaInicio)}}</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Fecha Fin</label>
          <div>{{$filters.formatdMY(viaje.fechaFin)}}</div>
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
        <div class="col-12">
          <label class="text-bold">Observaciones</label>
          <q-editor min-height="5rem" v-model="viaje.observaciones" @update:model-value="debouncedUpdateObservaciones"  />
        </div>
        <div class="col-12 text-right q-pa-xs">
          <q-btn
            color="primary"
            label="Exportar PDF"
            @click="imprimirPdfTotal"
            no-caps
            icon="picture_as_pdf"
            size="sm"
            :loading="loading"></q-btn>

          <q-btn
            v-if="viaje.estado === 'Activo'"
            color="green"
            label="Agregar Producto"
            @click="dialogAgregarProductoClick"
            no-caps
            size="sm"
            class="text-bold"
            icon="add_circle_outline"
            :loading="loading"
          />
        </div>
        <div class="col-12">
          <q-markup-table dense>
            <thead class="bg-primary text-white">
<!--            protected $fillable = ['product', 'viaje_id', 'cantidad', 'fecha', 'status', 'user_id'];-->
              <tr>
                <th>Acciones</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Producto</th>
<!--                <th>Libras</th>-->
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in productViaje" :key="item.id">
                <td>
                  <q-btn
                    color="negative"
                    label="Anular"
                    no-caps
                    dense
                    size="10px"
                    icon="delete"
                    @click="anular(item)"
                    v-if="item.status === 'ACTIVO' && viaje.estado === 'Activo'"
                    :loading="loading"
                  />
                  <q-chip
                    label="Anulado"
                    text-color="white"
                    dense
                    v-if="item.status === 'INACTIVO'"
                    color="red"
                  />
                  <q-btn
                    color="primary"
                    label="Imprimir"
                    no-caps
                    dense
                    size="10px"
                    icon="print"
                    v-if="item.status === 'ACTIVO'"
                    @click="imprimirPdf(item)"
                    :loading="loading"></q-btn>
                </td>
                <td>{{$filters.formatdMYHID(item.fecha)}}</td>
                <td>
                  <q-chip label="Activo" text-color="white" dense v-if="item.status === 'ACTIVO'" color="green" />
                  <q-chip label="Anulado" text-color="white" dense v-if="item.status === 'INACTIVO'" color="red" />
<!--                  <q-chip :label="item.status" text-color="white"  dense v-if="item.status === 'En curso'" color="blue" />-->
                </td>
                <td class="">
                  <div class="" style="width: 350px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                    {{item.details}}
                  </div>
                </td>
<!--                <td class="text-right">{{item.cantidad}}</td>-->
                <td class="text-right">{{item.user?.name}}</td>
              </tr>
            </tbody>
          </q-markup-table>
<!--          <pre>{{productViaje}}</pre>-->
        </div>
      </div>
    </q-card>
    <q-dialog v-model="dialogAgregarProducto">
      <q-card style="width: 750px;max-width: 95vh;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle2 text-bold">Descarga {{viaje.boat?.name}}</div>
          <q-space/>
          <q-btn
            flat
            round
            dense
            icon="close"
            @click="() => { dialogAgregarProducto = false }"
          />¡
        </q-card-section>
        <q-form @submit="productAdd">
          <q-card-section>
            <div class="row">
              <div class="col-12 col-md-4 q-pa-xs">
                <label for="Nro Descarga">Nro Descarga</label><br>
<!--                # <q-chip :label="descargar.descarga" text-color="white"  dense color="primary" />-->
                <q-input v-model="descargar.descarga" outlined filled dense />
              </div>
              <div class="col-12 col-md-4 q-pa-xs">
                <label for="Dia">Dia</label><br>
<!--                <q-chip :label="descargar.dia" text-color="white"  dense color="primary" /> Dia-->
                <q-input v-model="descargar.dia" outlined filled dense />
              </div>
              <div class="col-12 col-md-4 q-pa-xs">
                <label for="Dia">Fecha</label><br>
                <q-input v-model="descargar.fecha" outlined type="date" filled dense />
              </div>
              <div class="col-12 col-md-6 q-pa-xs">
                <label for="Dia">Producto</label><br>
                <q-select
                  v-model="product"
                  :options="products"
                  emit-value
                  map-options
                  use-input
                  clearable
                  outlined
                  option-label="name"
                  @filter="filterFn"
                  dense
                />
<!--                <pre>{{product}}</pre>-->
              </div>
              <div class="col-12 col-md-3 q-pa-xs">
                <label for="Cantidad">Libras</label><br>
                <q-input
                  v-model="cantidad"
                  placeholder="Libras"
                  clearable
                  outlined
                  dense
                />
              </div>
              <div class="col-12 col-md-3 text-center q-mt-md q-pa-xs">
                <q-btn
                  color="primary"
                  label="Agregar"
                  @click="agregarProducto"
                  no-caps
                  class="text-bold"
                  icon="add_circle_outline"
                  :loading="loading"
                />
              </div>
              <div class="col-12 q-mt-md">
                <q-markup-table dense >
                  <thead class="bg-primary text-white">
                    <tr>
                      <th>Producto</th>
                      <th>Stock</th>
                      <th>Opcion</th>
                    </tr>
                  </thead>
                  <tbody v-if="productBuy.length > 0">
                    <tr v-for="item in productBuy" :key="item.id">
                      <td>{{item.name}}</td>
                      <td class="text-right">{{item.stock}}</td>
                      <td class="text-right">
                        <q-btn
                          color="negative"
                          label="Eliminar"
                          no-caps
                          dense
                          size="10px"
                          icon="delete"
                          @click="() => { productBuy = productBuy.filter(v => v.id !== item.id) }"
                        />
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="2" class="text-center">No hay productos</td>
                    </tr>
                  </tbody>
                </q-markup-table>
<!--                <pre>{{productBuy}}</pre>-->
              </div>
              <div class="col-12 text-right">
                <q-btn
                  color="green"
                  label="Guardar"
                  @click="productAdd"
                  no-caps
                  class="text-bold"
                  icon="save"
                  :loading="loading"
                />
              </div>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
<!--    <pre>{{productViaje}}</pre>-->
  </q-page>
</template>

<script>
import { debounce } from 'lodash';
import moment from "moment";

export default {
  name: 'ViajesShow',
  data () {
    return {
      id: '',
      viaje: {
        observaciones: ''
      },
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
      }
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getViaje()
    this.debouncedUpdateObservaciones = debounce(this.updateObservaciones, 1000);
    this.productsGet()
  },
  methods: {
    agregarProducto() {
      if (this.product === '') {
        this.$alert.error('Seleccione un producto')
        return false
      }
      if (this.cantidad === '') {
        this.$alert.error('Ingrese una cantidad')
        return false
      }
      //verificar si ya eite el producto
      const exist = this.productBuy.find(v => v.id === this.product.id)
      if (exist) {
        this.$alert.error('El producto ya fue agregado')
        return false
      }
      this.productBuy.push({
        id: this.product.id,
        name: this.product.name,
        stock: this.cantidad
      })
      this.product = ''
      this.cantidad = ''
    },
    imprimirPdfTotal() {
      this.loading = true
      this.$axios.get('exportDescargarPdfTotal/' + this.id, {
        responseType: 'blob'
      })
        .then(response => {
          // console.log(response.data)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'descarga.pdf')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
    },
    imprimirPdf(item) {
      this.loading = true
      this.$axios.get('exportDescargarPdf/' + item.id, {
        responseType: 'blob'
      })
        .then(response => {
          // console.log(response.data)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'descarga.pdf')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
    },
    anular(item) {
      this.$alert.confirm('¿Está seguro de anular este producto?').onOk(() => {
        this.loading = true
        this.$axios.put(`productAnular/${item.id}`)
          .then(response => {
            this.productViaje = this.productViaje.map(v => {
              if (v.id === item.id) {
                v.status = 'INACTIVO'
              }
              return v
            })
          })
          .catch(error => {
            this.$alert.error(error.response.data.message)
          }).finally(() => {
            this.loading = false
          })
      })
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
    filterFn(val, update, abort) {
      if (val === '') {
        update(() => {
          this.products = this.productsAll
        })
        return
      }
      const needle = val.toLowerCase()
      update(() => {
        this.products = this.productsAll.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
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
    dialogAgregarProductoClick() {

      const fechaInicio = moment(this.viaje?.fechaInicio)
      const fechaActual = moment()
      const dias = fechaActual.diff(fechaInicio, 'days')

      this.dialogAgregarProducto = true
      this.product = ''
      this.cantidad = ''
      this.descargar = {
        viaje_id: this.id,
        descarga: this.productViaje.length + 1,
        dia: dias + 1,
        fecha: moment().format('YYYY-MM-DD')
      }
      this.productBuy = []
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
          this.productViaje = response.data.productoViaje
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
