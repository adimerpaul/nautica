<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="row">
              <div class="col-12 col-md-4">
                <q-input v-model="search" label="Buscar" outlined dense @update:modelValue="filterProductsSearch" clearable />
              </div>
              <div class="col-12 col-md-3 text-right">
                <q-select v-model="category" :options="categories" label="Categoría" outlined dense
                          option-value="id" option-label="name"
                          @update:modelValue="filterProducts" />
              </div>
              <div class="col-12 col-md-5 text-right">
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6 col-md-2" v-for="product in products" :key="product.id">
                    <q-card class="q-ma-xs cursor-pointer" flat bordered @click="orderAdd(product)">
                      <q-img
                        :src="`${$url}../images/${product.image}`"
                        spinner-color="white"
                        spinner-size="40"
                        style="height: 100px"
                      >
                        <div class="absolute-bottom text-subtitle2 text-center text-bold"
                             style="padding: 0px; background: linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.7)); color: white;line-height: 1;">
                          {{product.name}}
                          <div class="row items-center">
                            <div class="text-bold text-center q-pl-xs">
                              {{product.stock}}
                            </div>
                            <q-space />
                            <div class="text-bold text-center q-pr-xs">
                              {{product.price}} $
                            </div>
                          </div>
                        </div>
                      </q-img>
                    </q-card>
                  </div>
                </div>
              </div>
              <!--          <pre>{{products}}</pre>-->
            </div>
          </div>
          <div class="col-12 col-md-4">
            <q-card>
              <q-card-section class="q-pb-none row items-center">
                <div class="row">
                  <q-icon name="o_shopping_cart" />
                  <div class="text-subtitle2 text-primary text-bold q-pl-xs">
                    Carrito de Compras
                  </div>
                </div>
                <q-space />
                <q-btn flat dense icon="o_delete" @click="cartClear" size="10px" label="Vaciar" no-caps color="red" />
              </q-card-section>
              <q-separator />
              <q-card-section class="q-pa-none">
                <q-markup-table dense wrap-cells>
                  <thead class="bg-primary text-white">
                    <tr>
                      <th>Producto</th>
                      <th class="text-right">Precio</th>
                      <th class="text-right">Cantidad</th>
                      <th class="text-right" width="80px">Total</th>
                    </tr>
                  </thead>
                  <tbody v-if="$store.orders.length > 0">
                    <tr v-for="product in $store.orders" :key="product.id">
                      <td>
                        <div style="max-width: 170px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                          <q-icon name="o_delete" class="cursor-pointer" color="red" @click="deleteProduct(product)" />
                          {{product.name}}
                        </div>
                      </td>
                      <td class="text-right">
                        <input v-model="product.price" type="number" min="1" style="width: 50px;" step="0.01">
                      </td>
                      <td class="text-right">
                        <input v-model="product.quantity" type="number" min="1" style="width: 50px;">
                      </td>
                      <td class="text-right">
                        {{sumNum(product.price,product.quantity)}} $
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="4" class="text-center">
                        No hay productos en el carrito
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" class="text-right text-bold">
                        Total
                      </td>
                      <td class="text-right text-subtitle2 text-red text-bold">
                        {{ total }} $
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <q-btn dense color="primary" label="Pagar" no-caps icon="o_payment" push class="full-width text-bold" @click="pay" />
                      </td>
                    </tr>
                  </tfoot>
                </q-markup-table>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="saleDialog" persistent>
      <q-card style="width: 700px;max-width: 90vw;">
        <q-card-section class="q-pb-none row items-center">
          <div class="text-h6 text-primary text-center text-bold">
            Pago
          </div>
          <q-space />
          <q-btn flat dense icon="cancel" @click="saleDialog = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit="saleInsert">
            <div class="row">
              <div class="col-12 col-md-4">
                <q-select v-model="client" :options="clients" label="Cliente" outlined dense @filter="fnFilter" use-input
                          option-value="id" option-label="name" :rules="[val => !!val || 'Seleccione un cliente']" />
              </div>
              <div class="col-6 col-md-2 text-bold text-red text-h6 text-center">
                <div style="line-height: 1">
                  <span class="text-grey">Total</span> <br>
                  {{total}}$
                </div>
              </div>
              <div class="col-6 col-md-4">
                <q-select v-model="tipo" :options="tipos" label="Tipo" outlined dense :rules="[val => !!val || 'Seleccione un tipo']" />
              </div>
              <div class="col-12 col-md-2">
                <q-input v-model="monto" label="Adelanto" outlined dense type="number"
                         :rules="[
                           val => !!val || 'Ingrese un monto',
                           val => val >= 0 || 'Ingrese un monto válido',
                           val => val <= total || 'El monto no puede ser mayor al total']"
                         v-if="tipo === 'CREDITO'" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="observacion" label="Observación" outlined dense type="textarea" rows="2" />
              </div>
              <div class="col-12 col-md-4">
                <q-select v-model="pago" :options="$metodos" label="Pago" outlined dense :rules="[val => !!val || 'Seleccione un pago']" />
              </div>
