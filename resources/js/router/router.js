import Vue from "vue";
import VueRouter from "vue-router";
import Template from "../layouts/Template";
import HomePage from "../pages/HomePage";
import IndexUsers from "../pages/Usuarios/Index";
import ViewUser from "../pages/Usuarios/View";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Template,
            children: [
                { path: "/", name: "home", component: HomePage },
                {
                    path: "/users",
                    component: IndexUsers,
                    name: "user.index"
                },
                {
                    path: "/user/:userId",
                    name: "user.view",
                    component: ViewUser,
                },
                
            ]
        }
    ]
});
