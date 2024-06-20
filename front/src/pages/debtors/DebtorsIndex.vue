<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-8 col-md-4">
            <q-input v-model="search" label="Buscar por cliente o usuario" placeholder="Buscar" dense outlined />
          </div>
          <div class="col-4 col-md-4">
            <q-btn v-model="search" color="primary" label="Buscar" @click="deudoresGet" :loading="loading" icon="search" no-caps/>
          </div>
          <div class="col-12">
<!--            {-->
<!--            "id": 13,-->
<!--            "date": "2024-06-20 05:25:52",-->
<!--            "client_id": 1,-->
<!--            "total": 3,-->
<!--            "tipo": "CREDITO",-->
<!--            "user_id": 1,-->
<!--            "status": "ACTIVO",-->
<!--            "observacion": "sin observacion",-->
<!--            "pago": 1,-->
<!--            "debt": 2,-->
<!--            "client": {-->
<!--            "id": 1,-->
<!--            "name": "ADIMER PAUL",-->
<!--            "lastname": "CHAMBI",-->
<!--            "company": "FNI",-->
<!--            "nit": "123456",-->
<!--            "phone": "5261245"-->
<!--            },-->
<!--            "user": {-->
<!--            "id": 1,-->
<!--            "name": "Administrador",-->
<!--            "role": "SUPERADMIN",-->
<!--            "username": "admin",-->
<!--            "email": "admin@test.com",-->
<!--            "email_verified_at": null-->
<!--            },-->
<!--            "details": [-->
<!--            {-->
<!--            "id": 29,-->
<!--            "sale_id": 13,-->
<!--            "product_id": 13,-->
<!--            "user_id": 1,-->
<!--            "product_name": "Jaiba",-->
<!--            "quantity": 1,-->
<!--            "price": 3,-->
<!--            "total": 3-->
<!--            }-->
<!--            ],-->
<!--            "payments": [-->
<!--            {-->
<!--            "id": 2,-->
<!--            "sale_id": 13,-->
<!--            "user_id": 1,-->
<!--            "amount": 1,-->
<!--            "date": "2024-06-20 05:25:52",-->
<!--            "status": "PAGADO"-->
<!--            }-->
<!--            ]-->
<!--            },-->
            <q-markup-table dense wrap-cells separator="cell">
              <thead class="bg-primary text-white">
                <tr>
                  <th>Operación</th>
                  <th>Fecha</th>
                  <th>Cliente</th>
                  <th>Total</th>
                  <th>Pago</th>
                  <th>Deuda</th>
<!--                  <th>Tipo</th>-->
                  <th>Usuario</th>
                  <th>Estado</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="deudor in deudores" :key="deudor.id">
                  <td>
<!--                    {{deudor.id}}-->
<!--                    <q-btn label="Agregar Pago" color="green" dense icon="payment" @click="agregarPago(deudor)" no-caps size="10px"/>-->
<!--                    <q-btn label="Ver Detalles" color="primary" dense icon="visibility" no-caps size="10px"/>-->
                    <q-btn-dropdown label="Opciones" color="primary" no-caps size="10px" auto-close>
                      <q-item clickable v-ripple @click="agregarPago(deudor)">
                        <q-item-section avatar>
                          <q-icon name="payment" color="green"/>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Agregar Pago</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-ripple @click="history(deudor)">
                        <q-item-section avatar>
                          <q-icon name="visibility" color="primary"/>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Ver Detalles</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-btn-dropdown>
                  </td>
                  <td>{{$filters.formatdMYHID(deudor.date)}}</td>
                  <td>{{$filters.capitalizeText(deudor.client.name+' '+deudor.client.lastname)}}</td>
                  <td class="text-right">
                    {{deudor.total}}
                  </td>
                  <td class="text-right">
<!--                    {{deudor.pago}}-->
                    <q-chip v-if="deudor.pago > 0" color="positive" text-color="white"
                            :label="deudor.pago" dense size="10px"/>
                  </td>
                  <td class="text-right">
                    <q-chip v-if="deudor.debt > 0" color="negative" text-color="white"
                            :label="deudor.debt" dense size="10px"/>
                  </td>
