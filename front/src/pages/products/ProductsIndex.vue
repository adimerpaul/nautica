<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-12 col-md-4">
            <q-input v-model="search" label="Buscar" outlined dense @keyup.enter="productsGet" >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-6 col-md-2 q-mt-xs">
            <q-btn
              color="primary"
              label="Actualizar"
              class="text-bold"
              @click="productsGet"
              no-caps
              icon="refresh"
              rounded
              :loading="loading"
            ></q-btn>
<!--            <q-btn-->
<!--              color="grey-8"-->
<!--              label="Descargar"-->
<!--              class="text-bold"-->
<!--              no-caps-->
<!--              icon="get_app"-->
<!--              flat-->
<!--              rounded-->
<!--            ></q-btn>-->
          </div>
          <div class="col-6 col-md-6 text-right q-mt-xs">
            <q-btn
              color="green"
              label="Crear Product"
              class="text-bold"
              @click="productClick()"
              no-caps
              icon="add_circle"
              rounded
              :loading="loading"
            ></q-btn>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <Card2Component color="green-8" title="Productos" :subtitle="products.length + ' Unid'" :icon="'all_inbox'"/>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <Card2Component color="indigo-8" title="Total Stock" :subtitle="totalPrice + ' $'" :icon="'shopping_cart'"/>
          </div>
          <div class="col-12 col-md-4 q-pa-xs">
            <Card2Component color="purple-8" title="Total Ganancias" :subtitle="totalCost + ' $'" :icon="'attach_money'"/>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-6 col-md-2" v-for="product in products" :key="product.id">
                <q-card class="q-ma-xs cursor-pointer" flat bordered @click="productEditClick(product)">
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
<!--          <div class="col-12">-->
<!--            <pre>{{products}}</pre>-->
<!--          </div>-->
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="productDialog" maximized position="right">
      <q-card style="width: 350px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-bold text-h6">
            {{product.id ? 'Editar' : 'Crear'}}
            Producto
          </div>
          <q-space />
          <q-btn flat icon="close" @click="productDialog = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit="productSave">
            <div class="row">
              <div class="col-12 col-md-12 flex flex-center">
                <q-avatar
                  @click="$refs.file.click()"
                  class="bg-grey-3"
                  text-color="grey-8"
                  size="100px">
                  <q-img
                    :src="product.image.includes('http')?product.image:`${$url}../images/${product.image}`"
                    spinner-color="grey-8"
                    spinner-size="40"
                    style="height: 100px"
                  />
                  <q-badge
                    color="grey-8"
                    text-color="white"
                    floating
                  >
                    <q-icon name="camera_alt" />
                  </q-badge>
                </q-avatar>
                <input type="file" class="hidden" @change="handleFileChange" ref="file" accept="image/*">
              </div>
              <div class="col-12">
                <label class="text-caption text-bold">Nombre:</label>
                <q-input v-model="product.name" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <label class="text-caption text-bold">Descripcion:</label>
                <q-input v-model="product.description" outlined dense type="textarea" />
              </div>
              <div class="col-12 col-md-6">
                <label class="text-caption text-bold">Precio:</label>
                <q-input v-model="product.price" outlined dense type="number" step="0.01" :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12 col-md-6">
                <label class="text-caption text-bold">Costo:</label>
                <q-input v-model="product.costo" outlined dense type="number" step="0.01" :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <label class="text-caption text-bold">Cantidad:</label>
                <q-input v-model="product.stock" outlined dense type="number" :rules="[val => !!val || 'Campo requerido']" />
              </div>
              <div class="col-12">
                <label class="text-caption text-bold">Categoria:</label>
                <q-select
                  v-model="product.category_id"
                  :options="categories"
                  outlined
                  dense
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                  :rules="[val => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-12">
                <label class="text-caption text-bold">Estado:</label>
                <q-toggle v-model="product.status" :color="product.status ? 'green' : 'red'" true-value="ACTIVE" false-value="INACTIVE">
                  <div :class="`text-${product.status ? 'green' : 'red'} text-subtitle2 text-bold`">
                    {{product.status ? 'Activo' : 'Inactivo'}}
                  </div>
                </q-toggle>
              </div>
            </div>
            <div>
              <q-btn
                color="primary"
                label="Guardar"
                class="text-bold full-width"
                type="submit"
                no-caps
                icon="save"
                rounded
                :loading="loading"
                v-if="product.id === undefined"
              ></q-btn>
              <q-btn
                color="yellow-8"
                label="Actualizar"
                class="text-bold full-width q-mb-md"
                type="submit"
                no-caps
                icon="save"
                rounded
                :loading="loading"
                v-if="product.id !== undefined"></q-btn>
              <q-btn
                color="red"
                outline
                label="Eliminar"
                class="text-bold full-width"
                no-caps
                icon="close"
                rounded
                @click="productDelete"
                :loading="loading"
                v-if="product.id !== undefined"></q-btn>
