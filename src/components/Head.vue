<script setup lang="ts">
    import { ref } from 'vue'
    const props = defineProps({
        theme: Number,
    });

    const calcTheme = ref(props.theme)
</script>
<template>
    <div>
        <h1>
            calc
        </h1>
        <label for="theme">Theme</label>
        <input
            type="range"
            min="1"
            max="3"
            @change="$emit('themechange', calcTheme)"
            v-model="calcTheme"
            id="theme"
            name="theme"
        >
        <span class="">
            1
        </span>
        <span class="">
            2
        </span>
        <span class="">
            3
        </span>
    </div>
</template>

