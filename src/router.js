import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top' 
import Create from '@/components/Create'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/top',
      name: 'Top', 
      component: Top
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/show/:showId',
        name: 'show',
        component: Show,
        // props: route => ({ id: Number(route.params.id)})
    }
  ]
})