import Vue from "vue";
import Router from "vue-router";

import WitcherList from "../components/WitcherList";
import CreateChar from "../components/CreateChar";
import UpdateChar from "../components/UpdateChar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: WitcherList
    },
    {
      path: "/create",
      name: "Create",
      component: CreateChar
    },
    {
      path: "/update/:id",
      name: "Update",
      component: UpdateChar,
      props: (route) => ({
        character: {
          type: Object,
          required: true,
        },
        ...route.params
      })
    }
  ],
  mode: "history"
});
