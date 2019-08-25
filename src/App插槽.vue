<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :addTodos="addTodos" />
      <todoList :todos="todos" :deleteTodos="deleteTodos" :updateTodos="updateTodos" />
      <todoFooter :todos="todos" :todosCompelted="todosCompelted" :delAllTodo="delAllTodo">
        <!-- 给要提取为插槽的起个名字：具名插槽 -->
        <label slot="left">
          <input type="checkbox" v-model="isCheckAll" />
        </label>
        <span slot="conter">
          <span>已完成{{compeledCount}}</span>
          / 全部{{todos.length}}
        </span>
        <button
          slot="right"
          class="btn btn-danger"
          @click="delAllTodo()"
          v-show="compeledCount"
        >清除已完成任务</button>
      </todoFooter>
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
