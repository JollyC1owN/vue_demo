<template>
  <ul class="todo-main">
    <todoItem
      v-for="(todo,index) in todos"
      :key="todo.id"
      :todo="todo"
      :deleteTodos="deleteTodos"
      :updateTodos="updateTodos"
      :index="index"
    />
  </ul>
</template>

<script>
import todoItem from './todoItem'
export default {
  props: ['todos', 'deleteTodos', 'updateTodos'],
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
