<template>
  <ul class="todo-main">
    <todoItem
      v-for="(todo,index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
    />
  </ul>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
  props: ['todos', 'deleteTodo', 'updateTodo'],
  name: 'todoList',
  components: {
    todoItem
  }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
