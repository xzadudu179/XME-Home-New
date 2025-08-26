import { createRouter, createWebHistory  } from 'vue-router'
import { type RouteRecordRaw } from 'vue-router'

const rootRoutePage404: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('../Pages/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },

]

const routes = [
    { path: '/', component: () => import('../Pages/Home.vue')},
    { path: '/about', component: () => import('../Pages/About.vue')},
    { path: '/contact', component: () => import('../Pages/Contact.vue')},
    { path: '/404', name: 'NotFound', component: () => import('../Pages/NotFound.vue') },
    ...rootRoutePage404
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router