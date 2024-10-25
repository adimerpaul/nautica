<template>
  <q-page class="q-pa-xs bg-grey-3">
    <div class="row">
      <div class="col-12">
        <q-card>
          <q-card-section class="q-pa-md bg-primary text-white">
            <div class="text-caption">Nombre</div>
            <div class="text-subtitle1">{{boat.name}}</div>
          </q-card-section>
          <q-card-section class="q-pa-xs">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="text-caption">Empresa</div>
                <div class="text-subtitle1">{{boat.company?.name}}</div>
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">Dirección</div>
                <div class="text-subtitle1">{{boat.company?.address}}</div>
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">Teléfono  Compania</div>
                <div class="text-subtitle1">{{boat.company?.phone}}</div>
              </div>
              <div class="col-12 text-right q-pa-xs">
<!--                <q-separator />-->
                <q-btn icon="add_circle" label="Agregar Documento" color="green" @click="createClick" no-caps />
              </div>
              <div class="col-12">
                <q-markup-table dense>
                  <thead>
                  <tr class="bg-primary text-white">
                    <th>Opciones</th>
                    <th>Documento</th>
                    <th>Archivo</th>
                    <th>Año</th>
                    <th>Fecha de vencimiento</th>
                    <th>Dias para vecimiento</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="file in boat.files" :key="file.id">
                    <td style="width: 100px">
                      <q-btn icon="delete" dense flat color="negative" @click="deleteFile(file.id)" />
                      <q-btn icon="edit" dense flat color="primary" @click="editFile(file)" />
                    </td>
                    <td>{{file.documento}}</td>
                    <td>
                      <q-btn icon="visibility"  dense flat :href="$url + '../files/' + file.file" type="a" target="_blank" />
                      <span>
                        {{file.name}}
                      </span>
                    </td>
                    <td>{{file.anio}}</td>
                    <td>{{file.fecha}}</td>
                    <td>
                      <span v-if="diffDays(file.fecha) > 0" :class="{'text-positive': diffDays(file.fecha) > 60, 'text-warning': diffDays(file.fecha) <= 60 && diffDays(file.fecha) > 30, 'text-negative': diffDays(file.fecha) <= 30}">
                        {{diffDays(file.fecha)}}
                      </span>
                      <span v-else class="text-negative">
                        Vencido
                      </span>
                    </td>
                  </tr>
                  </tbody>
                </q-markup-table>
<!--                <pre>{{boat.files}}</pre>-->

              </div>
