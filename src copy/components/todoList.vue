<template>
  <ul class="todo-main">
    <todoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
  name: 'todoList',
  props: ['todos'],
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
