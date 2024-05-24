<template>
  <q-page class="bg-grey-3 q-pa-md">
  </q-page>
</template>
<script>
export default {
  name: 'ProductsIndex',
  data () {
    return {
      products: [],
      categories: [],
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
