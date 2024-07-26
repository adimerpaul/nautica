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
              <div class="col-12">
                <q-separator />
              </div>
              <div class="col-12 col-md-6">
                <div class="text-caption">DIF</div>
                <q-btn icon="visibility"  dense flat v-if="boat.dif" :href="$url + '../files/' + boat.dif" type="a" target="_blank" />
                <input type="file" @change="uploadBoat('dif', $event)" />
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">DIF fecha vencimiento</div>
                <q-input v-model="boat.dif_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>
              </div>
              <div class="col-12 col-md-2">
                <div class="text-caption">Dias para su vencimiento</div>
                <div class="text-h6 text-right q-mr-md text-bold q-mt-xs">
<!--              //color verde fi falta menos de 20 dias amarilllo si altan  menos de 10 dias y rojo  faltan 5 dias-->
                  <span v-if="diffDays(boat.dif_fecha) > 0" :class="{'text-positive': diffDays(boat.dif_fecha) > 20, 'text-warning': diffDays(boat.dif_fecha) <= 20 && diffDays(boat.dif_fecha) > 10, 'text-negative': diffDays(boat.dif_fecha) <= 10}">
                    {{diffDays(boat.dif_fecha)}}
                  </span>
                  <span v-else class="text-negative">
                    Vencido
                  </span>
                </div>
              </div>
              <div class="col-12">
                <q-separator />
              </div>
              <div class="col-12 col-md-6">
                <div class="text-caption">Autoridad</div>
                <q-btn icon="visibility"  dense flat v-if="boat.autoridad" :href="$url + '../files/' + boat.autoridad" type="a" target="_blank" />
                <input type="file" @change="uploadBoat('autoridad', $event)" />
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">Autoridad fecha vencimiento</div>
                <q-input v-model="boat.autoridad_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>
              </div>
              <div class="col-12 col-md-2">
                <div class="text-caption">Dias para su vencimiento</div>
                <div class="text-h6 text-right q-mr-md text-bold q-mt-xs">
                  <span v-if="diffDays(boat.autoridad_fecha) > 0" :class="{'text-positive': diffDays(boat.autoridad_fecha) > 20, 'text-warning': diffDays(boat.autoridad_fecha) <= 20 && diffDays(boat.autoridad_fecha) > 10, 'text-negative': diffDays(boat.autoridad_fecha) <= 10}">
                    {{diffDays(boat.autoridad_fecha)}}
                  </span>
                  <span v-else class="text-negative">
                    Vencido
                  </span>
                </div>
              </div>
              <div class="col-12">
                <q-separator />
              </div>
              <div class="col-12 col-md-6">
                <div class="text-caption">Licencia</div>
                <q-btn icon="visibility"  dense flat v-if="boat.licencia" :href="$url + '../files/' + boat.licencia" type="a" target="_blank" />
                <input type="file" @change="uploadBoat('licencia', $event)" />
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">Licencia fecha vencimiento</div>
                <q-input v-model="boat.licencia_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>
              </div>
              <div class="col-12 col-md-2">
                <div class="text-caption">Dias para su vencimiento</div>
                <div class="text-h6 text-right q-mr-md text-bold q-mt-xs">
                  <span v-if="diffDays(boat.licencia_fecha) > 0" :class="{'text-positive': diffDays(boat.licencia_fecha) > 20, 'text-warning': diffDays(boat.licencia_fecha) <= 20 && diffDays(boat.licencia_fecha) > 10, 'text-negative': diffDays(boat.licencia_fecha) <= 10}">
                    {{diffDays(boat.licencia_fecha)}}
                  </span>
                  <span v-else class="text-negative">
                    Vencido
                  </span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
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
  </q-page>
</template>
<script>
export default {
  name: 'BoatDetails',
  data () {
    return {
      boat: {},
      file: null
    }
  },
  async created () {
    this.boat = await this.$axios.get(`/boats/${this.$route.params.id}`).then(res => res.data)
  },
  methods: {
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
