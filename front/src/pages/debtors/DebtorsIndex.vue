<template>
  <q-page class="bg-grey-3 q-pa-md">
    <pre>{{deudores}}</pre>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        { name: 'company', label: 'Empresa', align: 'left', field: row => row.company?.name },
      ],
      loading: false,
      deudores: [],
    }
  },
  mounted() {
    this.deudoresGet()
  },
  methods: {
    deudoresGet () {
      this.loading = true
      this.$axios.get('debtors').then(response => {
        this.deudores = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
  }
}
</script>
