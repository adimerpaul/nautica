<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table
      :rows="categories"
      :columns="columns"
      title="Categorías"
      :rows-per-page-options="[0]"
      row-key="id"
      dense
      :filter="filter"
      :loading="loading"
    >
      <template v-slot:body-cell-option="props">
        <q-td auto-width>
          <q-btn flat dense icon="edit" @click="categoriesEdit(props.row)">
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
          <q-btn flat dense icon="delete" @click="categoriesDelete(props.row.id)">
            <q-tooltip>Eliminar</q-tooltip>
          </q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-tipo="props">
        <q-td auto-width>
          <q-chip text-color="white" label="Cliente" color="green" v-if="props.row.tipo === 'CLIENTE'" />
          <q-chip text-color="white" label="Proveedor" color="indigo" v-else />
        </q-td>
      </template>

      <template v-slot:top-right>
        <q-btn outline dense icon="add_circle" @click="categoriesAdd" label="Agregar" no-caps :loading="loading">
          <q-tooltip>Agregar</q-tooltip>
        </q-btn>
        <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>

    <q-dialog v-model="categoriesDialog" persistent>
      <q-card style="width: 250px; max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ category.id ? 'Editar' : 'Agregar' }} Categoría</div>
          <q-space />
          <q-btn flat dense icon="close" @click="categoriesDialog = false" />
        </q-card-section>
        <q-form @submit="categoriesSave">
          <q-card-section>
            <div class="row">
              <div class="col-12">
                <q-input v-model="category.name" label="Nombre" outlined dense :rules="[val => !!val || 'Campo requerido']" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" v-close-popup :loading="loading" />
            <q-btn color="primary" label="Guardar" type="submit" :loading="loading" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'CategoriesIndex',
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        // { name: 'tipo', label: 'Tipo', align: 'left', field: row => row.tipo }
      ],
      loading: false,
      categories: [], // Inicializado como array para evitar el error
      category: { name: '' }, // Objeto para manejar la categoría actual
      categoriesDialog: false,
      filter: ''
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    categoriesSave () {
      this.loading = true
      if (this.category.id) {
        this.$axios.put(`categories/${this.category.id}`, this.category).then(response => {
          this.categoriesDialog = false
          const index = this.categories.findIndex(cat => cat.id === this.category.id)
          this.categories.splice(index, 1, response.data)
          this.$alert.success('Categoría actualizada correctamente')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('categories', this.category).then(response => {
          this.categoriesDialog = false
          this.categories.unshift(response.data)
          this.$alert.success('Categoría agregada correctamente')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    categoriesDelete (id) {
      this.$alert.confirm('¿Está seguro de eliminar esta categoría?').onOk(() => {
        this.loading = true
        this.$axios.delete(`categories/${id}`).then(response => {
          const index = this.categories.findIndex(cat => cat.id === id)
          this.categories.splice(index, 1)
          this.$alert.success('Categoría eliminada correctamente')
        }).catch(error => {
          this.$alert.error('No se puede eliminar el registro porque tiene registros dependientes asociados.')
        }).finally(() => {
          this.loading = false
        })
      })
    },
    categoriesEdit (category) {
      this.categoriesDialog = true
      this.category = { ...category }
    },
    categoriesAdd () {
      this.categoriesDialog = true
      this.category = { name: '' }
    },
    getCategories () {
      this.loading = true
      this.$axios.get('categories').then(response => {
        this.categories = response.data // Asegura que response.data sea un array
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
