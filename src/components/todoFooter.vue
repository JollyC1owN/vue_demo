<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <span>已完成{{completedCount}}</span>
      / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-if="completedCount">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    selectAll: Function
  },
  name: 'todoFooter',
  computed: {
    completedCount() {
      return this.todos.reduce((pre, todo) => pre + (todo.isShow ? 1 : 0), 0)
    },
    checkAll: {
      get() {
        return (
          this.todos.length === this.completedCount && this.todos.length > 0
        )
      },
      set(value) {
        this.selectAll(value)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
