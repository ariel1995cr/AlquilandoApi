<template>
    <div class="w-full flex flex-col items-center relative z-10">
        <h1
            class="font-extrabold text-6xl text-center text-white leading-tight mt-4"
        >
            Listado de Usuarios
        </h1>
        <Button
            @click="abrirModal('new')"
            class="bg-indigo-800 text-white hover:text-white"
        >
            Crear nuevo usuario
        </Button>
        <table-component
            :header="['Usuario', 'Nombre', 'Apellido', 'Email']"
            :itemData="['usuario', 'nombre', 'apellido', 'email']"
            :data="usuarios"
        >
            <template v-slot:default="slotProps">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Button
                        @click="eliminarUsuario(slotProps.user.id)"
                        class="text-red-600 hover:text-white"
                    >
                        <font-awesome-icon icon="trash" />
                    </Button>
                    <Button
                        @click="abrirModal('edit', slotProps.user)"
                        class="text-gray-600 hover:text-white"
                    >
                        <font-awesome-icon icon="pencil-alt" />
                    </Button>
                    <Button
                        @click="$router.push({ name: 'user.view', params: { userId: `${slotProps.user.id}` }})"
                        class="text-indigo-600 hover:text-white"
                    >
                        <font-awesome-icon icon="eye" />
                    </Button>
                </td>
            </template>
        </table-component>
        <card-modal-component :showing="showModal">
            <template v-slot:content>
                <div class="flex flex-col">
                    <h2 class="text-bold">{{ title }}</h2>
                    <form>
                        <Input
                            v-model="user.usuario"
                            placeholder="Ingresar usuario"
                            title="Usuario"
                            type="text"
                            autocomplete="nope"
                        />
                        <text-error
                            v-show="errors['usuario']"
                            :data="errors['usuario']"
                        />
                        <Input
                            v-model="user.nombre"
                            placeholder="Ingresar nombre"
                            title="Nombre"
                            type="text"
                            autocomplete="nope"
                        />
                        <text-error
                            v-show="errors['nombre']"
                            :data="errors['nombre']"
                        />
                        <Input
                            v-model="user.apellido"
                            placeholder="Ingresar apellido"
                            title="Apellido"
                            type="text"
                            autocomplete="nope"
                        />
                        <text-error
                            v-show="errors['apellido']"
                            :data="errors['apellido']"
                        />
                        <Input
                            v-model="user.email"
                            placeholder="Ingresar email"
                            title="E-mail"
                            type="text"
                            autocomplete="nope"
                        />
                        <text-error
                            v-show="errors['email']"
                            :data="errors['email']"
                        />
                    </form>
                </div>
            </template>
            <template v-slot:button>
                <Button
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="cerrarModal"
                >
                    Cerrar
                </Button>
                <Button
                    type="submit"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="crearUsuario"
                    v-if="action=='new'"
                >
                    Guardar
                </Button>
                <Button
                    type="submit"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="actualizarUsuario"
                    v-if="action=='edit'"
                >
                    Actualizar
                </Button>
            </template>
        </card-modal-component>
    </div>
</template>

<script>
import TableComponent from "../../components/TableComponent.vue";
import Button from "../../uicomponents/Button";
import CardModalComponent from "../../uicomponents/CardModalComponent.vue";
import Input from "../../uicomponents/Input.vue";
import TextError from "../../uicomponents/TextError.vue";

export default {
    components: {
        TableComponent,
        Button,
        CardModalComponent,
        Input,
        TextError
    },
    name: "IndexUsuarios",
    data() {
        return {
            loading: false,
            usuarios: [],
            showModal: false,
            title: "",
            action: "new",
            user: {
                nombre: "",
                apellido: "",
                email: "",
                usuario: ""
            },
            errors: [],
        };
    },
    mounted() {
        this.cargarUsuarios();
    },
    methods: {
        cargarUsuarios() {
            axios
                .get("/api/users")
                .then(resp => {
                    this.usuarios = resp.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        crearUsuario() {
            axios
                .post("/api/users", {
                    nombre: this.user.nombre,
                    apellido: this.user.apellido,
                    email: this.user.email,
                    usuario: this.user.usuario
                })
                .then(resp => {
                    this.errors = [];
                    this.cerrarModal();
                    alert(resp.data.message);
                    this.cargarUsuarios();
                })
                .catch(err => {
                    this.errors = err.response.data.errors;
                });
        },
        actualizarUsuario() {
            axios
                .put(`/api/users/${this.user.id}`, {
                    nombre: this.user.nombre,
                    apellido: this.user.apellido,
                    email: this.user.email,
                    usuario: this.user.usuario
                })
                .then(resp => {
                    this.errors = [];
                    this.cerrarModal();
                    alert(resp.data.message);
                    this.cargarUsuarios();
                })
                .catch(err => {
                    this.errors = err.response.data.errors;
                });
        },
        eliminarUsuario(id) {
            if (confirm("Esta seguro que quiere eliminar a este usuario?")) {
                axios
                    .delete(`/api/users/${id}`)
                    .then(resp => {
                        alert(resp.data.message);
                        this.cargarUsuarios();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        abrirModal(action, user) {
            this.action = action;
            if (this.action == "new") {
                this.title = "Crear nuevo usuario";
            }

            if(this.action == 'edit'){
                this.title = "Editar usuario";
                this.user = Object.assign({}, user);
            }

            this.showModal = true;
        },
        cerrarModal() {
            this.action = "new";
            this.title = "";
            this.showModal = false;
            this.user = {
                nombre: "",
                apellido: "",
                email: "",
                usuario: ""
            };
            this.errors = [];
        }
    }
};
</script>

<style></style>
