import { createRouter, createWebHistory } from "vue-router";
import home from "../pages/home.vue"
import about from "../pages/about.vue"
import gallery from "../pages/gallery.vue"

const routes = [ 
    {
    path: "/",
    component: home,
    },
    {
    path: "/about",
    component: about,
    },
    {
    path: "/gallery",
    component: gallery,
    },

];


export const router = createRouter({
    routes,
    history: createWebHistory()
});