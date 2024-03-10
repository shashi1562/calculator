<script setup lang="ts">
    const props = defineProps({
        inputValue: String,
    });
</script>
<template>
    <div class="screen">
        {{ props.inputValue }}
    </div>
</template>

<style scoped>
    .screen {
        background-color: var(--color-screen-background);
        text-align: end;
        color: var(--color-text-upper);
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        font-size: 2.5rem;
        border-radius: 0.5rem;
        min-height: 5.75rem;
        max-height: 5.75rem;
        overflow-x: auto;
    }

    ::-webkit-scrollbar {
        display: none;
    }
</style>
