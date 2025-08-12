import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../Pages/Home.vue')},
    { path: '/about', component: () => import('../Pages/About.vue')},
    { path: '/404', name: 'NotFound', component: () => import('../Pages/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router