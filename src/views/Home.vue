<template>
  <div class="home-container">
    <img class="logo" alt="Truora logo" src="@/assets/logo.png">
    <h1>To do list</h1>
    <small>
      Add your pending tasks below <br>
      <b>Click</b> them to remove them from the list
    </small>
    <div class="input-container">
      <form @submit.prevent="createTask">
        <input
          required
          v-model="newTask"
          placeholder="Buy groceries for new year's eve"
          type="text"
        >
        <button type="submit">
          +
        </button>
      </form>
    </div>
    <hr>
    <div class="tasks-container">
      <Task
        v-for="(task, i) in tasks"
        :key="task.name + i"
        :task="task"
        :onRemove="() => removeTask(i)"
      />
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
  data() {
    return {
      tasks: [
        {
          name: 'Learn e2e coverage',
        },
      ],
      newTask: '',
    };
  },
  components: {
    Task,
  },
  methods: {
    createTask() {
      this.tasks.push({ name: this.newTask });
      this.newTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16%;
}

.logo {
  width: 80px;
}

.home-container h1 {
  margin: 4px;
  margin-bottom: -4px;
}

.home-container small {
  margin-bottom: 16px;
}

input {
  width: 400px;
  border: 0;
  font-size: 1.32rem;
  font-family: 'Montserrat', sans-serif;
}

button {
  background-color: rgb(83, 43, 226);
  border: 0;
  font-size: 1.32rem;
  height: 1.8rem;
  color: white;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
}

hr {
  width: 100%;
  margin-top: 0;
  border-width: 1px;
}
</style>
