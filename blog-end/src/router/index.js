import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Login from '@/pages/login'

import AdminIndex from '@/pages/admin/index.vue'
import IndexWelcome from '@/pages/admin/index_welcome.vue'
import UserIndex from '@/pages/admin/user_index.vue'
import CategoryIndex from '@/pages/admin/category_index.vue'
import CategoryAdd from '@/pages/admin/category_add.vue'
import CategoryEdit from '@/pages/admin/category_edit.vue'
import ContentIndex from '@/pages/admin/content_index.vue'
import ContentAdd from '@/pages/admin/content_add.vue'
import ContentEdit from '@/pages/admin/content_edit.vue'
import SelfSite from '@/pages/admin/self_site.vue'
// import FriendshipLinks from '@/pages/admin/friendship_links.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin',
      name: '/'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      component: AdminIndex,
      children: [
        {
          path: '/admin',
          component: IndexWelcome
        },
        {
          path: '/admin/user',
          component: UserIndex
        },
        {
          path: '/admin/category',
          component: CategoryIndex
        },
        {
          path: '/admin/category/add',
          component: CategoryAdd
        },
        {
          path: '/admin/category/edit',
          component: CategoryEdit
        },
        {
          path: '/admin/content',
          component: ContentIndex
        },
        {
          path: '/admin/content/add',
          component: ContentAdd
        },
        {
          path: '/admin/content/edit',
          component: ContentEdit
        },
        {
          path: '/admin/selfsite',
          component: SelfSite
        }
        // ,
        // {
        //   path: '/admin/friendshiplinks',
        //   component: FriendshipLinks
        // }
      ]
    }
  ]
})
