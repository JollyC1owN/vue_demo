<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title" />
  </div>
</template>

<script>
export default {
  props: {
    // 属性名、属性值的类型、属性的必要性
    addTodo: {
      type: Function,
      required: true
    }
  },
  name: 'todoHeader',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      // 根据输入的数据准备一个todo对象
      const title = this.title.trim()
      if (!title) {
        alert('请输入正确数据')
      }
      const todo = {
        id: Date.now(),
        title,
        isShow: false
      }
      // 向App的todos中添加一个todo
      // 通过父组件传来的函数方法，需要用this来调用
      this.addTodo(todo)
      // 清除输入框中的内容改变组件对象中data中的title
      this.title = ''
    }
  },
  components: {}
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
