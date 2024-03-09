<script setup lang="ts">
    const props = defineProps({
        inputValue: String,
    });
</script>
<template>
    <input type="text" :value="props.inputValue">
</template>
