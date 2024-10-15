<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table :rows="users" :columns="columns" title="Usuarios" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading">
      <template v-slot:body-cell-option="props">
          <q-td auto-width>
            <q-btn-dropdown flat dense dropdown-icon="more_vert" auto-close>
              <q-item clickable v-ripple @click="userEdit(props.row)">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Editar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="userDelete(props.row)">
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="userChangePassword(props.row)">
                <q-item-section avatar>
                  <q-icon name="vpn_key" />
                </q-item-section>
                <q-item-section>Cambiar Contraseña</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="permisosUpdate(props.row)">
                <q-item-section avatar>
                  <q-icon name="verified_user" />
                </q-item-section>
                <q-item-section>Permisos</q-item-section>
              </q-item>
            </q-btn-dropdown>
          </q-td>
      </template>
      <template v-slot:body-cell-role="props">
        <q-td :props="props">
          <q-chip dense label="Vendedor" color="orange" text-color="white" v-if="props.row.role === 'VENDEDOR'" icon="account_circle"/>
          <q-chip dense label="Admin" color="indigo" text-color="white" v-if="props.row.role === 'ADMIN'" icon="account_circle"/>
          <q-chip dense label="Super admin" color="purple" text-color="white" v-if="props.row.role === 'SUPERADMIN'" icon="account_circle"/>
          <q-chip dense label="Patron" color="green" text-color="white" v-if="props.row.role === 'PATRON'" icon="account_circle"/>
        </q-td>
      </template>
      <template v-slot:top-right>
        <div class="row">
          <div class="col-6 text-right">
            <q-btn outline dense icon="add_circle" class="q-mr-md" @click="userAdd" label="Agregar" no-caps :loading="loading"
                   v-if="$store.user.id === 1">
              <q-tooltip>Agregar</q-tooltip>
            </q-btn>
<!--            btn de controlar roles-->
            <q-btn outline dense icon="verified_user" @click="dialogPermisosRole = true" label="Permisos" no-caps :loading="loading"
                   v-if="$store.user.id === 1">
              <q-tooltip>Permisos</q-tooltip>
            </q-btn>
          </div>
          <div class="col-6">
            <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined clearable >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </template>
    </q-table>
<!--    <pre>{{users}}</pre>-->
    <q-dialog v-model="userDialog" persistent>
      <q-card style="width: 250px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ user.id ? 'Editar' : 'Agregar' }} Usuario</div>
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
                        :options="$roles"
                        :rules="[val => !!val || 'Campo requerido']"
                        emit-value map-options
              />
            </div>
<!--            <pre>{{user.role}}</pre>-->
            <div class="col-12">
              <q-select v-model="user.company_id" label="Empresa" outlined dense
                        :options="companies"
                        option-label="name" option-value="id"
                        @update:modelValue="boatFilter"
                        :hint="''"
                        emit-value map-options
              />
<!--              <pre>{{companies}}</pre>-->
            </div>
            <div class="col-12">
              <q-select v-model="user.boat_id" label="Barco" outlined dense
                        :options="boats"
                        option-label="name" option-value="id"
                        :hint="''"
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
    <q-dialog v-model="dialogPermisos">
      <q-card style="width: 450px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Permisos de {{ user.name }}</div>
          <q-space />
          <q-btn flat dense icon="close" @click="dialogPermisos = false" />
        </q-card-section>
        <q-form @submit="userPermisos">
          <q-card-section>
            <q-option-group v-model="permisosSelected" :options="permisos" dense  type="checkbox" />
<!--            <pre>{{permisos}}</pre>-->
<!--            <pre>{{permisosSelected}}</pre>-->
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" v-close-popup :loading="loading" />
            <q-btn color="primary" label="Guardar" type="submit" :loading="loading" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogPermisosRole">
      <q-card style="width: 450px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Permisos de Roles</div>
          <q-space />
          <q-btn flat dense icon="close" @click="dialogPermisosRole = false" />
        </q-card-section>
        <q-card-section>
          <q-form @submit="userPermisos">
            <div class="row">
              <div class="col-12">
                <div v-for="role in roles" :key="role.id">
                  <div class="text-bold">{{$filters.capitalizeText(role.name)}}</div>
                  <q-option-group v-model="role.permisosId" :options="permisos" dense  type="checkbox"
                  />
                </div>