<!--              <div class="col-12 col-md-6">-->
<!--                <div class="text-caption">DIF</div>-->
<!--                <q-btn icon="visibility"  dense flat v-if="boat.dif" :href="$url + '../files/' + boat.dif" type="a" target="_blank" />-->
<!--                <input type="file" @change="uploadBoat('dif', $event)" />-->
<!--              </div>-->
<!--              <div class="col-12 col-md-4">-->
<!--                <div class="text-caption">DIF fecha vencimiento</div>-->
<!--                <q-input v-model="boat.dif_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-2">-->
<!--                <div class="text-caption">Dias para su vencimiento</div>-->
<!--                <div class="text-h6 text-right q-mr-md text-bold q-mt-xs">-->
<!--&lt;!&ndash;              //color verde fi falta menos de 60 dias amarilllo si altan  menos de 30 dias y rojo  faltan 5 dias&ndash;&gt;-->
<!--                  <span v-if="diffDays(boat.dif_fecha) > 0" :class="{'text-positive': diffDays(boat.dif_fecha) > 60, 'text-warning': diffDays(boat.dif_fecha) <= 60 && diffDays(boat.dif_fecha) > 30, 'text-negative': diffDays(boat.dif_fecha) <= 30}">-->
<!--                    {{diffDays(boat.dif_fecha)}}-->
<!--                  </span>-->
<!--                  <span v-else class="text-negative">-->
<!--                    Vencido-->
<!--                  </span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-12">-->
<!--                <q-separator />-->
<!--              </div>-->
<!--              <div class="col-12 col-md-6">-->
<!--                <div class="text-caption">Autoridad</div>-->
<!--                <q-btn icon="visibility"  dense flat v-if="boat.autoridad" :href="$url + '../files/' + boat.autoridad" type="a" target="_blank" />-->
<!--                <input type="file" @change="uploadBoat('autoridad', $event)" />-->
<!--              </div>-->
<!--              <div class="col-12 col-md-4">-->
<!--                <div class="text-caption">Autoridad fecha vencimiento</div>-->
<!--                <q-input v-model="boat.autoridad_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-2">-->
<!--                <div class="text-caption">Dias para su vencimiento</div>-->
<!--                <div class="text-h6 text-right q-mr-md text-bold q-mt-xs">-->
<!--                  <span v-if="diffDays(boat.autoridad_fecha) > 0" :class="{'text-positive': diffDays(boat.autoridad_fecha) > 60, 'text-warning': diffDays(boat.autoridad_fecha) <= 60 && diffDays(boat.autoridad_fecha) > 30, 'text-negative': diffDays(boat.autoridad_fecha) <= 30}">-->
<!--                    {{diffDays(boat.autoridad_fecha)}}-->
<!--                  </span>-->
<!--                  <span v-else class="text-negative">-->
<!--                    Vencido-->
<!--                  </span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-12">-->
<!--                <q-separator />-->
<!--              </div>-->
<!--              <div class="col-12 col-md-6">-->
<!--                <div class="text-caption">Licencia</div>-->
<!--                <q-btn icon="visibility"  dense flat v-if="boat.licencia" :href="$url + '../files/' + boat.licencia" type="a" target="_blank" />-->
<!--                <input type="file" @change="uploadBoat('licencia', $event)" />-->
<!--              </div>-->
<!--              <div class="col-12 col-md-4">-->
<!--                <div class="text-caption">Licencia fecha vencimiento</div>-->
<!--                <q-input v-model="boat.licencia_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-2">-->
<!--                <div class="text-caption">Dias para su vencimiento</div>-->
<!--                <div class="text-h6 text-right q-mr-md text-bold q-mt-xs">-->
<!--                  <span v-if="diffDays(boat.licencia_fecha) > 0" :class="{'text-positive': diffDays(boat.licencia_fecha) > 60, 'text-warning': diffDays(boat.licencia_fecha) <= 60 && diffDays(boat.licencia_fecha) > 30, 'text-negative': diffDays(boat.licencia_fecha) <= 30}">-->
<!--                    {{diffDays(boat.licencia_fecha)}}-->
<!--                  </span>-->
<!--                  <span v-else class="text-negative">-->
<!--                    Vencido-->
<!--                  </span>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </q-card-section>
        </q-card>
<!--        <pre>{{boat}}</pre>-->
<!--        {-->
<!--        "id": 3,-->
<!--        "name": "CESAR JUNIOR",-->
<!--        "company_id": 17,-->
<!--        "color": "#9C27B0",-->
<!--        "dif": null,-->
<!--        "autoridad": null,-->
<!--        "licencia": null,-->
<!--        "dif_fecha": null,-->
<!--        "autoridad_fecha": null,-->
<!--        "licencia_fecha": null,-->
<!--        "company": {-->
<!--        "id": 17,-->
<!--        "name": "Mariscos Tevez",-->
<!--        "address": "Direccion Sud",-->
<!--        "phone": "5261545",-->
<!--        "color": "#9C27B0"-->
<!--        }-->
<!--        }-->
<!--        <pre>{{boat}}</pre>-->

      </div>
    </div>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="bg-primary">
          <div class="text-white">{{tipo}} Documento</div>
        </q-card-section>
        <q-card-section>
        <q-form @submit="storeFile">
<!--          <q-input v-model="file.documento" label="Documento" outlined dense />-->
<!--          DIF, Autoridad, Licencia-->
          <q-select v-model="file.documento" label="Documento" outlined dense :options="['DIF', 'Autoridad', 'Licencia']" :rules="[val => !!val || 'Seleccione un documento']" />
          <q-input v-model="file.anio" label="Año" outlined dense :rules="[val => !!val || 'Año es requerido']" />
          <q-input v-model="file.fecha" label="Fecha de vencimiento" type="date" outlined dense :rules="[val => !!val || 'Fecha de vencimiento es requerido']" />
<!--          <q-input type="file" outlined dense @change="fileUpload" />-->
          <input type="file" @change="onFileChange" v-if="tipo === 'Crear'"/>
