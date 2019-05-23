import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/index.vue')), 'home');
const introduce = r => require.ensure([], () => r(require('../page/introduce/index.vue')), 'introduce');
const cooperation = r => require.ensure([], () => r(require('../page/cooperation/index.vue')), 'cooperation');
const download = r => require.ensure([], () => r(require('../page/download/index.vue')), 'download');
const join = r => require.ensure([], () => r(require('../page/join/index.vue')), 'join');
const jobDetails = r => require.ensure([], () => r(require('../page/join/jobDetails/index.vue')), 'jobDetails');
const service = r => require.ensure([], () => r(require('../page/service/index.vue')), 'service');


Vue.use(Router)

export default new Router({

  mode:'history',
  routes: [{
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect:'/home',
      },
      {
        path: '/home',
        component: home,
      },
      {
        path: '/introduce',
        component: introduce,
      },
      {
        path: '/cooperation',
        component: cooperation,
      },
      {
        path: '/download',
        component: download,
      },
      {
        path: '/join',
        component: join,
      },
      {
        path:'/jobDetails',
        component:jobDetails,
      },
      {
        path: '/service',
        component: service,
      }

    ],
  }],
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
  }
})
