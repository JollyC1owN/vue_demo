<template>
  <li
    :style="{background:bgColor}"
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
  >
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShowBut" @click="deleteLi(index)">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
    updateTodo: Function,
    index: Number
  },
  name: 'todoItem',
  data() {
    return {
      bgColor: 'white',
      isShowBut: false
    }
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = '#cccccc'
        this.isShowBut = true
      } else {
        this.bgColor = 'white'
        this.isShowBut = false
      }
    },
    deleteLi(index) {
      if (confirm('确认要删除吗？')) {
        this.deleteTodo(index)
      }
    }
  },
  computed: {
    isCheck: {
      get() {
        // checkbox的勾选与否，看接受来的数据中的数据
        return this.todo.isShow
      },
      set(value) {
        // 当用户操作cheeckbox框时调用
        this.updateTodo(this.todo, value)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
