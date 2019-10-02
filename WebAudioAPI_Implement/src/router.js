import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/web-audio-api',
      name: 'WebAudioApi',
      component: () => import('./views/WebAudioApi.vue')
    },
    {
      path: '/panner-node',
      name: 'PannerNode',
      component: () => import('./views/PannerNode.vue')
    },
    {
      path: '/guitar-tuner-2.0',
      name: 'GuitarTuner2.0',
      component: () => import('./views/GuitarTuner_2.vue')
    }
  ]
})
