<template>
    <div class="container">
        <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow rounded-lg overflow-hidden"
                >
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                    v-for="(item, idx) in header"
                                    :key="idx"
                                >
                                    {{ item }}
                                </th>
                                <th
                                    class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                                >
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in data" :key="`${row[keyData]}`">
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    v-for="item in itemData"
                                    :key="item"
                                >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ `${row[item]}` }}
                                    </p>
                                </td>
                                <slot v-bind:user="row">
                                    
                                </slot>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TableComponent",
    props: {
        header: {
            type: Array,
            required: true
        },
        itemData: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        keyData: {
            type: String,
            default: "id"
        }
    }
};
</script>

<style></style>
