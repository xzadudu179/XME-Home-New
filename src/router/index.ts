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
    { path: '/', component: () => import('../Pages/Home.vue'), meta: {title: '首页 - xzadudu179'}},
    { path: '/about', component: () => import('../Pages/About.vue'), meta: {title: '关于 - xzadudu179'}},
    { path: '/message', component: () => import('../Pages/Message.vue'), meta: {title: '留言 - xzadudu179'}},
    // { path: '/links', component: () => import('../Pages/Links.vue'), meta: {title: '友情链接 - xzadudu179'}},
    { path: '/404', name: 'NotFound', component: () => import('../Pages/NotFound.vue'), meta: {title: '这里什么也没有... - xzadudu179'} },
    ...rootRoutePage404
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router