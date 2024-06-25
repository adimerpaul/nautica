
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index/IndexPage.vue'), meta: { requiresAuth: true } },
      { path: 'users', component: () => import('pages/users/UsersIndex.vue'), meta: { requiresAuth: true } },
      { path: 'companies', component: () => import('pages/companies/CompaniesIndex.vue'), meta: { requiresAuth: true } },
      { path: 'boats', component: () => import('pages/boats/BoatsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'crews', component: () => import('pages/crews/CrewsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'clients', component: () => import('pages/clients/ClientsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'products', component: () => import('pages/products/ProductsIndex.vue'), meta: { requiresAuth: true } },
      { path: 'viajes', component: () => import('pages/viajes/ViajesIndex.vue'), meta: { requiresAuth: true } },
      { path: 'viajesShow/:id', component: () => import('pages/viajes/ViajesShow.vue'), meta: { requiresAuth: true } },
      { path: 'sales', component: () => import('pages/sales/SalesIndex.vue'), meta: { requiresAuth: true } },
      { path: 'debtors', component: () => import('pages/debtors/DebtorsIndex.vue'), meta: { requiresAuth: true } },
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
