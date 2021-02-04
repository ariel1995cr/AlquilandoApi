<template>
    <div>
        <h2 v-if="this.user == null">Cargando...</h2>
        <div v-else>
            <div class="p-4 relative">
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4"
                >
                    <div class="text-center">
                        <p class="text-2xl text-gray-800 dark:text-white">
                            Nombre y apellido: {{user.nombre}} {{user.apellido}}
                        </p>
                        <p
                            class="text-xl text-gray-500 dark:text-gray-200 font-light"
                        >
                            Username: {{user.usuario}}
                        </p>
                        <p
                            class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light"
                        >
                            Email: {{user.email}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserView",
    data() {
        return {
            user: null
        };
    },
    created() {
        this.cargarUsuario();
    },
    methods: {
        cargarUsuario() {
            axios
                .get(`/api/users/${this.$route.params.userId}`)
                .then(resp => {
                    this.user = resp.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style></style>
