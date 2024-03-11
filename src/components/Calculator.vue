<script setup lang="ts">
    import { ref, computed } from 'vue'
    import Head from './Head.vue'
    import CalculatorBody from './CalculatorBody.vue'
    const theme = ref(1);
    const className = computed(() => {
        return "theme-" + theme.value;
    });

    function changeTheme(newTheme: string) {
        theme.value = +newTheme;
    }
</script>
<template>
    <div
        :class="className"
        class="back"
    >
        <div class="container">
            <Head
                :theme
                @themechange="changeTheme"
            />
            <CalculatorBody />
        </div>
    </div>
</template>

<style scoped>
    .back {
        background-color: var(--color-main-background);
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    .container {
        max-width: 25rem;
    }
</style>
