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
          <label class="text-bold">Fecha Inicio</label>
          <div>{{$filters.formatdMY(viaje.fechaInicio)}}</div>
        </div>
        <div class="col-6 col-md-2 q-pa-xs">
          <label class="text-bold">Fecha Fin</label>
          <div>{{$filters.formatdMY(viaje.fechaFin)}}</div>
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
        <div class="col-12">
          <label class="text-bold">Observaciones</label>
          <q-editor v-model="viaje.observaciones" @update:model-value="debouncedUpdateObservaciones" />
        </div>
      </div>
    </q-card>
    <pre>{{viaje}}</pre>
  </q-page>
</template>

<script>
import { debounce } from 'lodash';
import moment from "moment";

export default {
  name: 'ViajesShow',
  data () {
    return {
      id: '',
      viaje: {
        observaciones: ''
      },
      debouncedUpdateObservaciones: null
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getViaje()
    this.debouncedUpdateObservaciones = debounce(this.updateObservaciones, 2000);
  },
  methods: {
    updateObservaciones(value) {
      this.$axios.put(`updateObservaciones/${this.id}`, { observaciones: value })
        .then(response => {
          this.viaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getViaje() {
      this.$axios.get(`viajes/${this.id}`)
        .then(response => {
          this.viaje = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>
