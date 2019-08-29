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
        path: 'message',
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: MessageDetail
          }
        ]
      },
      {
        path: 'news',
        component: News
      },
      {
        path: '/home',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]
