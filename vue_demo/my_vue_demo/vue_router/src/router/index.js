import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
Vue.use(Router)

// 实现路由的懒加载
const homePage = ()=>import("../components/Home")
const aboutPage = ()=>import("../components/About")
const userPage = ()=>import("../components/User")
const messagePage = ()=>import("../components/Message")
const newsPage = ()=>import("../components/News")
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: homePage,
      children:[
        {
          path: 'news',
          name: 'News',
          component: newsPage,
        },
        {
          path: 'message',
          name: 'Message',
          component: messagePage,
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: aboutPage
    },
    {
      path: '/user',
      name: 'User',
      component: userPage
    }

  ]
})
