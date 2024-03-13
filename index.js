import { createRouter, createWebHashHistory } from 'vue-router'
import Calculator from './src/components/Calculator.vue'

const routes = [
   {
      path: '/',
      name: 'calc',
      component: Calculator
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router