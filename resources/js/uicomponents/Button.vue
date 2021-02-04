<template>
    <button
        class="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
        v-on="$listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
};
</script>

<style></style>
