// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import LatestMovies from './components/LatestMovies';
import DiscoverParticle from './components/DiscoverParticle';
import VueRouter from 'vue-router'
import VueParticles from 'vue-particles'


Vue.use(VueParticles)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: DiscoverParticle},
    { path: '/top-rated-movies', component: TopRatedMovies },
    { path: '/latest-movies', component: LatestMovies },
    { path: '/popular-movies', component: PopularMovies }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
