import { createRouter, createWebHashHistory } from 'vue-router';
import store from "../store/index";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// GOOD
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.user;
  console.log(to.name,isAuthenticated);
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  if(to.name === 'Login' && isAuthenticated) next({ name: 'Home'})
  else next()
})

export default router