<!--          <pre>{{file}}</pre>-->
        <q-card-actions align="right">
          <q-btn label="Cancelar" color="negative" @click="dialog = false" :loading="loading" />
          <q-btn label="Guardar" color="primary" type="submit" :loading="loading" />
        </q-card-actions>
        </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import moment from "moment";

export default {
  name: 'BoatDetails',
  data () {
    return {
      boat: {},
      file: {},
      dialog: false,
      imageUrl: null,
      loading: false,
      tipo: ''
    }
  },
  async created () {
    this.boatGet();
    // this.boat = await this.$axios.get(`/boats/${fthis.$route.params.id}`).then(res => res.data)
  },
  methods: {
    editFile (file) {
      this.file = file
      this.tipo = 'Editar'
      this.dialog = true
    },
    deleteFile (id) {
      this.$alert.confirm('¿Está seguro de eliminar el archivo?').onOk(() => {
        this.deleteFileConfirm(id)
      })
      // this.$axios.delete(`boatsFile/${id}`).then(response => {
      //   this.boat = response.data
      // })
    },
    deleteFileConfirm (id) {
      this.$axios.delete(`boatsFile/${id}`).then(response => {
        this.boat = response.data
      })
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageUrl = file;
    },
    boatGet () {
      this.$axios.get(`boats/${this.$route.params.id}`).then(response => {
        this.boat = response.data
      })
    },
    storeFile(){
      if ( this.tipo === 'Crear') {
        this.storeFileCreate()
      } else {
        this.storeFileUpdate()
      }
      // const formData = new FormData()
      // formData.append('documento', this.file.documento)
      // formData.append('anio', this.file.anio)
      // formData.append('fecha', this.file.fecha)
      // formData.append('archivo', this.imageUrl)
      // this.loading = true
      // this.$axios.post(`boatsFile2/${this.boat.id}`, formData).then(response => {
      //   this.boat = response.data
      //   this.dialog = false
      //   this.boatGet()
      // }).finally(() => {
      //   this.loading = false
      // })
    },
    storeFileCreate () {
      if ( !this.imageUrl) {
        this.$alert.error('Archivo es requerido')
        return false
      }
      const formData = new FormData()
      formData.append('documento', this.file.documento)
      formData.append('anio', this.file.anio)
      formData.append('fecha', this.file.fecha)
      formData.append('archivo', this.imageUrl)
      this.loading = true
      this.$axios.post(`boatsFile2/${this.boat.id}`, formData).then(response => {
        this.boat = response.data
        this.dialog = false
        this.boatGet()
      }).finally(() => {
        this.loading = false
      })
    },
    storeFileUpdate () {
      // const formData = new FormData()
      // formData.append('documento', this.file.documento)
      // formData.append('anio', this.file.anio)
      // formData.append('fecha', this.file.fecha)
      // formData.append('archivo', this.imageUrl)
      this.loading = true
      this.$axios.put(`boatsFile/${this.file.id}`, {
        documento: this.file.documento,
        anio: this.file.anio,
        fecha: this.file.fecha
      }).then(response => {
        this.boat = response.data
        this.dialog = false
        this.boatGet()
      }).finally(() => {
        this.loading = false
      })
    },
    fileUpload (event) {
      if (event.target && event.target.files && event.target.files.length > 0) {
        this.file.archivo = event.target.files[0]
      } else {
        console.error("No se pudo cargar el archivo correctamente.");
      }
    },
    createClick() {
      this.dialog = true
      this.imageUrl = null
      this.tipo = 'Crear'
      this.file = {
        documento:'',
        archivo:null,
        anio: moment().format('YYYY'),
        fecha: moment().format('YYYY-MM-DD')
      }
    },
    diffDays (date) {
      if (!date) return ''
      const diffTime = new Date(date) - new Date()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    },
    updateBoat () {
      this.$axios.put(`boats/${this.boat.id}`, this.boat).then(response => {
        this.boat = response.data
      })
    },
    uploadBoat (field, event) {
      this.file = event.target.files[0]
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('field', field)
      this.$axios.post(`boatsFile/${this.boat.id}`, formData).then(response => {
        this.boat = response.data
      })
    }
  }
}
</script>
