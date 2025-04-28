import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import AboutUs from '@/pages/AboutUs.vue'
import ServicesPage from '@/pages/ServicesPage.vue'
import OurClients from '@/pages/OurClients.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/clients',
      name: 'clients',
      component: OurClients,
    },
  ],
})

export default router
