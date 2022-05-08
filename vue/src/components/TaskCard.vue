<template>
    <div v-if="!isRemoved && !isDiscarded" id="task-card" :class="{ complete: isDone }">
        <p id="content">{{ content }}</p>
        <div class="buttons">
            <button v-if="!isDone" v-on:click="toggle()" class="green">Done</button>
            <button v-else v-on:click="toggle()" class="yellow">Undo</button>
            <button v-on:click="remove()" class="red">Delete</button>
        </div>
    </div>
    <div v-else-if="isRemoved" id="task-card" class="removed">
        <p id="content">{{ content }}</p>
        <div class="buttons">
            <button v-on:click="discard()" class="red">Discard</button>
            <button v-on:click="restore()" class="green">Restore</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskCard",
    props: [
        "task"
    ],
    data() {
        return {
            isDone: this.task.isDone,
            content: this.task.content,
            isRemoved: false,
            isDiscarded: false,
        }
    },
    methods: {
        toggle: function () {
            this.isDone = !this.isDone;
        },
        remove: function () {
            this.isRemoved = true;
        },
        restore: function () {
            this.isRemoved = false;
        },
        discard: function () {
            this.isDiscarded = true;
            this.restore();
        }
    }
}
</script>

<style scoped>
#task-card {
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;

    padding: 5px 15px 5px 15px;
    margin: 2vh auto 1vh auto;
    max-width: 30vw;

    border: solid 2px #2c3e50;
    border-radius: 0.2rem;

    display: flex;
    align-content: stretch;
    justify-content: space-between;
    align-items: center;

    transition: all 200ms ease;
}

#task-card:hover {
    transition: all 200ms ease;
    box-shadow: 2px 2px 0px 0px #000000;
}

#content {
    max-width: 40%;
    overflow-wrap: break-word;
}

.removed {
    box-shadow: inset 3px 3px 10px -5px #000000 !important;
    color: #8a8c8d;
    border: solid 0px #8a8c8d !important;
    transition: all 200ms ease;

}

.complete {
    text-decoration: line-through;
    color: #fff;
    background-color: #46d494;
    border: solid 2px #2c9767 !important;
    transition: all 200ms ease;
    box-shadow: 5px 5px 0px 0px #000000 !important;

}

button {
    cursor: pointer;
    max-width: 10vw;
    min-height: 5vh;
    margin: 0 5px 0 5px;
    outline: none;
    border: solid 1px #2c3e50;
    border-radius: 0.2em;
    background: #fff;
}

button:hover {
    box-shadow: 3px 3px 0px 0px #000000 !important;
}

button:active {
    box-shadow: inset 3px 3px 5px -3px #000000 !important;

}

button.red {
    background: #EF7B7B;
}

button.green {
    background: #CBE2B0;
}

button.yellow {
    background: #FFF89A;
}

button.blue {
    background: #A3DDCB;
}

</style>