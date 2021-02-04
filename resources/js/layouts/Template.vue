<template>
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
        <div class="inset-0 bg-black opacity-25 absolute"></div>
        <header class="absolute top-0 left-0 right-0 z-20">
            <nav class="container mx-auto px-6 md:px-12 py-4">
                <div class="md:flex justify-center items-center">
                    <div class="md:flex items-center">
                        <link-component nameLink="home" title="Home" />
                        <link-component nameLink="user.index" title="Usuarios" />
                    </div>
                </div>
            </nav>
        </header>
        <div
            class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40"
        >
            <router-view />
        </div>
    </div>
</template>

<script>
import LinkComponent from '../uicomponents/LinkComponent.vue';
export default {
  components: { LinkComponent },
    name: "Template"
};
</script>

<style></style>