<!--              <div class="col-12 text-right" v-if="tipo === 'CREDITO'">-->
<!--&lt;!&ndash;                <q-btn label="Agregar" color="green" no-caps class="text-bold" icon="add_circle_outline" dense size="10px" />&ndash;&gt;-->
<!--                <q-markup-table dense wrap-cells>-->
<!--                  <thead class="bg-primary text-white">-->
<!--                  <tr>-->
<!--                    <th>Opción</th>-->
<!--                    <th class="text-right">Monto</th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                </q-markup-table>-->
<!--              </div>-->
            </div>
            <q-card-actions align="right">
              <q-btn label="Cancelar" color="red" no-caps class="text-bold" push icon="cancel" @click="saleDialog = false" :loading="loading" />
              <q-btn label="Pagar" color="primary" no-caps class="text-bold" push icon="o_payment" type="submit" :loading="loading" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div id="myElement" class="hidden"></div>
  </q-page>
</template>
<script>

import {Imprimir} from "src/addons/Imprimir";

export default {
  name: 'ProductsIndex',
  data () {
    return {
      products: [],
      productsAll: [],
      clients: [],
      clientsAll: [],
      client: '',
      product: {},
      categories: [],
      category: '',
      search: '',
      saleDialog: false,
      loading: false,
      tipo: '',
      tipos:['CREDITO','CONTADO'],
      monto: '',
      observacion: '',
      pago: ''
    }
  },
  mounted() {
    this.productsGet()
    this.clientGet()
    this.categoriesGet()
  },
  methods: {
    saleInsert () {
      this.loading = true
      this.$axios.post('sales', {
        client_id: this.client.id,
        tipo: this.tipo,
        monto: this.monto,
        products: this.$store.orders,
        observacion: this.observacion,
        pago: this.pago
      }).then(response => {
        this.$alert.success('Venta realizada con éxito')
        this.saleDialog = false
        this.cartClear()
        this.productsGet()
        Imprimir.nota(response.data)
      }).catch(error => {
        this.$alert.error('Error al realizar la venta')
      }).finally(() => {
        this.loading = false
      })
    },
    clientGet () {
      this.$axios.get('clientsCliente').then(response => {
        this.clients = response.data
        this.clientsAll = response.data
      })
    },
    pay () {
      if (this.$store.orders.length === 0) {
        this.$alert.error('No hay productos en el carrito')
        return false
      }
      // verificamso si tenemos los productos
      if (this.$store.orders.some(item => item.stock < item.quantity)) {
        this.$alert.error('No hay stock suficiente '+this.$store.orders.find(item => item.stock < item.quantity).name)
        return false
      }
      this.saleDialog = true
      this.client = ''
      this.tipo = ''
      this.monto = ''
      this.observacion = ''
      this.pago = ''
    },
    deleteProduct (product) {
      const index = this.$store.orders.findIndex(item => item.id === product.id)
      this.$store.orders.splice(index, 1)
    },
    sumNum (price, quantity) {
      const sum = parseFloat(price) * parseInt(quantity)
      return sum.toFixed(2)
    },
    orderAdd (product) {
      const findProduct = this.$store.orders.find(item => item.id === product.id)
      if (findProduct) {
        findProduct.quantity++
      } else {
        this.$store.orders.push({...product, quantity: 1})
      }
    },
    cartClear () {
      this.$store.orders = []
    },
    productsGet () {
      this.$axios.get('products').then(response => {
        this.products = response.data
        this.productsAll = response.data
      })
    },
    categoriesGet () {
      this.categories = [{id: '', name: 'Todas'}]
      this.$axios.get('categories').then(response => {
        // this.categories = response.data
        this.categories = this.categories.concat(response.data)
      })
    },
    filterProductsSearch () {
      if (this.search === '') {
        this.products = this.productsAll
      } else {
        this.products = this.productsAll.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()))
      }
    },
    filterProducts () {
      console.log(this.category)
      if (this.category.id === '') {
        this.products = this.productsAll
      } else {
        this.products = this.productsAll.filter(product => product.category_id === this.category.id)
      }
    },
    fnFilter (val, update, abort) {
      // abort()
      if (val === '') {
        update(() => {
          this.clients = this.clientsAll
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.clients = this.clientsAll.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  computed: {
    total () {
      return this.$store.orders.reduce((acc, item) => acc + parseFloat(item.price) * parseInt(item.quantity), 0).toFixed(2)
    }
  }
}
</script>
