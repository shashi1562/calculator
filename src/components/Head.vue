<script setup lang="ts">
    import { ref } from 'vue'
    const props = defineProps({
        theme: Number,
    });

    const calcTheme = ref(props.theme)
</script>
<template>
    <div class="head">
        <h1 class="headName">
            calc
        </h1>

        <div class="themeChanger">
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
    </div>
</template>

<style>
    .head {
        color: var(--color-text-upper);
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .headName {
        margin: 0;
    }
</style>
