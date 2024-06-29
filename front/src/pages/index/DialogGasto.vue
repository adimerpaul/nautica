<template>
  <q-card style="width: 500px; max-width: 80vw;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-subtitle2 text-bold text-grey">
        Registrar gasto
      </div>
      <q-space/>
      <q-btn icon="o_highlight_off" flat round dense v-close-popup />
    </q-card-section>
    <q-card-section>
      <q-form @submit="saveSale">
        <div class="row">
          <div class="col-12">
            <q-input outlined dense v-model="gasto.monto" label="Monto *" type="number" step="0.1" :rules="[val => !!val || 'Campo requerido']" />
          </div>
          <div class="col-12">
            <q-input outlined dense hint="" v-model="gasto.concepto" label="Descripción" />
          </div>
<!--          <div class="col-12">-->
<!--            <q-select outlined dense hint="" v-model="gasto.metodo" :options="$metodos" label="Método de pago" />-->
<!--          </div>-->
          <div class="col-12">
            <q-input outlined dense hint="" v-model="gasto.date" label="Fecha" type="datetime-local" />
          </div>
          <div class="col-12">
            <q-select outlined dense hint="" v-model="gasto.client_id" :options="provider" label="Proveedor" emit-value map-options
                      option-value="id" option-label="name" use-input
                      :rules="[val => !!val || 'Campo requerido']"
            >
              <template v-slot:after>
                <q-btn flat dense icon="add_circle_outline" @click="proveedorCreateSimple" color="green"/>
              </template>
            </q-select>
          </div>
          <div class="col-12">
            <q-btn type="submit" label="Guardar" color="red-7" class="full-width" no-caps rounded :loading="loading"/>
          </div>
        </div>
      </q-form>
      <q-dialog v-model="clientDialog" persistent>
        <q-card style="width: 250px;max-width: 90vw;">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Registrar Proveedor</div>
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
                  <q-input v-model="client.lastname" label="Apellido" outlined dense :rules="[val => !!val || 'Campo requerido']" />
                </div>
                <div class="col-12">
                  <q-input v-model="client.company" label="Empresa" outlined dense :rules="[val => !!val || 'Campo requerido']" />
                </div>
                <div class="col-12">
                  <q-input v-model="client.nit" label="NIT" outlined dense :rules="[val => !!val || 'Campo requerido']" />
                </div>
                <div class="col-12">
                  <q-input v-model="client.phone" label="Teléfono" outlined dense :rules="[val => !!val || 'Campo requerido']" />
                </div>
<!--                <div class="col-12">-->
<!--                  <q-select v-model="client.tipo" label="Tipo" outlined dense-->
<!--                            :options="[{label: 'Cliente', value: 'CLIENTE'}, {label: 'Proveedor', value: 'PROVEEDOR'}]"-->
<!--                            :rules="[val => !!val || 'Campo requerido']"-->
<!--                            emit-value map-options-->
<!--                  />-->
<!--                </div>-->
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Cancelar" v-close-popup :loading="loading" />
              <q-btn color="primary" label="Guardar" type="submit" :loading="loading" />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
<!--      <pre>{{gasto}}</pre>-->
<!--      <pre>{{provider}}</pre>-->
    </q-card-section>
  </q-card>
</template>
<script>
import moment from "moment";
import {Imprimir} from "src/addons/Imprimir";

export default {
  data () {
    return {
      provider: [],
      gasto: {
        monto: '',
        concepto: '',
        metodo: 'EFECTIVO',
        client_id: '',
        date: moment().format('YYYY-MM-DD HH:mm'),
      },
      client: {
        name: '',
        lastname: '',
        company: '',
        nit: '',
        phone: '',
        tipo: 'PROVEEDOR'
      },
      clientDialog: false,
      loading: false
    }
  },
  mounted () {
    this.proveedoresGet()
  },
  methods: {
    clientSave () {
      this.loading = true
      if (this.client.id) {
        this.$axios.put(`clients/${this.client.id}`, this.client).then(response => {
          this.clientDialog = false
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('clients', this.client).then(response => {
          this.clientDialog = false
          this.provider.unshift(response.data)
          this.gasto.client_id = response.data.id
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    proveedoresGet () {
      this.$axios.get('proveedores').then(res => {
        this.provider = res.data
      })
    },
    saveSale () {
      this.loading = true
      this.$axios.post('registrarGasto', this.gasto).then(res => {
        this.$emit('gastoCreated', res.data)
        this.$alert.success('Gasto registrado')
        // this.$emit('close')
        Imprimir.nota(res.data)
      }).catch(err => {
        this.$alert.error(err.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    proveedorCreateSimple () {
      // this.$q.dialog({
      //   title: 'Registrar proveedor',
      //   message: 'Ingrese el nombre del proveedor',
      //   prompt: {
      //     model: '',
      //     type: 'text'
      //   },
      //   cancel: true,
      //   persistent: true
      // }).onOk(data => {
      //   this.$axios.post('proveedorCreateSimple', { nombre: data }).then(res => {
      //     this.provider.push(res.data)
      //     this.gasto.client_id = res.data.id
      //   }).catch(err => {
      //     this.$alert.error(err.response.data.message)
      //   })
      // })
      this.clientDialog = true
      this.client = { name: '', lastname: '', company: '', nit: '', phone: '', tipo: 'PROVEEDOR' }
    }
  }
}
</script>
