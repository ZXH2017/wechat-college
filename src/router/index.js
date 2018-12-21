import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'HelloWorld'
      }
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/forget',
      name: 'forget',
      component: resolve => require(['@/components/forget.vue'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/register.vue'], resolve)
    },
    {
      path: '/chat',
      name: 'chat',
      component: resolve => require(['@/components/views/chat.vue'], resolve)
    },
    {
      path: '/article',
      name: 'article',
      component: resolve => require(['@/components/views/article.vue'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/components/test.vue'], resolve)
    },
    // {
    //   path: '/first',
    //   name: 'First',
    //   omponent: resolve => require(['@/components/views/First'], resolve)
    // },
    // {
    //   path: '/second',
    //   name: 'Second',
    //   omponent: resolve => require(['@/components/views/Second'], resolve)
    // }
  ]
})
