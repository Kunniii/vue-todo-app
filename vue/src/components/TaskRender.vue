<template>
    <div id="task-render">
        <form v-on:submit.prevent="addTask()">
            <input class="task-input" type="text" v-model="newTask" placeholder="Add new task">
            <input v-show="false" type="submit" value="OK">
        </form>
        <TaskCard v-for="task in tasks" :key="task.id" :task="task"></TaskCard>
    </div>
</template>

<script>
import TaskCard from "./TaskCard.vue";
export default {
    name: "TaskRender",
    props: [
    ],
    components: { TaskCard },
    data() {
        return {
            newTask: '',
            tasks: []
        }
    },
    methods: {
        addTask: function () {
            if (this.newTask === '') return;
            this.tasks.push({
                content: this.newTask,
                isDone: false
            });
            this.newTask = '';
        }
    }
}
</script>

<style scoped>
.task-input {
    width: 10vw;
    border: solid 1px #2c3e50;
    border-radius: 0.2rem;
    padding: 10px 15px;
    transition: all 500ms ease;
    text-align: center;
}

.task-input:focus {
    width: 30vw;
    outline: none;
    transition: all 500ms ease;
    border: solid 2px #42b883;
}
</style>