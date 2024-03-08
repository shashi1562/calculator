<script setup lang="ts">
    const props = defineProps({
        theme: Number,
    });
    const emit = defineEmits([ "themechange" ]);

    function handleChange(event) {
        emit("themechange", event.target.value);
    }
</script>
<template>
    <div>
        <h1>
            calc
        </h1>
        <label for="theme">Theme</label>
        <input type="range" min="1" max="3" @change="handleChange" :value="props.theme" id="theme" name="theme">
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

