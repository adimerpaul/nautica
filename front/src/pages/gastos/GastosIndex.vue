<template>
  <q-page class="q-pa-xs bg-grey-3">
    <div class="row" v-if="$store.user.id == 1">
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaInicioSemana" label="Fecha inicio" dense outlined type="date" class="bg-white" @update:model-value="salesGastos"/>
      </div>
      <div class="col-6 col-md-2 q-pa-xs">
        <q-input v-model="fechaFinSemana" label="Fecha fin" dense outlined type="date" class="bg-white" @update:model-value="salesGastos"/>
      </div>
      <div class="col-12 col-md-2 q-pa-xs">
        <q-input v-model="concepto" label="Buscar por concepto" dense outlined class="bg-white" debounce="300" clearable
                 placeholder="Buscar por concepto" @update:model-value="salesGastos"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 text-right">
        <q-btn label="Excel" color="green" size="10px"  icon="fa-solid fa-file-excel" no-caps rounded @click="exportarExcel" :loading="loading"/>
        <q-btn label="Pdf" color="red" size="10px"  icon="fa-solid fa-file-pdf" no-caps rounded @click="exportarPdf" :loading="loading"/>

<!--      </div>-->
<!--      <div class="col-12 col-md-4 text-right">-->
        <!--        <q-btn :loading="loading" label="Nuevo Venta" color="green"  icon="add_circle_outline" no-caps rounded to="/sales"/>-->
                <q-btn :loading="loading" size="10px" label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>
      </div>
<!--      <div class="col-12 col-md-3 q-pa-xs">-->
<!--        <CardComponent :amount="balance" color="grey" title="Balance" icon="account_balance" />-->
<!--      </div>-->
<!--      <div class="col-12 col-md-3 q-pa-xs">-->
<!--        <CardComponent :amount="ingresoTransferencia" color="blue" title="Transferencias" icon="o_trending_up" />-->
<!--      </div>-->
<!--      <div class="col-12 col-md-3 q-pa-xs">-->
<!--        <CardComponent :amount="ingreso" color="green" title="Efectivo" icon="o_trending_up" />-->
<!--      </div>-->
<!--      <div class="col-12 col-md-3 q-pa-xs">-->
<!--        <CardComponent :amount="gasto" color="red" title="Gastos" icon="o_trending_down" />-->
<!--      </div>-->
    </div>
    <div class="row">
      <div class="col-12">
        <q-table :columns="columns" :rows="sales" dense :rows-per-page-options="[0]" :filter="filter" :loading="loading" wrap-cells
                 no-data-label="No hay ventas" no-results-label="No hay ventas"
                 title="Historial de ventas"
        >
          <template v-slot:top-right>
            <q-input outlined v-model="filter" debounce="300" placeholder="Buscar" dense>
              <template v-slot:append>
                <q-btn flat round dense icon="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:header="props">
            <q-tr :props="props" class="bg-primary text-white">
              <q-th key="opcion" :props="props" auto-width>Opcion</q-th>
              <q-th key="proveedorcliente" :props="props">Proveedor / cliente</q-th>
              <q-th key="montoTotal" :props="props">Monto total</q-th>
              <q-th key="fechayhora" :props="props">Fecha y hora</q-th>
              <q-th key="concepto" :props="props">Concepto</q-th>
              <q-th key="observacion" :props="props">Comentario</q-th>
              <q-th key="pago" :props="props">Pago</q-th>
              <q-th key="numeroFactura" :props="props">Num. Fac</q-th>
              <q-th key="user" :props="props">Usuario</q-th>
              <q-th key="lugar" :props="props">Lugar</q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="opcion" :props="props" auto-width>
                <q-btn-dropdown dense icon="more_vert" align="right" label="Opciones" no-caps
                                :color="props.row.tipo_venta=='INGRESO'?'green-9':'red-9'"
                                size="10px" v-if="props.row.status=='ACTIVO'">
<!--                  <q-item clickable v-close-popup class="text-center">-->
<!--                    <q-btn dense label="Anular" color="red-4" size="10px" class="full-width"-->
<!--                           no-caps no-wrap icon="o_highlight_off" @click="saleAnular(props.row.id)">-->
<!--                      <q-tooltip>Anular venta</q-tooltip>-->
<!--                    </q-btn>-->
<!--                  </q-item>-->
<!--                  <q-item clickable v-close-popup class="text-center">-->
<!--                    <q-btn dense label="Imprimir" color="green-4" size="10px" class="full-width"-->
<!--                           no-caps no-wrap icon="print" @click="reimprimirNota(props.row)">-->
<!--                      <q-tooltip>Imprimir nota</q-tooltip>-->
<!--                    </q-btn>-->
<!--                  </q-item>-->
                  <q-list>
                    <q-item clickable v-close-popup @click="reimprimirNota(props.row)">
                      <q-item-section avatar>
                        <q-icon name="o_print" />
                      </q-item-section>
                      <q-item-section>
                          <div>Imprimir nota</div>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="saleAnular(props.row.id)">
                      <q-item-section avatar>
                        <q-icon name="o_highlight_off" />
                      </q-item-section>
                      <q-item-section>
                          <div>Anular</div>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
                <div v-else style="width: 95px">
                  <q-chip label="Anulado" color="grey-4" text-color="white" dense flat />
                  <q-btn dense color="red-4" size="10px" no-caps no-wrap icon="visibility"
                         v-if="props.row.motivo_anulacion" @click="$alert.dialogShow(props.row.motivo_anulacion)">
                    <q-tooltip>Motivo de anulación</q-tooltip>
                  </q-btn>
                </div>
              </q-td>
              <q-td key="proveedorcliente" :props="props">
                <div class="text-grey-8" v-if="props.row.client">
                  {{ props.row.client?.name}} {{ props.row.client?.lastname}}
                </div>
              </q-td>
              <q-td key="montoTotal" :props="props" class="text-right">
                <span :class="`text-${props.row.tipo_venta=='INGRESO'?'green':'red'}-7 text-bold` ">
                  {{ props.row.total }} $
                </span>
              </q-td>
              <q-td key="fechayhora" :props="props" style="min-width: 150px">
                {{ $filters.dateDmYHis(props.row.date) }}
              </q-td>
              <q-td key="concepto" :props="props" class="">
                <div>
                  <!--                  {{ props.row.tipo_venta}}-->
