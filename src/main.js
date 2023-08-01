import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/AppHome.vue'
import Users from './pages/AppUsers.vue'

// Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/users/:teamId', component: Users }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
