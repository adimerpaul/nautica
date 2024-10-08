<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black" bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="text-primary text-bold">
            {{title}}
          </div>
        </q-toolbar-title>
        <div>
          <q-btn flat dense icon="o_notifications" aria-label="Notificaciones" v-if="botesPorVencer.length > 0">
            <q-badge color="primary" text-color="white" floating>{{botesPorVencer.length}}</q-badge>
            <q-menu>
              <q-list>
                <q-item clickable v-ripple v-for="bote in botesPorVencer" :key="bote.id" :to="'/boats/'+bote.id">
                  <q-item-section avatar>
                    <q-avatar icon="directions_boat" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{bote.name}}</q-item-label>
                    <q-item-label caption>
                      <div class="text-bold" v-if="bote.dif">Dif: {{bote.dif}}</div>
                      <div class="text-bold" v-if="bote.autoridad">Autoridad: {{bote.autoridad}}</div>
                      <div class="text-bold" v-if="bote.licencia">Licencia: {{bote.licencia}}</div>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
<!--              <pre>{{botesPorVencer}}</pre>-->
            </q-menu>
          </q-btn>
          <q-btn flat dense icon="o_account_circle" aria-label="Menu" :label="textCapitalize($store.user.name)" no-caps icon-right="arrow_drop_down">
            <q-menu>
              <q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="account_circle" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Perfil</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar icon="settings" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Configuración</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="logout">
                  <q-item-section avatar>
                    <q-avatar icon="logout" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Cerrar Sesión</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="220"
      class="bg-primary text-white"
    >
      <q-layout>
        <q-header>
          <q-list>
            <q-item-label class="q-pa-xs">
              <q-item dense>
                <q-item-section avatar>
                  <q-avatar class="bg-white" text-color="primary" size="45px">
                    <q-img src="/logo.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-white text-bold">
                    <q-chip dense label="Vendedor" color="orange" text-color="white" v-if="$store.user?.role === 'VENDEDOR'" icon="account_circle"/>
                    <q-chip dense label="Admin" color="indigo" text-color="white" v-if="$store.user?.role === 'ADMIN'" icon="account_circle"/>
                    <q-chip dense label="Super admin" color="purple" text-color="white" v-if="$store.user?.role === 'SUPERADMIN'" icon="account_circle"/>
                    <q-chip dense label="patron" color="green" text-color="white" v-if="$store.user?.role === 'PATRON'" icon="account_circle"/>
                  </q-item-label>
                  <q-item-label caption class="text-white">{{$store.user?.company?.name}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-item-label>
            <q-separator dark />
<!--            <template v-for="link in essentialLinks" :key="link.title">-->
<!--              <q-item clickable dense v-ripple  :to="link.to" exact :class="`text-white ${rutaActual==link.to?'bg-secondary':''}`">-->
<!--                <q-item-section avatar>-->
<!--                  <q-avatar  text-color="white" :icon="`${rutaActual==link.to?link.icon:'o_'+link.icon}`" :size="`${rutaActual==link.to?'45px':'38px'}`" />-->
<!--                </q-item-section>-->
<!--                <q-item-section>-->
<!--                  <q-item-label :class="`text-white ${rutaActual==link.to?'text-bold':''}`">{{ link.title }}</q-item-label>-->
<!--                </q-item-section>-->
<!--              </q-item>-->
<!--            </template>-->
              <q-item clickable dense v-ripple  to="/" exact :class="`text-white ${rutaActual== '/' ?'bg-secondary':''}`">
                <q-item-section avatar>
                  <q-avatar  text-color="white" :icon="`${rutaActual=='/' ?'home':'o_'+'home'}`" :size="`${rutaActual=='/' ?'45px':'38px'}`" />
                </q-item-section>
                <q-item-section>
                  <q-item-label :class="`text-white ${rutaActual=='/' ?'text-bold':''}`">Inicio</q-item-label>
                </q-item-section>
              </q-item>
            <q-item clickable dense v-ripple  to="/users" exact :class="`text-white ${rutaActual== '/users' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/users' ?'people':'o_'+'people'}`" :size="`${rutaActual=='/users' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/users' ?'text-bold':''}`">usuarios</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/clients" exact :class="`text-white ${rutaActual== '/clients' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/clients' ?'person':'o_'+'person'}`" :size="`${rutaActual=='/clients' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/clients' ?'text-bold':''}`">Clientes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/companies" exact :class="`text-white ${rutaActual== '/companies' ?'bg-secondary':''}`" v-if="$store.user?.id ==1">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/companies' ?'business':'o_'+'business'}`" :size="`${rutaActual=='/companies' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/companies' ?'text-bold':''}`">Empresas</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/boats" exact :class="`text-white ${rutaActual== '/boats' ?'bg-secondary':''}`" v-if="$store.user?.id ==1">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/boats' ?'directions_boat':'o_'+'directions_boat'}`" :size="`${rutaActual=='/boats' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/boats' ?'text-bold':''}`">Botes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/crews" exact :class="`text-white ${rutaActual== '/crews' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/crews' ?'group':'o_'+'group'}`" :size="`${rutaActual=='/crews' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/crews' ?'text-bold':''}`">Tripulantes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/products" exact :class="`text-white ${rutaActual== '/products' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/products' ?'shopping_cart':'o_'+'shopping_cart'}`" :size="`${rutaActual=='/products' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/products' ?'text-bold':''}`">Productos</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/viajes" exact :class="`text-white ${rutaActual== '/viajes' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/viajes' ?'flight_takeoff':'o_'+'flight_takeoff'}`" :size="`${rutaActual=='/viajes' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/viajes' ?'text-bold':''}`">Viajes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/viajesActivos" exact :class="`text-white ${rutaActual== '/viajesActivos' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/viajesActivos' ?'sailing':'o_'+'sailing'}`" :size="`${rutaActual=='/viajesActivos' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/viajesActivos' ?'text-bold':''}`">Viajes Activos</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/sales" exact :class="`text-white ${rutaActual== '/sales' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/sales' ?'shopping_cart':'o_'+'shopping_cart'}`" :size="`${rutaActual=='/sales' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/sales' ?'text-bold':''}`">Venta</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable dense v-ripple  to="/debtors" exact :class="`text-white ${rutaActual== '/debtors' ?'bg-secondary':''}`">
              <q-item-section avatar>
                <q-avatar  text-color="white" :icon="`${rutaActual=='/debtors' ?'credit_score':'o_'+'credit_score'}`" :size="`${rutaActual=='/debtors' ?'45px':'38px'}`" />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="`text-white ${rutaActual=='/debtors' ?'text-bold':''}`">Deudores</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-header>
        <q-footer>
          <q-item clickable dense v-ripple @click="logout">
            <q-item-section avatar>
              <q-avatar text-color="red" icon="logout" size="38px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-red text-bold">Cerrar Sesión</q-item-label>
            </q-item-section>
          </q-item>
        </q-footer>
      </q-layout>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        { title: 'Inicio', icon: 'home', to: '/', can: 'ver inicio' },
        { title: 'Usuarios', icon: 'people', to: '/users', can: 'ver usuarios' },
        { title: 'Empresas', icon: 'business', to: '/companies', can: 'ver empresas' },
        { title: 'Botes', icon: 'directions_boat', to: '/boats' , can: 'ver botes'},
        { title: 'Tripulantes', icon: 'group', to: '/crews' , can: 'ver tripulantes'},
        { title: 'Clientes', icon: 'person', to: '/clients' , can: 'ver clientes'},
        { title: 'Productos', icon: 'shopping_cart', to: '/products' , can: 'ver productos'},
        { title: 'Gastos', icon: 'point_of_sale', to: '/gastos' , can: 'ver ventas'},
        { title: 'Viajes Historico', icon: 'flight_takeoff', to: '/viajes' , can: 'ver viajes'},
        { title: 'Viajes Activos', icon: 'sailing', to: '/viajesActivos' , can: 'ver ventas'},
        { title: 'Venta', icon: 'shopping_cart', to: '/sales' , can: 'ver ventas'},
        { title: 'Deudores', icon: 'credit_score', to: '/debtors' , can: 'ver deudores'}
      ],
      permisos : JSON.parse(localStorage.getItem('permisos')),
      botesPorVencer: []
    };
  },
  mounted() {
    this.getBotesPorVencer()
  },
  methods: {
    diffDays (date) {
      if (!date) return ''
      const diffTime = new Date(date) - new Date()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    },
    getBotesPorVencer() {
      this.$axios.get('/botesPorVencer').then(res => {
        // this.botesPorVencer = res.data
//        'dif_fecha',
//        'autoridad_fecha',
//        'licencia_fecha',
        res.data.forEach(bote => {
          if (bote.dif_fecha ) {
            bote.dif = this.diffDays(bote.dif_fecha)
          }
          if (bote.autoridad_fecha) {
            bote.autoridad = this.diffDays(bote.autoridad_fecha)
          }
          if (bote.licencia_fecha) {
            bote.licencia = this.diffDays(bote.licencia_fecha)
          }
        })
        this.botesPorVencer = res.data
      })
    },
    textCapitalize(text) {
      if (!text) return '';
      const lower = text.toLowerCase();
      return text.charAt(0).toUpperCase() + lower.slice(1);
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    logout() {
      this.$alert.dialog('¿Está seguro que desea cerrar sesión?').onOk(() => {
        this.$axios.post('/logout').then(() => {
          this.$store.isLogeed = false;
          this.$store.user = {};
          localStorage.removeItem('tokenPrestamos');
          this.$router.push('/login');
        })
      })
    },
  },
  computed: {
    rutaActual() {
      return this.$route.path
    },
    title() {
      const route = this.$route.path
      if (route === '/') return 'Inicio'
      if (route === '/users') return 'Usuarios'
      else if (route === '/clients') return 'Clientes'
      else if (route === '/companies') return 'Empresas'
      else if (route === '/boats') return 'Botes'
      else if (route === '/crews') return 'Tripulantes'
      else if (route === '/products') return 'Productos'
      else if (route === '/viajes') return 'Viajes'
      else
      return 'Inicio'
    },
  },
};
</script>
