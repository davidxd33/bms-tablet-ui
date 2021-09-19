import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/dark-chat',
    name: 'dark-chat',
    component: () => import("../views/apps/dark-chat.vue")
  },
  {
    path: '/black-market',
    name: 'black-market',
    component: () => import("../views/apps/black-market.vue")
  },
  {
    path: '/job-center',
    name: 'job-center',
    component: () => import("../views/apps/job-center.vue")
  },
  {
    path: '/street-races',
    name: 'street-races',
    component: () => import("../views/apps/street-races.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
