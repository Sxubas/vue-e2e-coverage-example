<template>
  <div class="task-container" @click="onRemove">
    {{ task.name }}
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
    onRemove: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.task-container {
  font-size: 1.32rem;
  margin: 4px 0;
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  transition: 0.24s all ease-in-out;
  cursor: pointer;
}

.task-container:hover {
  background-color: lightgray;
}
</style>
