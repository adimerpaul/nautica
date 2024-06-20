<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-12 col-md-4">
            <q-input v-model="search" label="Buscar por cliente o usuario" placeholder="Buscar" dense outlined />
          </div>
          <div class="col-12 col-md-4">
            <q-btn v-model="search" color="primary" label="Buscar" @click="deudoresGet" :loading="loading" icon="search" no-caps/>
          </div>
          <div class="col-12">
<!--            {-->
<!--            "id": 12,-->
<!--            "date": "2024-06-20 05:09:39",-->
<!--            "client_id": 3,-->
<!--            "total": 11.75,-->
<!--            "tipo": "CREDITO",-->
<!--            "user_id": 1,-->
<!--            "status": "ACTIVO",-->
<!--            "observacion": null,-->
<!--            "pago": 10,-->
<!--            "debt": 1.75,-->
<!--            "client": {-->
<!--            "id": 3,-->
<!--            "name": "ANDRES",-->
<!--            "lastname": "CALLE VEGA",-->
<!--            "company": "SELA",-->
<!--            "nit": "12345678",-->
<!--            "phone": "126457"-->
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
<!--            "id": 27,-->
<!--            "sale_id": 12,-->
<!--            "product_id": 16,-->
<!--            "user_id": 1,-->
<!--            "product_name": "Langosta de mar",-->
<!--            "quantity": 1,-->
<!--            "price": 8,-->
<!--            "total": 8-->
<!--            },-->
<!--            {-->
<!--            "id": 28,-->
<!--            "sale_id": 12,-->
<!--            "product_id": 15,-->
<!--            "user_id": 1,-->
<!--            "product_name": "Calamar",-->
<!--            "quantity": 1,-->
<!--            "price": 3.75,-->
<!--            "total": 3.75-->
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
                    {{deudor.id}}
                  </td>
                  <td>{{$filters.formatdMYHID(deudor.date)}}</td>
                  <td>{{$filters.capitalizeText(deudor.client.name+' '+deudor.client.lastname)}}</td>
                  <td>{{deudor.total}}</td>
                  <td>{{deudor.pago}}</td>
                  <td>{{deudor.debt}}</td>
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
    <pre>{{deudores}}</pre>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      search: '',
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
