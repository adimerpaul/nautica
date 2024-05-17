<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-table :rows="students" :columns="columns" title="Clientes" :rows-per-page-options="[0]" row-key="id" dense :filter="filter" :loading="loading">
      <template v-slot:body-cell-option="props">
          <q-td auto-width>
            <q-btn flat dense icon="edit" @click="studentEdit(props.row)" >
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn flat dense icon="delete" @click="studentDelete(props.row)" >
              <q-tooltip>Eliminar</q-tooltip>
            </q-btn>
            <q-btn flat dense icon="history" @click="studentHistory(props.row)" >
              <q-tooltip>Historial</q-tooltip>
            </q-btn>
          </q-td>
      </template>
      <template v-slot:top-right>
        <q-btn outline dense icon="add_circle" @click="studentAdd" label="Agregar" no-caps :loading="loading">
          <q-tooltip>Agregar</q-tooltip>
        </q-btn>
        <q-input v-model="filter" dense class="q-ml-md" debounce="300" placeholder="Buscar" outlined clearable >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
<!--    <pre>{{students}}</pre>-->
    <q-dialog v-model="studentDialog" persistent>
      <q-card style="width: 750px;max-width: 90vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ student.id ? 'Editar' : 'Agregar' }} Estudiante</div>
          <q-space />
          <q-btn flat dense icon="close" @click="studentDialog = false" />
        </q-card-section>
        <q-form @submit="studentSave">
        <q-card-section>
          <div class="row">
            <div class="col-12 col-md-4">
              <q-input v-model="student.rut" label="Rut" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-8">
              <q-input v-model="student.name" label="Nombre Completo" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.birthdate" label="Fecha de Nacimiento" type="date" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.year_PIE" label="Año ingreso PIE" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.course" label="Curso" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-3">
              <q-input v-model="student.year" label="Año" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12">
              <q-input v-model="student.address" label="Dirección" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-6">
              <q-input v-model="student.phone" label="Celular" outlined dense :rules="[val => !!val || 'Campo requerido']" />
            </div>
            <div class="col-12 col-md-6">
<!--              <q-select v-model="student.sex" label="Sexo" outlined dense-->
<!--                        :options="[{label: 'Masculino', value: 'M'}, {label: 'Femenino', value: 'F'}]"-->
<!--                        :rules="[val => !!val || 'Campo requerido']"-->
<!--                        emit-value map-options-->
<!--              />-->
<!--              sexo en radio button-->
              <q-radio v-model="student.sex" val="M" label="Masculino" />
              <q-radio v-model="student.sex" val="F" label="Femenino" />
            </div>
<!--            <pre>{{student}}</pre>-->
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" v-close-popup :loading="loading" />
          <q-btn color="primary" label="Guardar" type="submit" :loading="loading" />
        </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: 'StudentsIndex.vue',
  data () {
    return {
      columns: [
        { name: 'option', label: 'Opciones', align: 'left', field: row => row.option },
        { name: 'id', label: 'ID', align: 'left', field: row => row.id },
        { name: 'rut', label: 'Rut', align: 'left', field: row => row.rut },
        { name: 'name', label: 'Nombre', align: 'left', field: row => row.name },
        { name: 'birthdate', label: 'Fecha de Nacimiento', align: 'left', field: row => row.birthdate },
        { name: 'year_PIE', label: 'Año PIE', align: 'left', field: row => row.year_PIE },
        { name: 'course', label: 'Curso', align: 'left', field: row => row.course },
        { name: 'year', label: 'Año', align: 'left', field: row => row.year },
        { name: 'address', label: 'Dirección', align: 'left', field: row => row.address },
        { name: 'phone', label: 'Celular', align: 'left', field: row => row.phone },
      ],
      loading: false,
      students: [],
      student: {},
      studentDialog: false,
      clienDialogHistory: false,
      filter: '',
      passwordShow: false
    }
  },
  mounted() {
    this.studentGet()
  },
  methods: {
    studentSave () {
      this.loading = true
      if (this.student.id) {
        this.$axios.put(`students/${this.student.id}`, this.student).then(response => {
          this.studentDialog = false
          const index = this.students.findIndex(student => student.id === this.student.id)
          this.students.splice(index, 1, response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      } else {
        this.$axios.post('students', this.student).then(response => {
          this.studentDialog = false
          this.students.unshift(response.data)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      }
    },
    studentChangePassword (student) {
      this.$alert.promptPassword('Ingrese la nueva contraseña').onOk(password => {
        this.loading = true
        this.$axios.put(`passwordUpdate/${student.id}`, {password}).then(response => {
          this.$alert.success('Contraseña cambiada con éxito')
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    studentHistory (student) {
      this.$router.push('/students/history/' + student.id)
    },
    studentDelete (student) {
      this.$alert.confirm('¿Está seguro de eliminar este studente?').onOk(() => {
        this.loading = true
        this.$axios.delete(`students/${student.id}`).then(response => {
          const index = this.students.findIndex(student => student.id === student.id)
          this.students.splice(index, 1)
        }).catch(error => {
          this.$alert.error(error.response.data.message)
        }).finally(() => {
          this.loading = false
        })
      })
    },
    studentEdit (student) {
      this.studentDialog = true
      this.student = {...student}
    },
    studentAdd () {
      this.studentDialog = true
      this.student = {
        name: '',
        ci: '',
        birthdate: '',
        year_PIE: '',
        cource: '',
        year: '',
        address: '',
        phone: '',
        sex: 'M'
      }
    },
    studentGet () {
      this.loading = true
      this.$axios.get('students').then(response => {
          this.students = response.data
      }).catch(error => {
          this.$alert.error(error.response.data.message)
      }).finally(() => {
          this.loading = false
      })
    }
  },
};
</script>
