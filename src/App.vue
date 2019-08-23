<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :todos="todos" :addTodo="addTodo" />
      <todoList :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <todoFooter :todos="todos" />
    </div>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, title: '奔驰', isShow: true },
        { id: 2, title: '奥迪', isShow: false },
        { id: 3, title: '领克', isShow: false },
        { id: 4, title: '吉利', isShow: false }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    updateTodo(todo, isShow) {
      todo.isShow = isShow
    }
  },
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
