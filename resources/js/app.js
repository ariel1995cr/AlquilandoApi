/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

window.Vue = require('vue').default;

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash)
library.add(faPencilAlt)
library.add(faEye)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Importamos las rutas
import router from './router/router.js';


const app = new Vue({
    el: '#app',
    router
});
