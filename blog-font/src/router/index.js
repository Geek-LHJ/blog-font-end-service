import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/views/Index'
import Home from '@/components/views/Home'
import Archives from '@/components/views/Archives'
import Demo from '@/components/views/Demo'
import Music from '@/components/views/Music'
import About from '@/components/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: Index,
      children: [
        {path: 'home', name: 'home', component: Home, meta: {title: '首页'}},
        {path: 'archives', name: 'archives', component: Archives, meta: {title: '归档'}},
        {path: 'demo', name: 'demo', component: Demo, meta: {title: '作品'}},
        {path: 'music', name: 'music', component: Music, meta: {title: '音乐'}},
        {path: 'about', name: 'about', component: About, meta: {title: '关于'}}
      ]
    }
  ]
})
