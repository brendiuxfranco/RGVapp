import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../login/Login'
import RegisterForm from '../components/RegisterForm'
import Calendars from '../views/Calendar'
import ContactUs from '../views/ContactUs'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegisterForm
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendars
  },
  {
    path: '/contactus',
    name: 'Contact Us',
    component: ContactUs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router