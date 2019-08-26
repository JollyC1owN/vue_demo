<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成{{compeledCount}}</span>
      / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="delAllTodo()" v-show="compeledCount">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    todosCompelted: Function,
    delAllTodo: Function
  },
  name: 'todoFooter',
  computed: {
    // 选中的数量计算
    compeledCount() {
      // 调用reduce()，来实现累加计算
      return this.todos.reduce(
        // 当每一项的isCompeled为true时，则就加1
        (pre, todo) => pre + (todo.isCompeled ? 1 : 0),
        0
      )
    },
    // 点击全选按钮的操作
    // 当点击时，上面所有的都得勾选，是get操作
    // 当用户把上面的每一项都点击后，下面的也应该勾选
    isCheckAll: {
      get() {
        return (
          // 判断当前选中的个数，是否与todos的数据个数相等
          // 若选中个数为0，todos中的个数也为0时，条件this.compeledCount === this.todos.length成立
          // 所以我们加一个限制条件 this.compeledCount > 0，当两个条件都满足时才会返回true
          this.compeledCount === this.todos.length && this.compeledCount > 0
        )
      },
      set(value) {
        // 调用app中定义的方法，实现每一个todo的状态都为true
        this.todosCompelted(value)
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
