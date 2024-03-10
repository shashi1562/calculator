<script setup lang="ts">
    import { ref } from 'vue'
    import NumbersInput from './NumbersInput.vue';
    import Buttons from './Buttons.vue';
    const inputValue = ref('');
    const lastActionWasCalc = ref(false);

    function handleDelete() {
        if (lastActionWasCalc.value) {
            handleReset();
        }

        if (inputValue.value) {
            inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
        }
    }

    function handleReset() {
        inputValue.value = '';
        lastActionWasCalc.value = false;
    }

    function handleAddChar(char: string) {
        if (lastActionWasCalc.value && (Number.isFinite(+char) || char === '.')) {
            handleReset();
        }
        if ('./-+x'.includes(char) && './-+x'.includes(inputValue.value[inputValue.value.length - 1])) {
            handleDelete();
        }
        inputValue.value += char;
        lastActionWasCalc.value = false;
    }

    function handleCalculate() {
        let resultString = inputValue.value.replace("x", "*");
        inputValue.value = `${eval(resultString)}`;
        lastActionWasCalc.value = true;
    }
</script>

<template>
    <div class="calculatorBody">
        <NumbersInput :inputValue />
        <Buttons 
            @reset="handleReset"
            @delete="handleDelete"
            @add-char="handleAddChar"
            @calculate="handleCalculate"
        />
    </div>
</template>

<style>
    .calculatorBody {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
