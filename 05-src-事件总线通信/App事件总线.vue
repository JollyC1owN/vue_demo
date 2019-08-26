<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :addTodos="addTodos" />
      <todoList :todos="todos" :deleteTodos="deleteTodos" :updateTodos="updateTodos" />
      <todoFooter :todos="todos" :todosCompelted="todosCompelted" :delAllTodo="delAllTodo" />
    </div>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader'
import todoList from './components/todoList'
import todoFooter from './components/todoFooter'
export default {
  name: 'App',
  data() {
    return {
      // 在localStorage中读取数据，在生命周期中尽早的获取到数据
      todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
      //  [
      //   { id: 1, title: 'tomb', isCompeled: false },
      //   { id: 2, title: 'jolly', isCompeled: true },
      //   { id: 3, title: 'clown', isCompeled: false },
      //   { id: 4, title: 'darling', isCompeled: true }
      // ]
    }
  },
  mounted() {
    // 通过实例化对象执行事件绑定
    // 事件总线通信第二步
    this.$bus.$on('updateTodos', (todo, isCompeled) => {
      this.updateTodos(todo, isCompeled)
    })
  },
  methods: {
    // 当用户在输入框中输入后，按下enter键后添加
    addTodos(todo) {
      this.todos.unshift(todo)
    },
    // 用户点击删除按钮后，删除点击的那一项
    deleteTodos(index) {
      this.todos.splice(index, 1)
    },
    // 当用户勾选checkbox复选框时，更新todos中的那一项的状态
    updateTodos(todo, isCompeled) {
      todo.isCompeled = isCompeled
    },
    // 点击已完成所有的，或者当每一个都已经完成勾选后，及时更新todos中的数据
    todosCompelted(isCheckAll) {
      this.todos.forEach(todo => (todo.isCompeled = isCheckAll))
    },
    // 清除已完成的任务 筛选出isCompeled为false的，把为true的去掉
    delAllTodo() {
      this.todos = this.todos.filter(todo => !todo.isCompeled)
    }
  },
  watch: {
    // 监视todo中数据的变化，有变化就把todos保存到localStorage
    todos: {
      deep: true, // 深度监视
      handler: function(value) {
        // 里面传两个参数，一个最新的，一个是旧数据
        // 将最新的数据保存到localStorage
        localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  // 注册组件
  components: {
    todoHeader,
    todoList,
    todoFooter
  }
}
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
