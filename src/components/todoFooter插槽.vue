<template>
  <div class="todo-footer">
    <!-- 使用插槽，把插槽标签写上，把需要的名字，写在标签属性name中 -->
    <slot name="left"></slot>
    <slot name="conter"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'todoFooter',
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
