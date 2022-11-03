<template>
  <div class="listContainer">
    <div v-if="$store.state.todoList.length === 0" class="listContainer__empty">
      <p>There is no task.</p>
    </div>
    <div v-else class="listContainer__todoList">
      <TodoListItem v-for="todo in this.$store.state.todoList" :key="todo.id" :todo="todo" @updateTask="updateTask" @deleteTask="deleteTask">
      </TodoListItem>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'MyTodoList',
  components: {
    'TodoListItem': TodoListItem
  },
  methods:{
    updateTask(todo){
      this.$emit('updateTask',todo)
    },
    deleteTask(id){
      this.$emit('deleteTask',id)
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  opacity: 0.6;
}

.listContainer {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;

  .listContainer__empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listContainer__todoList{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 0px 60px;
  }
}
</style>
