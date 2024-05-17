<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table :rows="users" :columns="columns" title="Clientes" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading">
      <template v-slot:body-cell-option="props">
          <q-td auto-width>
            <q-btn flat dense icon="edit" @click="userEdit(props.row)" >
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn flat dense icon="delete" @click="userDelete(props.row)" >
              <q-tooltip>Eliminar</q-tooltip>
            </q-btn>
            <q-btn flat dense icon="vpn_key" @click="userChangePassword(props.row)" >
              <q-tooltip>Cambiar Contraseña</q-tooltip>
            </q-btn>

<!--            <q-btn flat dense icon="history" @click="userHistory(props.row)" >-->
<!--              <q-tooltip>Historial</q-tooltip>-->
<!--            </q-btn>-->
          </q-td>
      </template>
      <template v-slot:body-cell-role="props">
        <q-td :props="props">
          <q-chip dense label="Admin" color="primary" text-color="white" v-if="props.row.role === 'ADMIN'" />
          <q-chip dense label="Tutor" color="indigo" text-color="white" v-if="props.row.role === 'ATTORNEY'" />
          <q-chip dense label="Profesor" color="green" text-color="white" v-if="props.row.role === 'TEACHER'" />
          <q-chip dense label="Doctor" color="red" text-color="white" v-if="props.row.role === 'DOCTOR'" />
        </q-td>
      </template>
      <template v-slot:top-right>
        <q-btn outline dense icon="add_circle" @click="userAdd" label="Agregar" no-caps :loading="loading">
          <q-tooltip>Agregar</q-tooltip>
        </q-btn>
        <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined clearable >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
<!--    <pre>{{users}}</pre>-->
    <q-dialog v-model="userDialog" persistent>
      <q-card style="width: 250px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ user.id ? 'Editar' : 'Agregar' }} Cliente</div>
          <q-space />
          <q-btn flat dense icon="close" @click="userDialog = false" />
        </q-card-section>
        <q-form @submit="userSave">
        <q-card-section>
          <div class="row">
            <div class="col-12">
              <q-input v-model="user.name" label="Nombre" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
              <q-input v-model="user.username" label="Usuario" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
              <q-input v-model="user.password" label="Contraseña" outlined dense
                       :rules="[val => !!val || 'Campo requerido']" :type="passwordShow ? 'text' : 'password'"
                       v-if="!user.id"
              >
                <template v-slot:append>
                  <q-icon :name="passwordShow ? 'visibility' : 'visibility_off'" @click="passwordShow = !passwordShow" />
                </template>
              </q-input>
            </div>
            <div class="col-12">
              <q-select v-model="user.role" label="Rol" outlined dense
                        :options="[{label: 'Admin', value: 'ADMIN'}, {label: 'Tutor', value: 'ATTORNEY'}, {label: 'Profesor', value: 'TEACHER'}, {label: 'Doctor', value: 'DOCTOR'}]"
                        :rules="[val => !!val || 'Campo requerido']"
                        emit-value map-options
              />
            </div>
<!--            <pre>{{user}}</pre>-->
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
  name: 'ClientsIndex',
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        { name: 'username', label: 'Usuario', align: 'left', field: row => row.username },
        { name: 'role', label: 'Rol', align: 'left', field: row => row.role }
      ],
      loading: false,
      users: [],
      user: {},
      userDialog: false,
      clienDialogHistory: false,
      filter: '',
      passwordShow: false
    }
  },
  mounted() {
    this.userGet()
  },
  methods: {
    userSave () {
      this.loading = true
      if (this.user.id) {
        this.$axios.put(`users/${this.user.id}`, this.user).then(response => {
          this.userDialog = false
          const index = this.users.findIndex(user => user.id === this.user.id)
          this.users.splice(index, 1, response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('users', this.user).then(response => {
          this.userDialog = false
          this.users.unshift(response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    userChangePassword (user) {
      this.$alert.promptPassword('Ingrese la nueva contraseña').onOk(password => {
        this.loading = true
        this.$axios.put(`passwordUpdate/${user.id}`, {password}).then(response => {
          this.$alert.success('Contraseña cambiada con éxito')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    userDelete (user) {
      this.$alert.confirm('¿Está seguro de eliminar este usere?').onOk(() => {
        this.loading = true
        this.$axios.delete(`users/${user.id}`).then(response => {
          const index = this.users.findIndex(user => user.id === user.id)
          this.users.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    userEdit (user) {
      this.userDialog = true
      this.user = {...user}
    },
    userAdd () {
      this.userDialog = true
      this.user = {
        name: '',
        ci: ''
      }
    },
    userGet () {
      this.loading = true
      this.$axios.get('users').then(response => {
          this.users = response.data
      }).catch(error => {
          this.$alert.error(error.response.data.message)
      }).finally(() => {
          this.loading = false
      })
    }
  },
};
</script>
