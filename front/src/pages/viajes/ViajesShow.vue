<template>
  <q-page class="bg-grey-3 q-pa-xs">
    <q-card>
      <div class="row">
        <div class="col-6 col-md-2 q-pa-xs">
          <q-btn
            color="primary"
            label="Volver"
            @click="() => { this.$router.push('/viajes') }"
            no-caps
            icon="arrow_back"
            size="sm"
            :loading="loading"
          />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Viaje</label>
          <br>
          <q-chip :label="viaje?.status" text-color="white"  dense v-if="viaje?.status === 'Finalizado'" color="green" />
          <q-chip :label="viaje?.status" text-color="white"  dense v-if="viaje?.status === 'Pendiente'" color="orange" />
          <q-chip :label="viaje?.status" text-color="white"  dense v-if="viaje?.status === 'En curso'" color="blue" />
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Fechas</label>
          <div>{{$filters.formatdMY(viaje.fechaInicio)}} {{$filters.formatdMY(viaje.fechaFin)}}</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Barco</label>
          <div>{{viaje.boat?.name}}</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Empresa</label>
          <br>
          <q-chip size="12px" :label="viaje?.boat?.company?.name" text-color="white" :style="{backgroundColor: viaje?.boat?.company?.color}" icon="business" />
        </div>
        <div class="col-6 col-md-2 q-pa-xs q-mt-md">
<!--          <q-btn :loading="loading" label="Nuevo Gasto" color="red"  icon="add_circle_outline" no-caps rounded @click="gastoDialog = true"/>-->
        </div>
        <div class="col-12 col-md-12">
          <label class="text-bold">Observaciones</label>
          <q-editor min-height="5rem" v-model="viaje.observaciones" @update:model-value="debouncedUpdateObservaciones"  />
        </div>
        <div class="col-12 col-md-2">
          <q-input v-model="fecha_inicio" outlined dense type="date" label="Fecha Inicio" @update:modelValue="filtroViajes" />
        </div>
        <div class="col-12 col-md-2">
          <q-input v-model="fecha_fin" outlined dense type="date" label="Fecha Fin" @update:modelValue="filtroViajes" />
        </div>
        <div class="col-12 col-md-8 text-right q-pa-xs">
<!--          btn actulizar-->
          <q-btn
              outline
            color="primary"
            label="Actualizar"
            @click="getViaje"
            no-caps
            icon="refresh"
            size="sm"
            :loading="loading"></q-btn>
          <q-btn
            color="primary"
            label="PDF Total"
            @click="imprimirPdfTotal"
            no-caps
            icon="picture_as_pdf"
            size="sm"
            :loading="loading"></q-btn>

          <q-btn
            v-if="viaje.estado === 'Activo'"
            color="green"
            label="Agregar Descarga"
            @click="dialogAgregarProductoClick"
            no-caps
            size="sm"
            class="text-bold"
            icon="add_circle_outline"
            :loading="loading"
          />
        </div>
        <div class="col-12">
          <q-markup-table dense>
            <thead class="bg-primary text-white">
<!--            protected $fillable = ['product', 'viaje_id', 'cantidad', 'fecha', 'status', 'user_id'];-->
              <tr>
                <th>Acciones</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Producto</th>
<!--                <th>Libras</th>-->
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in productViaje" :key="item.id">
                <td>
                  <q-btn
                    color="negative"
                    label="Anular"
                    no-caps
                    dense
                    size="10px"
                    icon="delete"
                    @click="anular(item)"
                    v-if="item.status === 'ACTIVO' && viaje.estado === 'Activo'"
                    :loading="loading"
                  />
                  <q-chip
                    label="Anulado"
                    text-color="white"
                    dense
                    v-if="item.status === 'INACTIVO'"
                    color="red"
                  />
                  <q-btn
                    color="primary"
                    label="Imprimir"
                    no-caps
                    dense
                    size="10px"
                    icon="print"
                    v-if="item.status === 'ACTIVO'"
                    @click="imprimirPdf(item)"
                    :loading="loading"></q-btn>
                </td>
                <td>{{$filters.formatdMYHID(item.fecha)}}</td>
                <td>
                  <q-chip label="Activo" text-color="white" dense v-if="item.status === 'ACTIVO'" color="green" />
                  <q-chip label="Anulado" text-color="white" dense v-if="item.status === 'INACTIVO'" color="red" />
