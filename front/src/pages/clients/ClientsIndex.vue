<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table :rows="clients" :columns="columns" title="Clientes" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading">
      <template v-slot:body-cell-option="props">
          <q-td auto-width>
            <q-btn flat dense icon="edit" @click="clientEdit(props.row)" >
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn flat dense icon="delete" @click="clientDelete(props.row.id)" >
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
        <q-btn outline dense icon="add_circle" @click="clientAdd" label="Agregar" no-caps :loading="loading">
          <q-tooltip>Agregar</q-tooltip>
        </q-btn>
        <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <q-dialog v-model="clientDialog" persistent>
      <q-card style="width: 250px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ client.id ? 'Editar' : 'Agregar' }} Cliente</div>
          <q-space />
          <q-btn flat dense icon="close" @click="clientDialog = false" />
        </q-card-section>
        <q-form @submit="clientSave">
        <q-card-section>
          <div class="row">
<!--            $fillable = ['name', 'lastname', 'company', 'nit', 'phone'];-->
            <div class="col-12">
              <q-input v-model="client.name" label="Nombre" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
<!--              <q-input v-model="client.lastname" label="Apellido" outlined dense :rules="[val => !!val || 'Campo requerido']" />-->
            </div>
            <div class="col-12">
              <q-input v-model="client.company" label="Empresa" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
              <q-input v-model="client.nit" label="DUI" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
              <q-input v-model="client.phone" label="Teléfono" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
              <q-select v-model="client.tipo" label="Tipo" outlined dense
                        :options="[{label: 'Cliente', value: 'CLIENTE'}, {label: 'Proveedor', value: 'PROVEEDOR'}]"
                        :rules="[val => !!val || 'Campo requerido']"
                        emit-value map-options
              />
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
<!--    <pre>{{ clients }}</pre>-->
  </q-page>
</template>
<script>
export default {
  name: 'ClientsIndex',
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        // { name: 'lastname', label: 'Apellido', align: 'left', field: row => row.lastname },
        { name: 'company', label: 'Empresa', align: 'left', field: row => row.company },
        { name: 'nit', label: 'DUI', align: 'left', field: row => row.nit },
        { name: 'phone', label: 'Teléfono', align: 'left', field: row => row.phone },
        { name: 'tipo', label: 'Tipo', align: 'left', field: row => row.tipo }
      ],
      loading: false,
      clients: [],
      client: {},
      clientDialog: false,
      clienDialogHistory: false,
      filter: ''
    }
  },
  mounted() {
    this.getClients()
  },
  methods: {
    clientSave () {
      this.loading = true
      if (this.client.id) {
        this.$axios.put(`clients/${this.client.id}`, this.client).then(response => {
          this.clientDialog = false
          const index = this.clients.findIndex(client => client.id === this.client.id)
          this.clients.splice(index, 1, response.data)
          this.$alert.success('Cliente actualizado correctamente')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('clients', this.client).then(response => {
          this.clientDialog = false
          this.clients.unshift(response.data)
          this.$alert.success('Cliente agregado correctamente')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    clientDelete (id) {
      this.$alert.confirm('¿Está seguro de eliminar este cliente?').onOk(() => {
        this.loading = true
        this.$axios.delete(`clients/${id}`).then(response => {
          const index = this.clients.findIndex(client => client.id === id)
          this.clients.splice(index, 1)
          this.$alert.success('Cliente eliminado correctamente')
        }).catch(error => {
          this.$alert.error('No se puede eliminar el registro porque tiene registros dependientes asociados.')
        }).finally(() => {
          this.loading = false
        })
      })
    },
    clientHistory (client) {
      this.clienDialogHistory = true
      this.client = {...client}
    },
    clientEdit (cliente) {
      this.clientDialog = true
      this.client = {...cliente}
    },
    clientAdd () {
      this.clientDialog = true
      this.client = {
        name: '',
        ci: ''
      }
    },
    getClients () {
      this.loading = true
      this.$axios.get('clients').then(response => {
          this.clients = response.data
      }).catch(error => {
          this.$alert.error(error.response.data.message)
      }).finally(() => {
          this.loading = false
      })
    }
  },
};
</script>
