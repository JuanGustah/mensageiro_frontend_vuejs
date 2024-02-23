import { createRouter, createWebHistory } from "vue-router";

import AdicionarUsuario from "../components/AdicionarUsuario.vue";
import ListagemUsuarios from "../components/ListagemUsuarios.vue";

const routes = [
    {
      path: "/", //URL relativo da rota
      name: "home", //nome da rota
      component: ListagemUsuarios,  //componente Vue associado à rota
    },
    {
      path: "/add",
      name: "adicionar",
      component: AdicionarUsuario,  
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

