<template>
  <q-page class="q-pa-xs bg-grey-3">
    <div class="row">
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaInicioSemana" label="Fecha inicio" dense outlined type="date" class="bg-white" @update:model-value="salesGet"/>
      </div>
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaFinSemana" label="Fecha fin" dense outlined type="date" class="bg-white" @update:model-value="salesGet"/>
      </div>
      <div class="col-12 col-md-2 q-pa-xs">
        <q-input v-model="concepto" label="Buscar por concepto" dense outlined class="bg-white" debounce="300" clearable
                 placeholder="Buscar por concepto" @update:model-value="salesGet"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-2 text-right">
        <q-btn label="Exportar" color="primary"  icon="get_app" no-caps rounded @click="exportar"/>
      </div>
      <div class="col-12 col-md-4 text-right">
        <q-btn label="Nuevo Venta" color="green"  icon="add_circle_outline" no-caps rounded to="/sale"/>
        <q-btn label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>
      </div>
      <div class="col-12 col-md-4 q-pa-xs">
        <CardComponent :monto="balance" color="grey" title="Balance" icono="o_trending_up" />
      </div>
      <div class="col-12 col-md-4 q-pa-xs">
        <CardComponent :monto="ingreso" color="green" title="Ventas" icono="o_trending_up" />
      </div>
      <div class="col-12 col-md-4 q-pa-xs">
        <CardComponent :monto="gasto" color="red" title="Gastos" icono="o_trending_down" />
      </div>
      <div class="col-12">
        <q-table :columns="columns" :rows="sales" dense :rows-per-page-options="[0]" :filter="filter" :loading="loading" wrap-cells
                 no-data-label="No hay ventas" no-results-label="No hay ventas"
        >
          <template v-slot:top-right>
            <q-input outlined v-model="filter" debounce="300" placeholder="Buscar" dense>
              <template v-slot:append>
                <q-btn flat round dense icon="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="opcion" :props="props" auto-width>
                <!--                <q-btn-group v-if="props.row.status=='ACTIVO'">-->
                <!--                  <q-btn dense label="Anular" color="red-4" size="10px"-->
                <!--                         no-caps no-wrap icon="o_highlight_off" @click="saleAnular(props.row.id)">-->
                <!--                    <q-tooltip>Anular venta</q-tooltip>-->
                <!--                  </q-btn>-->
                <!--                </q-btn-group>-->
                <q-btn-dropdown dense icon="more_vert" align="right" label="Opciones" no-caps
                                :color="props.row.tipo_venta=='INGRESO'?'green-9':'red-9'"
                                size="10px" v-if="props.row.status=='ACTIVO'">
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Anular" color="red-4" size="10px" class="full-width"
                           no-caps no-wrap icon="o_highlight_off" @click="saleAnular(props.row.id)">
                      <q-tooltip>Anular venta</q-tooltip>
                    </q-btn>
                  </q-item>
                  <q-item clickable v-close-popup class="text-center">
                    <q-btn dense label="Imprimir" color="green-4" size="10px" class="full-width"
                           no-caps no-wrap icon="print" @click="reimprimirNota(props.row)">
                      <q-tooltip>Imprimir nota</q-tooltip>
                    </q-btn>
                  </q-item>
                  <!--                  <q-item clickable v-close-popup class="text-center">-->
                  <!--                    <q-btn dense label="Modificar" color="orange-4" size="10px" class="full-width"-->
                  <!--                           no-caps no-wrap icon="o_edit" @click="modificarNota(props.row)">-->
                  <!--                      <q-tooltip>Modificar nota</q-tooltip>-->
                  <!--                    </q-btn>-->
                  <!--                  </q-item>-->
                </q-btn-dropdown>
                <div v-else>
                  <q-btn dense label="Anulado" color="grey-4" size="10px" no-caps no-wrap icon="o_highlight_off" />
                </div>
              </q-td>
              <q-td key="proveedorcliente" :props="props">
                <div class="text-grey" v-if="props.row.client">
                  {{ props.row.client?.name}} {{ props.row.client?.lastname}}
                </div>
              </q-td>
              <q-td key="montoTotal" :props="props">
                <span class="text-grey">{{ props.row.total }} Bs</span>
              </q-td>
              <q-td key="fechayhora" :props="props" style="min-width: 150px">
                {{ $filters.dateDmYHis(props.row.date) }}
              </q-td>
              <q-td key="concepto" :props="props" class="">
                <div>
                  <!--                  {{ props.row.tipo_venta}}-->
                  <q-btn icon="o_local_atm" size="15px" :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-7`"
                         :class="`bg-${props.row.tipo_venta=='INGRESO'?'green':'red'}-2`" dense flat
                         style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute;top: 5px;left: 0px;"/>
                  <div style="padding-left: 15px">
                    <div class=" q-ml-xs" style="width: 300px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">{{ props.row.description }}</div>
                  </div>
                </div>
              </q-td>
              <q-td key="comentario" :props="props">
                <div class="" style="width: 300px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">{{ props.row.observacion }}</div>
              </q-td>
              <q-td key="egresoingreso" :props="props">
                <q-chip :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-5`" text-color="white" dense flat :label="props.row.tipo_venta"/>
              </q-td>
              <q-td key="user" :props="props">
                <p>{{ props.row.user?.name }}</p>
              </q-td>
              <q-td key="lugar" :props="props">
                <p>{{ props.row.lugar }}</p>
              </q-td>
            </q-tr>
          </template>
        </q-table>
                <pre>{{sales}}</pre>
      </div>
    </div>
  </q-page>
  <q-dialog v-model="gastoDialog" position="right" maximized>
    <DialogGasto @gastoCreated="gastoCreated"/>
  </q-dialog>
  <div id="myElement" class="hidden"></div>
