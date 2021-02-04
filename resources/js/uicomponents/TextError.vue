<template>
    <div>
        <p class="text-red-600 text-lg font-bold" v-for="(text, idx) in data" :key="idx">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        data: Array
    }
};
</script>

<style></style>