<!--                  <td>{{deudor.tipo}}</td>-->
                  <td>{{deudor.user.name}}</td>
                  <td>
<!--                    {{deudor.status}}-->
                    <q-chip v-if="deudor.status == 'ACTIVO'" color="positive" text-color="white" label="Activo" dense size="10px"/>
                    <q-chip v-else color="negative" text-color="white" label="Inactivo" dense size="10px"/>
                  </td>
                  <td>{{deudor.observacion}}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="dialog">
      <q-card style="width: 250px;max-width: 90vw;">
        <q-card-section>
          <q-form @submit="registrarPago">
          <div>
            <span class="text-bold">{{deudor.client.name+' '+deudor.client.lastname}}</span><br>
            Deuda: <span class="text-bold text-red">{{deudor.debt}}</span> <br>
            Pagado: <span class="text-bold text-green">{{deudor.pago}}</span> <br>
            Total: <span class="text-bold">{{deudor.total}}</span>
          </div>
          <q-input v-model="pago" label="Monto" type="number" dense outlined step="0.01"
                   :rules="[val => val > 0 || 'Debe ser mayor a 0', val => val <= deudor.debt || 'Debe ser menor o igual a la deuda']"/>

            <q-card-actions align="right">
              <q-btn label="Cancelar" color="negative" @click="dialog = false" no-caps :loading="loading"/>
              <q-btn label="Guardar" color="primary" type="submit" no-caps :loading="loading"/>
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="historyDialog">
      <q-card style="width: 500px;max-width: 90vw;">
        <q-card-section>
          <div>
            <span class="text-bold">{{deudor.client.name+' '+deudor.client.lastname}}</span><br>
            Deuda: <span class="text-bold text-red">{{deudor.debt}}</span> <br>
            Pagado: <span class="text-bold text-green">{{deudor.pago}}</span> <br>
            Total: <span class="text-bold">{{deudor.total}}</span>
          </div>
          <q-markup-table dense wrap-cells separator="cell">
            <thead class="bg-primary text-white">
              <tr>
                <th>Opciones</th>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Usuario</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="payment in deudor.payments" :key="payment.id">
                <td>
                  <q-btn label="Anular" color="negative" dense icon="delete" no-caps size="10px" @click="anularPago(payment)"/>
                </td>
                <td>{{$filters.formatdMYHID(payment.date)}}</td>
                <td class="text-right">{{payment.amount}}</td>
                <td>{{payment.user?.name}}</td>
                <td>
                  <q-chip v-if="payment.status == 'PAGADO'" color="positive" text-color="white" label="Pagado" dense size="10px"/>
                  <q-chip v-else color="negative" text-color="white" label="Anulado" dense size="10px"/>
                </td>
              </tr>
            </tbody>
          </q-markup-table>
          <q-card-actions align="right">
            <q-btn label="Cerrar" color="negative" @click="historyDialog = false" no-caps :loading="loading"/>
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
<!--    <pre>{{deudores}}</pre>-->
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      loading: false,
      deudores: [],
      dialog: false,
      historyDialog: false,
      deudor: {},
      pago: ''
    }
  },
  mounted() {
    this.deudoresGet()
  },
  methods: {
    anularPago (payment) {
      this.$alert.confirm('¿Está seguro de anular el pago?').onOk(() => {
        this.loading = true
        this.$axios.post('anularPago/'+payment.id).then(response => {
          this.$alert.success('Pago anulado con éxito')
          const findIndex = this.deudor.payments.findIndex(p => p.id === payment.id)
          this.deudor.payments[findIndex].status = 'ANULADO'
          this.deudoresGet()
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    history (deudor) {
      this.historyDialog = true
      this.deudor = deudor
    },
    agregarPago (deudor) {
      this.dialog = true
      this.deudor = deudor
      this.pago = deudor.debt
    },
    registrarPago () {
      this.loading = true
      this.$axios.post('payments', {
        sale_id: this.deudor.id,
        amount: this.pago
      }).then(response => {
        this.$alert.success(response.data.message)
        this.dialog = false
        this.deudoresGet()
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    deudoresGet () {
      this.loading = true
      this.$axios.get('debtors',{
        params: {
          search: this.search
        }
      }).then(response => {
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
