import { createRouter, createWebHistory } from 'vue-router'
//import store from '../store';
import LoginView from '@/views/LoginView.vue'; 

const routes = [
  {
    path: '/',
    name: 'Padre',
    children: [
      {
        path: '/',
        name: 'Madre',
        component: LoginView,
        children: [
          
          {
            path: '/login', 
            name: 'Login', 
            component: LoginView 
          },
        ]
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
