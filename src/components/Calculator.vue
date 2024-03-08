<script setup lang="ts">
    import { ref, computed } from 'vue'
    import Head from './Head.vue'
    const theme = ref(1);
    const className = computed(() => {
        return "theme-" + theme.value;
    });

    function changeTheme(newTheme: string) {
        theme.value = +newTheme;
    }
</script>
<template>
    <div :class="className">
        <Head
            :theme
            :changeTheme
            @themechange="changeTheme"
        />
        <div>
            Calcualtor
        </div>
    </div>
</template>
