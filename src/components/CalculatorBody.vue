<script setup lang="ts">
    import { ref } from 'vue'
    import NumbersInput from './NumbersInput.vue';
    import Buttons from './Buttons.vue';
    const inputValue = ref('');

    function handleDelete() {
        if (inputValue.value) {
            inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
        }
    }

    function handleReset() {
        inputValue.value = '';
    }

    function handleAddChar(char: string) {
        inputValue.value += char;
    }

    function handleCalculate() {
        inputValue.value = `${eval(inputValue.value)}`;
    }
</script>

<template>
    <div>
        <NumbersInput :inputValue />
        <Buttons 
            @reset="handleReset"
            @delete="handleDelete"
            @add-char="handleAddChar"
            @calculate="handleCalculate"
        />
    </div>
</template>