</template>

<script>
import moment from 'moment'
import CardComponent from 'components/CardComponent.vue'
import DialogGasto from 'pages/index/DialogGasto.vue'
import { Imprimir } from 'src/addons/Imprimir'
import { Excel } from 'src/addons/Excel'
export default {
  name: 'IndexPage',
  components: { DialogGasto, CardComponent },
  data () {
    return {
      gastoDialog: false,
      fechaInicioSemana: moment().startOf('isoWeek').format('YYYY-MM-DD'),
      fechaFinSemana: moment().endOf('isoWeek').format('YYYY-MM-DD'),
      concepto: '',
      columns: [
        { name: 'opcion', label: 'Opcion', align: 'left', field: 'opcion' },
        { name: 'proveedorcliente', label: 'Proveedor / cliente', align: 'left', field: 'proveedor / cliente', sortable: true },
        { name: 'montoTotal', label: 'Monto total', align: 'left', field: 'montoTotal', sortable: true },
        { name: 'fechayhora', label: 'Fecha y hora', align: 'left', field: 'fechayhora', sortable: true },
        { name: 'concepto', label: 'Concepto', align: 'left', field: 'concepto', sortable: true },
        { name: 'comentario', label: 'Comentario', align: 'left', field: 'comentario', sortable: true },
        // { name: 'agencia', label: 'Agencia', align: 'left', field: 'agencia', sortable: true },
        // { name: 'metodoPago', label: 'Metodo de pago', align: 'left', field: 'metodoPago', sortable: true },
        { name: 'egresoingreso', label: 'Egreso / ingreso', align: 'left', field: 'egreso / ingreso', sortable: true },
        { name: 'user', label: 'Usuario', align: 'left', field: (row) => row.user.name, sortable: true },
        // { name: 'lugar', label: 'lugar', align: 'left', field: (row) => row.user.lugar, sortable: true }
      ],
      sales: [],
      loading: false,
      filter: ''
    }
  },
  mounted () {
    this.salesGet()
  },
  methods: {
    exportar () {
        // [
        // {
        //   "id": 2,
        //   "date": "2024-06-25 03:52:01",
        //   "client_id": 4,
        //   "total": 3.5,
        //   "tipo": "CREDITO",
        //   "user_id": 1,
        //   "status": "ACTIVO",
        //   "observacion": null,
        //   "pago": "TRANSFERENCIA",
        //   "description": "1 Pescado Caite, 1 Pescado Rojo",
        //   "tipo_venta": "INGRESO",
        //   "user": {
        //     "id": 1,
        //     "name": "Administrador",
        //     "role": "SUPERADMIN",
        //     "username": "admin",
        //     "email": "admin@test.com",
        //     "email_verified_at": null
        //   },
        //   "client": {
        //     "id": 4,
        //     "name": "ADALID",
        //     "lastname": "CHAMBI",
        //     "company": "CHAMBI",
        //     "nit": "12345678",
        //     "phone": "1234567"
        //   },
        //   "details": [
        //     {
        //       "id": 6,
        //       "sale_id": 2,
        //       "product_id": 9,
        //       "user_id": 1,
        //       "product_name": "Pescado Caite",
        //       "quantity": 1,
        //       "price": 1,
        //       "total": 1
        //     },
        //     {
        //       "id": 7,
        //       "sale_id": 2,
        //       "product_id": 8,
        //       "user_id": 1,
        //       "product_name": "Pescado Rojo",
        //       "quantity": 1,
        //       "price": 2.5,
        //       "total": 2.5
        //     }
        //   ]
        // }
        // ]
      const data = [
        {
          sheet: 'Adults',
          columns: [
            { label: 'Proveedor / cliente', value: 'name' },
            { label: 'Monto total', value: 'total' },
            { label: 'Fecha y hora', value: 'date' },
            { label: 'Concepto', value: 'concepto' },
            { label: 'Comentario', value: 'comentario' },
            { label: 'Egreso / ingreso', value: 'tipo_venta' },
            { label: 'Usuario', value: 'user.name' },
            { label: 'Lugar', value: 'lugar' }
          ],
          content: this.sales
        }
      ]

      Excel.export(data, 'ventas')
    },
    reimprimirNota (sale) {
      Imprimir.nota(sale).then(r => {
        // console.log(r)
      })
    },
    saleAnular (id) {
      this.$q.dialog({
        title: 'Anular venta',
        message: '¿Está seguro de anular la venta?',
        persistent: true,
        ok: {
          label: 'Si',
          color: 'negative',
          push: true
        },
        cancel: {
          label: 'No',
          color: 'primary',
          push: true
        }
      }).onOk(() => {
        this.$axios.post('saleAnular', { id })
          .then(response => {
            this.salesGet()
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    gastoCreated (gasto) {
      // this.sales.push(gasto)
      // colocar al principio
      this.sales.unshift(gasto)
      this.gastoDialog = false
    },
    salesGet () {
      this.loading = true
      this.$axios.get('sales', {
        params: {
          fechaInicioSemana: this.fechaInicioSemana,
          fechaFinSemana: this.fechaFinSemana,
          concepto: this.concepto
        }
      })
        .then(response => {
          this.sales = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  computed: {
    balance () {
      const total = this.sales.reduce((acc, sale) => {
        // y que no se anulado
        // return sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc - sale.total
        return sale.status !== 'ANULADO' ? sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc - sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    ingreso () {
      const total = this.sales.reduce((acc, sale) => {
        // y que no sea anulado
        return sale.tipo_venta === 'INGRESO' && sale.status !== 'ANULADO' ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    gasto () {
      const total = this.sales.reduce((acc, sale) => {
        // return sale.tipo_venta === 'EGRESO' ? acc + sale.total : acc
        // y que su estado no se anulado
        return sale.tipo_venta === 'EGRESO' && sale.status !== 'ANULADO' ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    }
  }
}
</script>