<!--              <pre>{{product}}</pre>-->
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
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
      product: {},
      categories: [],
      category: '',
      search: '',
      productDialog: false,
      loading: false,
    }
  },
  mounted() {
    this.productsGet()
    this.categoriesGet()
  },
  methods: {
    productDelete () {
      this.$alert.confirm('¿Estas seguro de eliminar este producto?').onOk(() => {
        this.loading = true
        this.$axios.delete(`products/${this.product.id}`).then(response => {
          this.productDialog = false
          this.productsGet()
        }).finally(() => {
          this.loading = false
        })
      })

      // this.$alert.confirm('¿Está seguro de eliminar este boate?').onOk(() => {
      //   this.loading = true
      //   this.$axios.delete(`boats/${boat.id}`).then(res => {
      //     const index = this.boats.findIndex(boat => boat.id === res.data.id)
      //     console.log(index)
      //     if (index !== -1) this.boats.splice(index, 1)
      //   }).catch(error => {
      //     this.$alert.error(error.response.data.message)
      //   }).finally(() => {
      //     this.loading = false
      //   })
      // })
    },
    handleFileChange () {
      const file = event.target.files[0]
      if (file) {
        this.product.image = URL.createObjectURL(file)
      }
    },
    productCreate () {
      // if(this.$refs.file.files.length === 0){
      //   this.$alert.error('Debe seleccionar una imagen')
      //   return false
      // }
      this.loading = true
      const formData = new FormData()
      formData.append('product', JSON.stringify(this.product))
      formData.append('file', this.$refs.file.files[0])
      this.$axios.post('products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        this.productDialog = false
        this.productsGet()
      }).finally(() => {
        this.loading = false
      })
    },
    productUpdate () {
      this.loading = true
      const formData = new FormData()
      formData.append('product', JSON.stringify(this.product))
      if(this.$refs.file.files.length > 0){
        formData.append('file', this.$refs.file.files[0])
      }
      this.$axios.post(`products/${this.product.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        this.productDialog = false
        this.productsGet()
      }).finally(() => {
        this.loading = false
      })
    },
    productSave(){

      if (this.product.id) {
        this.productUpdate()
      } else {
        this.productCreate()
      }
    },
    productClick () {
      this.productDialog = true
      this.product = {
        name: '',
        description: '',
        price: '',
        stock: '',
        image: 'images.png',
        status: 'ACTIVE',
        costo: '',
      }
    },
    productEditClick (product) {
      this.productDialog = true
      this.product = {...product}
    },
    productsGet () {
      this.loading = true
      this.$axios.get('products',{
        params: {
          search: this.search
        }
      }).then(response => {
        this.products = response.data
      }).finally(() => {
        this.loading = false
      })
    },
    categoriesGet () {
      this.$axios.get('categories').then(response => {
        this.categories = response.data
      })
    },
  },
  computed: {
    totalPrice () {
      let total = 0
      this.products.forEach(product => {
        total += product.price * product.stock
      })
      return total.toFixed(2)
    },
    totalCost () {
      let total = 0
      this.products.forEach(product => {
        total += product.costo * product.stock
      })
      return total.toFixed(2)
    },
  }
}
</script>
