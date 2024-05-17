<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-3">
            <label class="text-bold">Rut</label>
            <div>{{student.rut}}</div>
          </div>
          <div class="col-12 col-md-9">
            <label class="text-bold">Nombre Completo</label>
            <div>{{student.name}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Fecha de Nacimiento</label>
            <div>{{student.birthdate}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Año ingreso PIE</label>
            <div>{{student.year_PIE}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Curso</label>
            <div>{{student.course}}</div>
          </div>
          <div class="col-6 col-md-3">
            <label class="text-bold">Año</label>
            <div>{{student.year}}</div>
          </div>
          <div class="col-12">
            <label class="text-bold">Dirección</label>
            <div>{{student.address}}</div>
          </div>
          <div class="col-6 col-md-6">
            <label class="text-bold">Celular</label>
            <div>{{student.phone}}</div>
          </div>
          <div class="col-6 col-md-6">
            <label class="text-bold">Sexo</label>
            <div>{{student.sex === 'M' ? 'Masculino' : 'Femenino'}}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="row">
      <div class="col-12 col-md-8">
        <q-card>
          <q-card-section>
            <div class="row items-center">
              <div class="text-h6">Historial</div>
              <q-space />
              <q-btn icon="add_circle_outline" @click="addHistory" label="Agregar" no-caps color="green" dense size="10px" />
            </div>
            <q-markup-table dense wrap-cells>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Usuario</th>
                </tr>
              </thead>
            </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Diagnósticos</div>
            <div class="text-center border-dashed cursor-pointer" @click="uploadFile"
                 @dragenter.prevent
                 @dragover.prevent
                 @dragleave.prevent
                 @drop.prevent="handleDrop"
            >
              <q-icon name="cloud_upload" size="70px" />
              <div>Acá suba sus archivos</div>
            </div>
            <input type="file" class="hidden" ref="fileInput" @change="fileUpload" accept=".pdf">
            <div class="q-mt-md">
              <q-card>
                <q-card-section class="q-pa-none">
                  <q-item v-if="textProcess!==''">
                    <q-item-section>
                      <q-item-label>{{textProcess}}</q-item-label>
                      <q-linear-progress :value="process" :color="process === 100 ? 'green' : 'primary'">
                      </q-linear-progress>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat icon="picture_as_pdf" />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
              <q-card v-for="diagnosis in student.diagnoses" :key="diagnosis.id" flat bordered class="q-ma-sm">
                <q-card-section class="q-pa-none">
                  <q-item>
                    <q-item-section>
                      <q-item-label>{{$filters.formatdMY(diagnosis.created_at)}}</q-item-label>
                      <q-item-label>{{diagnosis.name}}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn flat icon="delete" @click="deleteDiagnosis(diagnosis.id)" color="red" :loading="loading" />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <pre>{{student}}</pre>

  </q-page>
</template>
<script>
export default {
  name: 'StudentsHistory',
  data() {
    return {
      student_id: this.$route.params.id,
      student: {},
      process: 0,
      textProcess: '',
      loading: false
    }
  },
  mounted() {
    this.student_id = this.$route.params.id
    this.studentGet()
  },
  methods: {
    addHistory() {
      this.$q.dialog({
        component: () => import('pages/IndexPage.vue'),
        parent: this,
        on: {
          submit: data => {
            console.log(data)
          }
        }
      })
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      // Procesa los archivos que se soltaron
      this.processFiles(files);
    },
    processFiles(files) {
      // Aquí puedes procesar los archivos, por ejemplo, llamar a tu método fileUpload
      this.fileUpload(files);
    },
    uploadFile() {
      // Lógica para abrir el selector de archivos cuando se hace clic en la zona de carga
      this.$refs.fileInput.click();
    },
    fileUpload() {
      const formData = new FormData();
      formData.append('file', this.$refs.fileInput.files[0]);
      formData.append('student_id', this.student_id);

      const config = {
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          this.textProcess = percentCompleted + '% completado';
          this.process = percentCompleted/100;
        }
      };

      this.$axios.post(`students/${this.student_id}/diagnoses`, formData, config)
        .then(response => {
          this.student.diagnoses.unshift(response.data);
        })
        .catch(error => {
          this.$alert.error(error.response.data.message);
        })
        .finally(() => {
          this.$refs.fileInput.value = '';
          this.textProcess = '';
        });
    },
    studentGet() {
      this.$axios.get(`students/${this.student_id}`).then(response => {
        this.student = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      })
    },
    deleteDiagnosis(id) {
      this.$alert.confirm('¿Está seguro de eliminar este diagnóstico?').onOk(() => {
        this.loading = true
        this.$axios.delete(`diagnoses/${id}`).then(response => {
          const index = this.student.diagnoses.findIndex(diagnosis => diagnosis.id === id)
          this.student.diagnoses.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>
<style>
.border {
  border: 1px dotted #000;
}
.border-dashed {
  border: 1px dashed #000;
}
</style>
