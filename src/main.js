import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Weather from './views/Weather.vue'
import Favorites from './views/Favorites.vue'
import Missing from './views/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Weather,
    },
    {
      path: '/favorites',
      component: Favorites,
    },
    {
      path: '/:pathMatch(.*)',
      component: Missing,
    },
  ],
})

createApp(App).use(router).mount('#app')
