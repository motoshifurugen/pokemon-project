import Vue from 'vue'
import Router from 'vue-router'
import Monster from '@/components/Monster' 
import Monster2 from '@/components/Monster2'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/monster',
      name: 'Monster', 
      component: Monster
    },
    {
        path: '/monster2',
        name: 'Monster2',
        component: Monster2
    },
    {
        path: '/monster/:id',
        name: 'show',
        component: Show,
        props: route => ({ id: Number(route.params.id)})
    }
  ]
})