<template>
  <li
    :style="{background:bgColor}"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteLi(index)">删除</button>
  </li>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  props: {
    todo: Object,
    index: Number,
    updateTodos: Function
  },
  name: 'todoItem',
  data() {
    return {
      bgColor: 'white', // li的默认背景颜色
      isShow: false // 删除按钮的显示与隐藏的标识
    }
  },
  methods: {
    // 鼠标滑入与滑出的事件回调
    handleEnter(falg) {
      if (falg) {
        // 鼠标进入
        this.bgColor = 'pink'
        this.isShow = true
      } else {
        // 鼠标离开
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    // 删除按钮的点击回调事件，在调用时，传入当前点击的index值
    deleteLi(index) {
      if (confirm('确认要删除吗？')) {
        // this.deleteTodos(index)
        // 通过Pubsub消息订阅来实现组件通信----记得在该组件引入Pubsub
        // 发布消息-----先订阅再发布，在什么时候发布
        Pubsub.publish('deleteTodos', index)
      }
    }
  },
  computed: {
    // 用户点击某一项的复选框的操作
    isCheck: {
      get() {
        // 在子组件中不能直接操作父组件的数据
        // 我们定义一个自己的标识来表示复选框是否为选中
        // 这个标识的值与当前那个todo的isCompeled的状态是一致的
        return this.todo.isCompeled
      },
      set(value) {
        // 调用更新某一项更新状态的方法
        this.updateTodos(this.todo, value)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
