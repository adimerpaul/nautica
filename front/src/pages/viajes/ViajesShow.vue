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
              <tr v-for="item in viaje.products" :key="item.id">
                <td>
                  <q-btn
                    color="primary"
                    label="Editar"
                    no-caps
                    size="sm"
                    icon="edit"
                  />
                  <q-btn
                    color="negative"
                    label="Eliminar"
                    no-caps
                    size="sm"
                    icon="delete"
                  />
                </td>
                <td>{{$filters.formatdMY(item.fecha)}}</td>
                <td>
                  <q-chip :label="item.status" text-color="white"  dense v-if="item.status === 'Finalizado'" color="green" />
                  <q-chip :label="item.status" text-color="white"  dense v-if="item.status === 'Pendiente'" color="orange" />
                  <q-chip :label="item.status" text-color="white"  dense v-if="item.status === 'En curso'" color="blue" />
                </td>
                <td>{{item.product.name}}</td>
                <td>{{item.cantidad}}</td>
                <td>{{item.user.name}}</td>
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
            :rules="[val => !!val || 'Ingrese una cantidad']"
          />
          <q-btn
            color="green"
            label="Agregar"
            @click="() => { console.log('Agregar') }"
            no-caps
            class="text-bold full-width"
            icon="add_circle_outline"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
    <pre>{{viaje}}</pre>
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
      product_id: '',
      cantidad: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getViaje()
    this.debouncedUpdateObservaciones = debounce(this.updateObservaciones, 2000);
    this.productsGet()
  },
  methods: {
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
      this.$axios.get(`viajes/${this.id}`)
        .then(response => {
          this.viaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>
