
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index/IndexPage.vue'), meta: { requiresAuth: true } },
      { path: 'users', component: () => import('pages/users/UsersIndex.vue'), meta: { requiresAuth: true } },
      { path: 'companies', component: () => import('pages/companies/CompaniesIndex.vue'), meta: { requiresAuth: true } },
      { path: 'boats', component: () => import('pages/boats/BoatsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'boatdetails/:id', component: () => import('pages/boats/BoatDetails.vue'), meta: { requiresAuth: true } },
      { path: 'crews', component: () => import('pages/crews/CrewsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'clients', component: () => import('pages/clients/ClientsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'products', component: () => import('pages/products/ProductsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'viajes', component: () => import('pages/viajes/ViajesIndex.vue'), meta: { requiresAuth: true } },
      { path: 'viajesActivos', component: () => import('pages/viajesActivos/ViajesActivosIndex.vue'), meta: { requiresAuth: true } },
      { path: 'viajesShow/:id', component: () => import('pages/viajes/ViajesShow.vue'), meta: { requiresAuth: true } },
      { path: 'viajesLance/:id', component: () => import('pages/viajes/ViajesLance.vue'), meta: { requiresAuth: true } },
      { path: 'sales', component: () => import('pages/sales/SalesIndex.vue'), meta: { requiresAuth: true } },
      { path: 'debtors', component: () => import('pages/debtors/DebtorsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'gastos', component: () => import('pages/gastos/GastosIndex.vue'), meta: { requiresAuth: true } },
      { path: 'new', component: () => import('pages/New.vue'), meta: { requiresAuth: true } },
      { path: 'categories', component: () => import('pages/categories/Categories.vue'), meta: { requiresAuth: true } },
      { path: 'viajesConciliacion/:id', component: () => import('pages/viajesActivos/ViajesConciliacion.vue'), meta: { requiresAuth: true } },
      // reportes
      { path: 'reportes', component: () => import('pages/reportes/ReportesIndex.vue'), meta: { requiresAuth: true } },
    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
