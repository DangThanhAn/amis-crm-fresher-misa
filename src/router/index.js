//B1: Cài đặt vue router
//B2: import router 
import { createRouter, createWebHistory } from 'vue-router'
import LeadAdd from "../components/pages/LeadAdd.vue";
import MainPage from "../components/pages/MainPage.vue"
import LeadDetails from "../components/pages/LeadDetails.vue"
import LeadEdit from "../components/pages/LeadEdit.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "", component: MainPage },
        { path: "/add", component: LeadAdd },
        { path: '/lead/view/:id', component: LeadDetails },
        { path: '/lead/edit/:id', component: LeadEdit },
    ],
})

export default router