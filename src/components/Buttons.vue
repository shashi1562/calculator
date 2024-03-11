<script setup lang="ts">
    import { buttons, Button } from '../utils/constants.ts'
    const emit = defineEmits(["addChar", "delete", "reset", "calculate"]);

    function handleClick(btn: Button) {
        emit(btn.event, btn.content);
    }
</script>

<template>
    <div class="buttonsContainer">
        <button
            v-for="btn of buttons"
            :class="btn.classes"
            @click="handleClick(btn)"
        >
            {{ btn.content }}
        </button>
    </div>
</template>

<style>
    .buttonsContainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        background-color: var(--color-secondary-background);
        padding: 1.5rem;
        border-radius: 1rem;
    }

    .btn {
        font-family: "League Spartan", sans-serif;
        font-size: 2rem;
        height: 3.5rem;
        line-height: 3.75rem;
        border-radius: 0.5rem;
        border-style: none;
        box-sizing: border-box;
        cursor: pointer;
        background-color: var(--color-key-back);
        color: var(--color-text-key);
        -webkit-box-shadow: 0px 6px 0px 0px var(--color-key-shadow);
        -moz-box-shadow: 0px 6px 0px 0px var(--color-key-shadow);
        box-shadow: 0px 6px 0px 0px var(--color-key-shadow);
    }

    .btn-del {
        background-color: var(--color-key-special-back);
        color: var(--color-text-key-special);
        -webkit-box-shadow: 0px 6px 0px 0px var(--color-key-special-shadow);
        -moz-box-shadow: 0px 6px 0px 0px var(--color-key-special-shadow);
        box-shadow: 0px 6px 0px 0px var(--color-key-special-shadow);
    }

    .btn-submit {
        background-color: var(--color-key-toggle-back);
        color: var(--color-text-key-submit);
        -webkit-box-shadow: 0px 6px 0px 0px var(--color-key-toggle-shadow);
        -moz-box-shadow: 0px 6px 0px 0px var(--color-key-toggle-shadow);
        box-shadow: 0px 6px 0px 0px var(--color-key-toggle-shadow);
    }

    .btn-bottom {
        grid-column: span 2;
    }
</style>
