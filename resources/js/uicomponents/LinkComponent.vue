<template>
    <div>
        <router-link
            class="text-lg uppercase mx-3 text-white cursor-pointer hover:text-blue-800"
            active-class="text-blue-500"
            :to="{ name: nameLink }"
            exact
        >
            <span class="mx-4 text-lg font-normal">
                {{ title }}
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        nameLink: String,
        title: String
    }
};
</script>

<style></style>
