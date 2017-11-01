import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import level from '@/components/Level'
import pokemon from '@/components/Pokemon'
import gym from '@/components/Gym'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/level',
      name: 'Level',
      component: level
    },
    {
      path: '/pokemon',
      name: 'Pokemon',
      component: pokemon
    },
    {
      path: '/gym',
      name: 'Gym',
      component: gym
    }
  ]
})
