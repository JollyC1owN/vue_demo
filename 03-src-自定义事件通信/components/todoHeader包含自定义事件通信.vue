<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTodo" v-model="title" />
  </div>
</template>

<script>
export default {
  // props: {
  //   addTodos: {
  //     type: Function,
  //     required: true
  //   }
  // },
  name: 'todoHeader',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo() {
      // 将输入的数据去掉空格
      const title = this.title.trim()
      // 判断是否输入的为空或者是空格
      if (!title) {
        alert('请输入正确的数据')
      }
      // 收集数据为todo对象
      const todo = {
        id: Date.now(), // 给一个唯一的id，可以用时间，或者其他的库来做唯一的标识，uuid
        title,
        isCompeled: false // 数据一开始添加时，是不勾选的
      }
      // 调用app中添加的方法
      // this.addTodos(todo)
      /* 自定义事件实现通信后，要在该组件内分发事件 */
      this.$emit('addTodos', todo)
      // 清空输入框中的内容
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
