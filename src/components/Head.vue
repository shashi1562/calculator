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
            <label for="theme" class="label">Theme</label>
            <input
                type="range"
                min="1"
                max="3"
                @change="$emit('themechange', calcTheme)"
                v-model="calcTheme"
                id="theme"
                name="theme"
            >
            <div class="marks">
                <span class="mark">
                    1
                </span>
                <span class="mark">
                    2
                </span>
                <span class="mark">
                    3
                </span>
            </div>
        </div>
    </div>
</template>

<style>
    .head {
        color: var(--color-text-upper);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .headName {
        margin: 0;
    }

    .label {
        text-transform: uppercase;
        line-height: 1rem;
    }

    .themeChanger {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
    }

    .marks {
        position: absolute;
        bottom: 1.25rem;
        right: 0;
        padding-inline: 0.25rem;
        width: 4.5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }

    .mark {
        width: 1rem;
        text-align: center;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        width: 4.5rem;
        cursor: pointer;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        background-color: var(--color-secondary-background);
        border-radius: 1rem;
        padding: 0.25rem;
        box-sizing: border-box;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 1rem;
        background-color: var(--color-key-toggle-back);
        width: 1rem;
        border-radius: 1rem;
    }

    input[type="range"]::-webkit-slider-thumb:hover {
        background-color: var(--color-key-toggle-back-hover);
    }
</style>