<!--                  <q-chip :label="item.status" text-color="white"  dense v-if="item.status === 'En curso'" color="blue" />-->
                </td>
                <td class="">
                  <div class="" style="width: 350px; white-space: normal; overflow-wrap: break-word;line-height: 0.9;">
                    {{item.details}}
                  </div>
                </td>
<!--                <td class="text-right">{{item.cantidad}}</td>-->
                <td class="text-right">{{item.user?.name}}</td>
              </tr>
            </tbody>
          </q-markup-table>
<!--          <pre>{{productViaje}}</pre>-->
        </div>
<!--        <div class="col-12 text-bold text-center q-pt-md">-->
<!--          Capturas en libras (aproximado)-->
<!--        </div>-->
<!--        <div class="col-12 text-right">-->
<!--          <q-btn :loading="loading" label="Agregar lance" color="positive"  icon="add_circle_outline" no-caps rounded size="10px" @click="agregarLance"/>-->
<!--        </div>-->
<!--        <div class="col-12">-->
<!--          <q-markup-table dense>-->
<!--            <thead class="bg-primary text-white">-->
<!--            <tr>-->
<!--              <th>Opciones</th>-->
<!--              <th>Fecha</th>-->
<!--              <th>Nro</th>-->
<!--              <th>Hora Inicio</th>-->
<!--              <th>Hora Fin</th>-->
<!--              <th>Latitud</th>-->
<!--              <th>Longitud</th>-->
<!--              <th>Camaron Blanco</th>-->
<!--              <th>Camaron Cafe</th>-->
<!--              <th>Camaron Rojo</th>-->
<!--              <th>Camaroncillo</th>-->
<!--              <th>Calamar</th>-->
<!--              <th>Caracol</th>-->
<!--              <th>Corvina</th>-->
<!--              <th>Babosa</th>-->
<!--              <th>Guabina</th>-->
<!--              <th>Jaiba</th>-->
<!--              <th>Langosta</th>-->
<!--              <th>Pulpo</th>-->
<!--              <th>Jurel</th>-->
<!--              <th>Anguila</th>-->
<!--              <th>Pargo</th>-->
<!--              <th>Robalo</th>-->
<!--              <th>Cienero</th>-->
<!--              <th>Otras Especies</th>-->
<!--              <th>Observaciones</th>-->
<!--              <th>Usuario</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="item in lances" :key="item.id">-->
<!--              <td>-->
<!--                <q-btn-->
<!--                  color="negative"-->
<!--                  label="Eliminar"-->
<!--                  no-caps-->
<!--                  dense-->
<!--                  size="10px"-->
<!--                  icon="delete"-->
<!--                  @click="eliminarLance(item)"-->
<!--                  :loading="loading"-->
<!--                  style="width: 75px"-->
<!--                />-->
<!--              </td>-->
<!--              <td>{{$filters.formatdMY(item.fecha)}}</td>-->
<!--              <td>{{item.numero}}</td>-->
<!--              <td>{{item.hora_inicio}}</td>-->
<!--              <td>{{item.hora_fin}}</td>-->
<!--              <td>{{item.latitud}}</td>-->
<!--              <td>{{item.longitud}}</td>-->
<!--              <td class="text-right">{{item.camaron_blanco}}</td>-->
<!--              <td class="text-right">{{item.camaron_cafe}}</td>-->
<!--              <td class="text-right">{{item.camaron_rojo}}</td>-->
<!--              <td class="text-right">{{item.camaroncillo}}</td>-->
<!--              <td class="text-right">{{item.calamar}}</td>-->
<!--              <td class="text-right">{{item.caracol}}</td>-->
<!--              <td class="text-right">{{item.corvina}}</td>-->
<!--              <td class="text-right">{{item.babosa}}</td>-->
<!--              <td class="text-right">{{item.guabina}}</td>-->
<!--              <td class="text-right">{{item.jaiba}}</td>-->
<!--              <td class="text-right">{{item.langosta}}</td>-->
<!--              <td class="text-right">{{item.pulpo}}</td>-->
<!--              <td class="text-right">{{item.jurel}}</td>-->
<!--              <td class="text-right">{{item.anguila}}</td>-->
<!--              <td class="text-right">{{item.pargo}}</td>-->
<!--              <td class="text-right">{{item.robalo}}</td>-->
<!--              <td class="text-right">{{item.cienero}}</td>-->
<!--              <td class="text-right">{{item.otras_especies}}</td>-->
<!--              <td>{{item.observaciones}}</td>-->
<!--              <td>{{item.user?.name}}</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td colspan="7" class="text-right text-bold">Totales</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['camaron_blanco'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['camaron_cafe'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['camaron_rojo'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['camaroncillo'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['calamar'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['caracol'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['corvina'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['babosa'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['guabina'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['jaiba'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['langosta'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['pulpo'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['jurel'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['anguila'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['pargo'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['robalo'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['cienero'] || 0), 0)}}</td>-->
<!--              <td class="text-right">{{lances.reduce((a, b) => a + (b['otras_especies'] || 0), 0)}}</td>-->
<!--              <td colspan="2"></td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </q-markup-table>-->
<!--        </div>-->
      </div>
    </q-card>
    <q-dialog v-model="dialogAgregarProducto">
      <q-card style="width: 750px;max-width: 95vh;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle2 text-bold">Descarga {{viaje.boat?.name}}</div>
          <q-space/>
          <q-btn
            flat
            round
            dense
            icon="close"
            @click="() => { dialogAgregarProducto = false }"
          />¡
        </q-card-section>
        <q-form @submit="productAdd">
          <q-card-section>
            <div class="row">
              <div class="col-12 col-md-4 q-pa-xs">
                <label for="Nro Descarga">Nro Descarga</label><br>
<!--                # <q-chip :label="descargar.descarga" text-color="white"  dense color="primary" />-->
                <q-input v-model="descargar.descarga" outlined filled dense />
              </div>
              <div class="col-12 col-md-4 q-pa-xs">
                <label for="Dia">Dia</label><br>
<!--                <q-chip :label="descargar.dia" text-color="white"  dense color="primary" /> Dia-->
                <q-input v-model="descargar.dia" outlined filled dense />
              </div>
              <div class="col-12 col-md-4 q-pa-xs">
                <label for="Dia">Fecha</label><br>
                <q-input v-model="descargar.fecha" outlined type="date" filled dense />
              </div>
              <div class="col-12 col-md-6 q-pa-xs">
                <label for="Dia">Producto</label><br>
                <q-select
                  v-model="product"
                  :options="products"
                  emit-value
                  map-options
                  use-input
                  clearable
                  outlined
                  option-label="name"
                  @filter="filterFn"
                  dense
                />
<!--                <pre>{{product}}</pre>-->
              </div>
              <div class="col-12 col-md-3 q-pa-xs">
                <label for="Cantidad">Libras</label><br>
                <q-input
                  v-model="cantidad"
                  placeholder="Libras"
                  clearable
                  outlined
                  dense
                />
              </div>
              <div class="col-12 col-md-3 text-center q-mt-md q-pa-xs">
                <q-btn
                  color="primary"
                  label="Agregar"
                  @click="agregarProducto"
                  no-caps
                  class="text-bold"
                  icon="add_circle_outline"
                  :loading="loading"
                />
              </div>
              <div class="col-12 q-mt-md">
                <q-markup-table dense >
                  <thead class="bg-primary text-white">
                    <tr>
                      <th>Producto</th>
                      <th>Stock</th>
                      <th>Opcion</th>
                    </tr>
                  </thead>
                  <tbody v-if="productBuy.length > 0">
                    <tr v-for="item in productBuy" :key="item.id">
                      <td>{{item.name}}</td>
                      <td class="text-right">{{item.stock}}</td>
                      <td class="text-right">
                        <q-btn
                          color="negative"
                          label="Eliminar"
                          no-caps
                          dense
                          size="10px"
                          icon="delete"
                          @click="() => { productBuy = productBuy.filter(v => v.id !== item.id) }"
                        />
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="2" class="text-center">No hay productos</td>
                    </tr>
                  </tbody>
                </q-markup-table>
<!--                <pre>{{productBuy}}</pre>-->
              </div>
              <div class="col-12 text-right">
                <q-btn
                  color="green"
                  label="Guardar"
                  @click="productAdd"
                  no-caps
                  class="text-bold"
                  icon="save"
                  :loading="loading"
                />
              </div>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="gastoDialog" position="right" maximized >
      <DialogGasto @gastoCreated="gastoCreated" :viaje_id="id"/>
    </q-dialog>
    <q-dialog v-model="lanceDialog">
      <q-card style="width: 950px;max-width: 95vh;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle2 text-bold">Agregar Lance</div>
          <q-space/>
          <q-btn
            flat
            round
            dense
            icon="close"
            @click="() => { lanceDialog = false }"
          />
        </q-card-section>
        <q-card-section>
          <q-form @submit="lanceSave">
              <div class="row">
                <div class="col-6 col-md-2">
                  <label for="Fecha">Fecha</label>
                  <q-input v-model="lance.fecha" outlined dense type="date" disable />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Hora Inicio">Hora Inicio</label>
                  <q-input v-model="lance.hora_inicio" outlined dense type="time" />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Hora Fin">Hora Fin</label>
                  <q-input v-model="lance.hora_fin" outlined dense type="time" />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Nro">Nro</label>
                  <q-input v-model="lance.numero" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Latitud">Latitud</label>
                  <q-input v-model="lance.latitud" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Longitud">Longitud</label>
                  <q-input v-model="lance.longitud" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Camaron Blanco">Camaron Blanco</label>
                  <q-input v-model="lance.camaron_blanco" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Camaron Cafe">Camaron Cafe</label>
                  <q-input v-model="lance.camaron_cafe" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Camaron Rojo">Camaron Rojo</label>
                  <q-input v-model="lance.camaron_rojo" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Camaroncillo">Camaroncillo</label>
                  <q-input v-model="lance.camaroncillo" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Calamar">Calamar</label>
                  <q-input v-model="lance.calamar" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Caracol">Caracol</label>
                  <q-input v-model="lance.caracol" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Corvina">Corvina</label>
                  <q-input v-model="lance.corvina" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Babosa">Babosa</label>
                  <q-input v-model="lance.babosa" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Guabina">Guabina</label>
                  <q-input v-model="lance.guabina" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Jaiba">Jaiba</label>
                  <q-input v-model="lance.jaiba" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Langosta">Langosta</label>
                  <q-input v-model="lance.langosta" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Pulpo">Pulpo</label>
                  <q-input v-model="lance.pulpo" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Jurel">Jurel</label>
                  <q-input v-model="lance.jurel" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Anguila">Anguila</label>
                  <q-input v-model="lance.anguila" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Pargo">Pargo</label>
                  <q-input v-model="lance.pargo" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Robalo">Robalo</label>
                  <q-input v-model="lance.robalo" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Cienero">Cienero</label>
                  <q-input v-model="lance.cienero" outlined dense />
                </div>
                <div class="col-6 col-md-2">
                  <label for="Otras Especies">Otras Especies</label>
                  <q-input v-model="lance.otras_especies" outlined dense />
                </div>
                <div class="col-12">
                  <label for="Observaciones">Observaciones</label>
                  <q-editor min-height="5rem" v-model="lance.observaciones" />
                </div>
                <div class="col-12 text-right q-pt-xs">
                  <q-btn
                    color="green"
                    label="Guardar"
                    type="submit"
                    no-caps
                    class="text-bold"
                    icon="save"
                    :loading="loading"
                  />
                </div>
              </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div id="myElement" class="hidden"></div>
<!--    <pre>{{viaje}}</pre>-->
  </q-page>
</template>

<script>
import { debounce } from 'lodash';
import moment from "moment";
import DialogGasto from "pages/index/DialogGasto.vue";

export default {
  name: 'ViajesShow',
  components: {DialogGasto},
  data () {
    return {
      id: '',
      viaje: {
        observaciones: ''
      },
      gastoDialog: false,
      debouncedUpdateObservaciones: null,
      dialogAgregarProducto: false,
      products: [],
      productsAll: [],
      product: '',
      cantidad: '',
      loading: false,
      productViaje: [],
      productViajeAll: [],
      productBuy: [],
      descargar: {
        viaje_id: '',
        descarga: '',
        dia: '',
        fecha: '',
      },
      lanceDialog: false,
      lance: {},
      lances: [],
      fecha_inicio: '',
      fecha_fin: '',
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getViaje()
    this.debouncedUpdateObservaciones = debounce(this.updateObservaciones, 1000);
    this.productsGet()
  },
  methods: {
    filtroViajes() {
      if (this.fecha_inicio === '' || this.fecha_fin === '') {
        this.productViaje = this.productViajeAll
      }
      this.productViaje = this.productViajeAll.filter(v => {
        return moment(v.fecha).isSameOrAfter(this.fecha_inicio) && moment(v.fecha).isSameOrBefore(this.fecha_fin)
      })
    },
    eliminarLance(item){
      this.$alert.confirm('¿Está seguro de eliminar este lance?').onOk(() => {
        this.loading = true
        this.$axios.delete(`lances/${item.id}`)
          .then(response => {
            this.lances = this.lances.filter(v => v.id !== item.id)
          })
          .catch(error => {
            console.log(error)
          }).finally(() => {
          this.loading = false
        })
      })
    },
    lanceSave() {
      this.loading = true
      this.$axios.post('lances', this.lance)
        .then(response => {
          this.lances.push(response.data)
          this.lanceDialog = false
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
    },
    agregarLance() {
      this.lanceDialog = true
      this.lance = {
        viaje_id: this.id,
        fecha: moment().format('YYYY-MM-DD'),
        numero: this.lances.length + 1,
        hora_inicio: moment().format('HH:mm'),
        hora_fin: moment().format('HH:mm'),
        latitud: '',
        longitud: '',
        camaron_blanco: '',
        camaron_cafe: '',
        camaron_rojo: '',
        camaroncillo: '',
        calamar: '',
        caracol: '',
        corvina: '',
        babosa: '',
        guabina: '',
        jaiba: '',
        langosta: '',
        pulpo: '',
        jurel: '',
        anguila: '',
        pargo: '',
        robalo: '',
        cienero: '',
        otras_especies: '',
        observaciones: '',
      }
    },
    gastoCreated (gasto) {
      this.gastoDialog = false
    },
    agregarProducto() {
      if (this.product === '') {
        this.$alert.error('Seleccione un producto')
        return false
      }
      if (this.cantidad === '') {
        this.$alert.error('Ingrese una cantidad')
        return false
      }
      //verificar si ya eite el producto
      const exist = this.productBuy.find(v => v.id === this.product.id)
      if (exist) {
        this.$alert.error('El producto ya fue agregado')
        return false
      }
      this.productBuy.push({
        id: this.product.id,
        name: this.product.name,
        stock: this.cantidad
      })
      this.product = ''
      this.cantidad = ''
    },
    imprimirPdfTotal() {
      this.loading = true
      this.$axios.get('exportDescargarPdfTotal/' + this.id, {
        responseType: 'blob'
      })
        .then(response => {
          // console.log(response.data)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'descarga.pdf')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
    },
    imprimirPdf(item) {
      this.loading = true
      this.$axios.get('exportDescargarPdf/' + item.id, {
        responseType: 'blob'
      })
        .then(response => {
          // console.log(response.data)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'descarga.pdf')
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
        this.loading = false
      })
    },
    anular(item) {
      this.$alert.confirm('¿Está seguro de anular este producto?').onOk(() => {
        this.loading = true
        this.$axios.put(`productAnular/${item.id}`)
          .then(response => {
            this.productViaje = this.productViaje.map(v => {
              if (v.id === item.id) {
                v.status = 'INACTIVO'
              }
              return v
            })
          })
          .catch(error => {
            this.$alert.error(error.response.data.message)
          }).finally(() => {
            this.loading = false
          })
      })
    },
    productAdd() {
      this.loading = true
      this.$axios.post('productAdd', {
        products: this.productBuy,
        descarga: this.descargar
      })
        .then(response => {
          // this.productViaje.unshift(response.data)
          this.dialogAgregarProducto = false
          this.$alert.success('Producto agregado')
          this.getViaje()
        })
        .catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
    },
    filterFn(val, update, abort) {
      if (val === '') {
        update(() => {
          this.products = this.productsAll
        })
        return
      }
      const needle = val.toLowerCase()
      update(() => {
        this.products = this.productsAll.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
      })
    },
    productsGet() {
      this.$axios.get('products')
        .then(response => {
          this.products = response.data
          this.productsAll = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    dialogAgregarProductoClick() {

      const fechaInicio = moment(this.viaje?.fechaInicio)
      const fechaActual = moment()
      const dias = fechaActual.diff(fechaInicio, 'days')

      this.dialogAgregarProducto = true
      this.product = ''
      this.cantidad = ''
      this.descargar = {
        viaje_id: this.id,
        descarga: this.productViaje.length + 1,
        dia: dias + 1,
        fecha: moment().format('YYYY-MM-DD')
      }
      this.productBuy = []
    },
    updateObservaciones(value) {
      this.$axios.put(`updateObservaciones/${this.id}`, { observaciones: value })
        .then(response => {
          // this.viaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getViaje() {
      this.loading = true
      this.$axios.get(`viajes/${this.id}`)
        .then(response => {
          this.viaje = response.data.viaje
          this.productViaje = response.data.productoViaje
          this.productViajeAll = response.data.productoViaje
          this.lances = response.data.lances
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    }
  }
};
</script>
