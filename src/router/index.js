import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage'
import Article from '@/pages/article'
import Recruit from '@/pages/recruit'
import Activity from '@/pages/activity'
import UserCenter from '@/pages/userCenter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/userCenter',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
