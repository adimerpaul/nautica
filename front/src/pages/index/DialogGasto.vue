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
          <div class="col-12">
            <q-select outlined dense hint="" v-model="gasto.metodo" :options="$metodos" label="Método de pago" />
          </div>
          <div class="col-12">
            <q-select outlined dense hint="" v-model="gasto.client_id" :options="provider" label="Proveedor" emit-value map-options
                      option-value="id" option-label="nombre" use-input
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
<!--      <pre>{{gasto}}</pre>-->
<!--      <pre>{{provider}}</pre>-->
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  data () {
    return {
      provider: [],
      gasto: {
        monto: '',
        concepto: '',
        metodo: 'EFECTIVO',
        client_id: ''
      },
      loading: false
    }
  },
  mounted () {
    this.proveedoresGet()
  },
  methods: {
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
      }).catch(err => {
        this.$alert.error(err.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    proveedorCreateSimple () {
      this.$q.dialog({
        title: 'Registrar proveedor',
        message: 'Ingrese el nombre del proveedor',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.$axios.post('proveedorCreateSimple', { nombre: data }).then(res => {
          this.provider.push(res.data)
          this.gasto.client_id = res.data.id
        }).catch(err => {
          this.$alert.error(err.response.data.message)
        })
      })
    }
  }
}
</script>
