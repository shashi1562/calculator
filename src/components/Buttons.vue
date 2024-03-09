<script setup lang="ts">
    import { buttons } from '../utils/constants.ts'
    const emit = defineEmits(["addchar", "delete", "reset", "calculate"]);

    function handleClick(event) {
        emit(event.target.dataset.event, event.target.innerText);
    }
</script>

<template>
    <div class="buttonsContainer">
        <button
            v-for="btn of buttons"
            :class="btn.classes"
            :data-event="btn.event"
            @click="handleClick"
        >
            {{ btn.content }}
        </button>
    </div>
</template>

<style>
    .buttonsContainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
</style>
