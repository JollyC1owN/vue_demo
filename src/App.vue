<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :todos="todos" :addTodo="addTodo" />
      <todoList :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <todoFooter :todos="todos" :selectAll="selectAll" :deleteCompeleted="deleteCompeleted" />
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
      todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
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
    },
    /* 可能为全选，也可能为全不选 */
    selectAll(isCheck) {
      this.todos.forEach(todo => (todo.isShow = isCheck))
    },
    // 清空已完成的任务
    deleteCompeleted() {
      this.todos = this.todos.filter(todo => !todo.isShow)
    }
  },
  watch: {
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    todos: {
      deep: true, // 是否为深度克隆
      handler: function(value) {
        // 将数据保存在localStorage中，数据要是json的格式
        localStorage.setItem('todos_key', JSON.stringify(value))
      }
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
