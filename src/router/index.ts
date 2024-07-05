import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/folder/:id',
    component: () => import ('@/views/FolderPage.vue')
  },

  {
    path: '/folder/Contacto',
    name: 'Contacto',
    component: () => import ('@/views/FormPage.vue'),
  },

  {
    path: '/folder/Git',
    name: 'Git',
    component: () => import ('@/views/FolderPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
