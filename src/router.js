import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import EditUser from '@/components/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      children: [
      ]
    },
    {
      path: '/users/new',
      name: 'NewUser',
      component: EditUser,
      props: false
    },
    {
      path: '/users/:id',
      name: 'EditUser',
      component: EditUser,
      props: true
    }
  ]
})