<!--                <pre>{{permisos}}}</pre>-->
                <pre>{{roles}}</pre>
                <!--              [-->
                <!--              {-->
                <!--              "id": 1,-->
                <!--              "name": "ADMIN",-->
                <!--              "guard_name": "web",-->
                <!--              "created_at": "2024-10-15T09:23:59.000000Z",-->
                <!--              "updated_at": "2024-10-15T09:23:59.000000Z",-->
                <!--              "permisosName": [-->
                <!--              "ver inicio",-->
                <!--              "ver usuarios",-->
                <!--              "ver empresas",-->
                <!--              "ver botes",-->
                <!--              "ver tripulantes",-->
                <!--              "ver clientes",-->
                <!--              "ver viajes",-->
                <!--              "ver ventas",-->
                <!--              "ver deudores",-->
                <!--              "ver productos"-->
                <!--              ],-->
                <!--              "permissions": [-->
                <!--              {-->
                <!--              "id": 1,-->
                <!--              "name": "ver inicio",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "ventas",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 1-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 2,-->
                <!--              "name": "ver usuarios",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "usuarios",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 2-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 3,-->
                <!--              "name": "ver empresas",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "empresas",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 3-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 4,-->
                <!--              "name": "ver botes",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "botes",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 4-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 5,-->
                <!--              "name": "ver tripulantes",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "tripulantes",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 5-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 6,-->
                <!--              "name": "ver clientes",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "clientes",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 6-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 7,-->
                <!--              "name": "ver viajes",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "viajes",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 7-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 8,-->
                <!--              "name": "ver ventas",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "ventas",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 8-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 9,-->
                <!--              "name": "ver deudores",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "deudores",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 9-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 10,-->
                <!--              "name": "ver productos",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "productos",-->
                <!--              "created_at": "2024-08-09T14:05:07.000000Z",-->
                <!--              "updated_at": "2024-08-09T14:05:07.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 1,-->
                <!--              "permission_id": 10-->
                <!--              }-->
                <!--              }-->
                <!--              ]-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 2,-->
                <!--              "name": "VENDEDOR",-->
                <!--              "guard_name": "web",-->
                <!--              "created_at": "2024-10-15T09:23:59.000000Z",-->
                <!--              "updated_at": "2024-10-15T09:23:59.000000Z",-->
                <!--              "permisosName": [-->
                <!--              "ver inicio",-->
                <!--              "ver clientes",-->
                <!--              "ver ventas",-->
                <!--              "ver deudores"-->
                <!--              ],-->
                <!--              "permissions": [-->
                <!--              {-->
                <!--              "id": 1,-->
                <!--              "name": "ver inicio",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "ventas",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 2,-->
                <!--              "permission_id": 1-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 6,-->
                <!--              "name": "ver clientes",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "clientes",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 2,-->
                <!--              "permission_id": 6-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 8,-->
                <!--              "name": "ver ventas",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "ventas",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 2,-->
                <!--              "permission_id": 8-->
                <!--              }-->
                <!--              },-->
                <!--              {-->
                <!--              "id": 9,-->
                <!--              "name": "ver deudores",-->
                <!--              "guard_name": "web",-->
                <!--              "group": "deudores",-->
                <!--              "created_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "updated_at": "2024-07-23T01:16:54.000000Z",-->
                <!--              "pivot": {-->
                <!--              "role_id": 2,-->
                <!--              "permission_id": 9-->
                <!--              }-->
                <!--              }-->
                <!--              ]-->
                <!--              },-->
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import {Alert} from "src/addons/Alert";

export default {
  name: 'ClientsIndex',
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        { name: 'username', label: 'Usuario', align: 'left', field: row => row.username },
        { name: 'company', label: 'Empresa', align: 'left', field: row => row?.company?.name },
        { name: 'boat', label: 'Barco', align: 'left', field: row => row?.boat?.name },
        { name: 'role', label: 'Rol', align: 'left', field: row => row.role }
      ],
      dialogPermisosRole: false,
      loading: false,
      users: [],
      user: {},
      userDialog: false,
      clienDialogHistory: false,
      filter: '',
      passwordShow: false,
      permisos: [],
      permisosRole: [],
      permisosSelected: [],
      dialogPermisos: false,
      companies: [],
      boats: [],
      boatsAll: [],
      roles: []
    }
  },
  mounted() {
    this.companiesGet()
    this.boatGet()
    this.permissionGet()
    this.userGet()
    this.rolesGet()
  },
  methods: {
    rolesGet () {
      this.$axios.get('roles').then(response => {
        this.roles = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      })
    },
    boatFilter (val) {
      // console.log('aaa')
      // console.log(val)
      if (val) {
        this.boats = this.boatsAll.filter(b => b.company_id === val)
      } else {
        this.boats = []
      }
    },
    companiesGet () {
      this.loading = true
      this.companies = [{name: 'Seleccione una empresa', id: ''}]
      this.$axios.get('companies').then(response => {
        this.companies = this.companies.concat(response.data)
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    boatGet () {
      this.loading = true
      this.$axios.get('boats').then(response => {
        this.boats = response.data
        this.boatsAll = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    userPermisos () {
      this.loading = true
      this.$axios.put(`permissions/${this.user.id}`, {permissions: this.permisosSelected}).then(response => {
        this.dialogPermisos = false
        const index = this.users.findIndex(user => user.id === response.data.id)
        this.users.splice(index, 1, response.data)
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    permisosUpdate (user) {
      this.user = user
      this.permisosSelected = user.permissions.map(p => p.id)
      this.dialogPermisos = true
    },
    permissionGet () {
      this.$axios.get('permissions').then(response => {
        response.data.forEach(p => {
          p.label = p.name
          p.value = p.id
        })
        this.permisos = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      })
    },
    userSave () {
      this.loading = true
      if (this.user.id) {
        this.$axios.put(`users/${this.user.id}`, this.user).then(response => {
          this.userDialog = false
          const index = this.users.findIndex(user => user.id === this.user.id)
          this.users.splice(index, 1, response.data)
          this.$alert.success('Usuario actualizado con éxito')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('users', this.user).then(response => {
          this.userDialog = false
          this.users.unshift(response.data)
          this.$alert.success('Usuario agregado con éxito')
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
      this.$alert.confirm('¿Está seguro de eliminar este usuario?').onOk(() => {
        this.loading = true
        this.$axios.delete(`users/${user.id}`).then(res => {
          const index = this.users.findIndex(user => user.id === res.data.id)
          if (index > -1) this.users.splice(index, 1)
          this.$alert.success('Usuario eliminado con éxito')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    userEdit (user) {
      this.userDialog = true
      user.company_id = ''
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