<!--                  <q-btn icon="o_local_atm" size="15px" :color="`${props.row.tipo_venta=='INGRESO'?'green':'red'}-7`"-->
<!--                         :class="`bg-${props.row.tipo_venta=='INGRESO'?'green':'red'}-2`" dense flat-->
<!--                         style="padding: 0px; margin: 0px; border-radius: 0px;position: absolute;top: 5px;left: 0px;"/>-->
                  <div style="">
                    <div class=" q-ml-xs" style="width: 180px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                      {{ props.row.description }}
                      {{ props.row?.boat?.name }}
                    </div>
                  </div>
                </div>
              </q-td>
              <q-td key="observacion" :props="props">
                <div class="" style="width: 100px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                  {{ props.row.observacion }}
                </div>
              </q-td>
              <q-td key="pago" :props="props">
                <q-chip :color="`${props.row.pago=='EFECTIVO'?'blue':'green'}-5`" text-color="white" dense flat :label="props.row.pago"/>
              </q-td>
              <q-td key="numeroFactura" :props="props">
                <p class="text-right text-red text-bold">{{ props.row.numeroFactura }}</p>
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
        <!--        <pre>{{sales}}</pre>-->
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
  name: 'GastosIndex',
  components: { DialogGasto },
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
        // { name: 'observacion', label: 'Comentario', align: 'left', field: 'observacion', sortable: true },
        { name: 'pago', label: 'Pago', align: 'left', field: 'pago', sortable: true },
        { name: 'numeroFactura', label: 'Numero de factura', align: 'left', field: 'numero de factura', sortable: true },
        // { name: 'egresoingreso', label: 'Egreso / ingreso', align: 'left', field: 'egreso / ingreso', sortable: true },
        { name: 'user', label: 'Usuario', align: 'left', field: (row) => row.user.name, sortable: true },
        // { name: 'lugar', label: 'lugar', align: 'left', field: (row) => row.user.lugar, sortable: true }
      ],
      sales: [],
      loading: false,
      filter: ''
    }
  },
  mounted () {
    this.salesGastos()
  },
  methods: {
    exportarExcel () {
      this.loading = true
      this.$axios.get('exportSalesExcel', {
        params: {
          fechaInicioSemana: this.fechaInicioSemana,
          fechaFinSemana: this.fechaFinSemana,
          concepto: this.concepto
        },
        responseType: 'blob'
      })
        .then(response => {
          // console.log(response.data)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'ventas.xlsx')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
    },
    exportarPdf () {
      this.loading = true
      this.$axios.get('exportSalesPdf', {
        params: {
          fechaInicioSemana: this.fechaInicioSemana,
          fechaFinSemana: this.fechaFinSemana,
          concepto: this.concepto
        },
        responseType: 'blob'
      })
        .then(response => {
          // console.log(response.data)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'ventas.pdf')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
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
        prompt: {
          model: '',
          type: 'text',
          label: 'Motivo de anulación',
          required: true
        },
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
      }).onOk((data) => {
        this.$axios.post('saleAnular', {
          id: id,
          motivo: data
        })
          .then(response => {
            this.salesGastos()
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    gastoCreated (gasto) {
      this.sales.unshift(gasto)
      this.gastoDialog = false
    },
    salesGastos () {
      this.loading = true
      this.$axios.get('salesGastos', {
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
        return sale.status !== 'ANULADO' ? sale.tipo_venta === 'INGRESO' ? acc + sale.total : acc - sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    ingreso () {
      const total = this.sales.reduce((acc, sale) => {
        // y que no sea anulado
        //y que el pago sea en efectivo
        return sale.tipo_venta === 'INGRESO' && sale.status !== 'ANULADO'
        && sale.pago === 'EFECTIVO'
          ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    ingresoTransferencia () {
      const total = this.sales.reduce((acc, sale) => {
        // y que no sea anulado
        //y que el pago sea en efectivo
        return sale.tipo_venta === 'INGRESO' && sale.status !== 'ANULADO'
        && sale.pago === 'TRANSFERENCIA'
          ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    },
    gasto () {
      const total = this.sales.reduce((acc, sale) => {
        // y que su estado no se anulado
        return sale.tipo_venta === 'EGRESO' && sale.status !== 'ANULADO' ? acc + sale.total : acc
      }, 0)
      return Math.round(total * 100) / 100
    }
  }
}
</script>
