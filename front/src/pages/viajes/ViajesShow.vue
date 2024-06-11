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
          <q-editor v-model="viaje.observaciones" @update:model-value="debouncedUpdateObservaciones" height="100px" />
        </div>
        <div class="col-12 text-right q-pa-xs">
          <q-btn
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
<!--            protected $fillable = ['product_id', 'viaje_id', 'cantidad', 'fecha', 'status', 'user_id'];-->
              <tr>
                <th>Acciones</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Producto</th>
                <th>Cantidad</th>
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
                    v-if="item.status === 'ACTIVO'"
                  />
                </td>
                <td>{{$filters.formatdMYHID(item.fecha)}}</td>
                <td>
                  <q-chip label="Activo" text-color="white" dense v-if="item.status === 'ACTIVO'" color="green" />
                  <q-chip label="Anulado" text-color="white" dense v-if="item.status === 'INACTIVO'" color="red" />
<!--                  <q-chip :label="item.status" text-color="white"  dense v-if="item.status === 'En curso'" color="blue" />-->
                </td>
                <td class="text-bold">{{item.product?.name}}</td>
                <td class="text-right">{{item.cantidad}}</td>
                <td class="text-right">{{item.user?.name}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </q-card>
    <q-dialog v-model="dialogAgregarProducto">
      <q-card style="witdh: 300px;max-width: 300px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Agregar Producto</div>
          <q-space/>
          <q-btn
            flat
            round
            dense
            icon="close"
            @click="() => { dialogAgregarProducto = false }"
          />
        </q-card-section>
        <q-form @submit="productAdd">
          <q-card-section>
            <q-select
              v-model="product_id"
              :options="products"
              label="Producto"
              emit-value
              map-options
              use-input
              fill-input
              clearable
              outlined
              option-value="id"
              option-label="name"
              @filter="filterFn"
              :rules="[val => !!val || 'Seleccione un producto']"
            />
            <q-input
              v-model="cantidad"
              label="Cantidad"
              type="number"
              clearable
              outlined
              step="0.01"
              :rules="[val => !!val || 'Ingrese una cantidad']"
            />
            <q-btn
              color="green"
              label="Agregar"
              type="submit"
              no-caps
              class="text-bold full-width"
              icon="add_circle_outline"
              :loading="loading"
            />
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
<!--    <pre>{{productViaje}}</pre>-->
  </q-page>
</template>

<script>
import { debounce } from 'lodash';

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
      product_id: '',
      cantidad: '',
      loading: false,
      productViaje: []
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getViaje()
    this.debouncedUpdateObservaciones = debounce(this.updateObservaciones, 2000);
    this.productsGet()
  },
  methods: {
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
            console.log(error)
          }).finally(() => {
            this.loading = false
          })
      })
    },
    productAdd() {
      this.loading = true
      this.$axios.post('productAdd', {
        product_id: this.product_id,
        cantidad: this.cantidad,
        viaje_id: this.id
      })
        .then(response => {
          this.productViaje.unshift(response.data)
          this.dialogAgregarProducto = false
        })
        .catch(error => {
          console.log(error)
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
      this.dialogAgregarProducto = true
      this.product_id = ''
      this.cantidad = ''
    },
    updateObservaciones(value) {
      this.$axios.put(`updateObservaciones/${this.id}`, { observaciones: value })
        .then(response => {
          this.viaje = response.data
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
