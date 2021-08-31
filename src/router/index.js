import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import Login from "../views/Login.vue";
import Enter from '../views/Enter.vue';
import Register from "../views/Register.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Enter',
    name: 'Enter',
    component: Enter
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
