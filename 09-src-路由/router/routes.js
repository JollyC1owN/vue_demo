/* 
所有路由配置的模块 
*/
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        // 不写斜杠，就自动匹配
        path: 'message',
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: MessageDetail,
            // 将路由中的参数数据映射标签属性
            props: (route) => ({ id: route.params.id * 1 })
          }
        ]
      },
      {
        path: '/home',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/',
    redirect: '/about'
  }
]
