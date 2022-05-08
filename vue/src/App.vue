<template>
  <div id="app">
    <h1>Vue Todo App</h1>
    <p><strong>- - -</strong></p>
    <br>
    <TaskRender taskList="Tasks"></TaskRender>
  </div>
</template>

<script>
import TaskRender from './components/TaskRender.vue'

export default {
  name: 'App',
  components: {
    TaskRender,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
