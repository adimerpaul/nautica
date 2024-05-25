<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-12 col-md-4">
            <q-input v-model="search" label="Buscar" outlined dense />
          </div>
          <div class="col-12 col-md-2">
            <q-btn
              color="grey-8"
              label="Descargar"
              class="text-bold"
              no-caps
              icon="get_app"
              flat
              rounded
            ></q-btn>
          </div>
          <div class="col-12 col-md-6 text-right">
            <q-btn
              color="green"
              label="Crear Producto"
              class="text-bold"
              to="/products/create"
              no-caps
              icon="add_circle"
              rounded
            ></q-btn>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <Card2Component color="green-8" title="Productos" :subtitle="products.length + ' Unid'" :icon="'all_inbox'"/>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <Card2Component color="indigo-8" title="Total Stock" :subtitle="products.length + ' $'" :icon="'shopping_cart'"/>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <Card2Component color="purple-8" title="Total Ganancias" :subtitle="products.length + ' $'" :icon="'attach_money'"/>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-6 col-md-2" v-for="product in products" :key="product.id">
                <q-card class="q-ma-xs" flat bordered >
                  <q-img
                    :src="`${$url}../images/${product.image}`"
                    spinner-color="white"
                    spinner-size="40"
                    style="height: 100px"
                  >
                    <div class="absolute-bottom text-subtitle2 text-center text-bold"
                         style="padding: 0px; background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)); color: white;line-height: 1;">
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
          <div class="col-12">
<!--            <pre>{{products}}</pre>-->
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import Card2Component from "components/Card2Component.vue";

export default {
  name: 'ProductsIndex',
  components: {Card2Component},
  data () {
    return {
      products: [],
      categories: [],
      category: '',
      search: ''
    }
  },
  mounted() {
    this.productsGet()
    this.categoriesGet()
  },
  methods: {
    productsGet () {
      this.$axios.get('products').then(response => {
        this.products = response.data
      })
    },
    categoriesGet () {
      this.$axios.get('categories').then(response => {
        this.categories = response.data
      })
    },
  }
}
</script>
