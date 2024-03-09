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
        class="container"
    >
        <Head
            :theme
            :changeTheme
            @themechange="changeTheme"
        />
        <CalculatorBody />
    </div>
</template>

<style scoped>
    .container {
        background-color: var(--color-main-background);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
