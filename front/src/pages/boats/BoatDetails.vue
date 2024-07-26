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
<!--              <div class="col-12 col-md-4">-->
<!--                <div class="text-caption">Color Compania</div>-->
<!--                <div class="text-subtitle1">{{boat.company?.color}}</div>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-4">-->
<!--                <div class="text-caption">Color Bote</div>-->
<!--                <div class="text-subtitle1">{{boat.color}}</div>-->
<!--              </div>-->
              <div class="col-12">
                <q-separator />
              </div>
              <div class="col-12 col-md-6">
<!--                btn show archivo-->

                <div class="text-caption">DIF</div>
                <q-btn icon="visibility"  dense flat v-if="boat.dif" :href="$url + '../files/' + boat.dif" type="a" target="_blank" />
                <input type="file" @change="uploadBoat('dif', $event)" />
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">DIF fecha vencimiento</div>
                <q-input v-model="boat.dif_fecha" type="date" outlined dense @update:modelValue="updateBoat"/>
              </div>
              <div class="col-12 col-md-4">
                <div class="text-caption">Dias para su vencimiento</div>
                <div class="text-subtitle1">{{boat.dif_days}}</div>
              </div>
            </div>
          </q-card-section>
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">Color</div>-->
<!--            <div class="text-subtitle1">{{boat.color}}</div>-->
<!--          </q-card-section>-->
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">DIF</div>-->
<!--            <div class="text-subtitle1">{{boat.dif}}</div>-->
<!--          </q-card-section>-->
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">Autoridad</div>-->
<!--            <div class="text-subtitle1">{{boat.autoridad}}</div>-->
<!--          </q-card-section>-->
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">Licencia</div>-->
<!--            <div class="text-subtitle1">{{boat.licencia}}</div>-->
<!--          </q-card-section>-->
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">DIF Fecha</div>-->
<!--            <div class="text-subtitle1">{{boat.dif_fecha}}</div>-->
<!--          </q-card-section>-->
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">Autoridad Fecha</div>-->
<!--            <div class="text-subtitle1">{{boat.autoridad_fecha}}</div>-->
<!--          </q-card-section>-->
<!--          <q-card-section class="q-pa-xs">-->
<!--            <div class="text-caption">Licencia Fecha</div>-->
<!--            <div class="text-subtitle1">{{boat.licencia_fecha}}</div>-->
<!--          </q-card-section>-->
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
        <pre>{{boat}}</pre>

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
