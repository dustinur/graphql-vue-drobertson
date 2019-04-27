import Vue from "vue";
import Router from "vue-router";

import WitcherList from "../components/WitcherList";
import RestWitcherList from "../components/RestWitcherList";
import CreateChar from "../components/CreateChar";
import RestCreateChar from "../components/RestCreateChar";
import UpdateChar from "../components/UpdateChar";
import RestUpdateChar from "../components/RestUpdateChar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: WitcherList
    },
    {
      path: "/restlist",
      name: "RestWitcherList",
      component: RestWitcherList
    },
    {
      path: "/create",
      name: "Create",
      component: CreateChar
    },
    {
      path: "/rest-create",
      name: "RestCreateChar",
      component: RestCreateChar
    },
    {
      path: "/rest-update/:id",
      name: "RestUpdate",
      component: RestUpdateChar,
    },
    {
      path: "/update/:id",
      name: "Update",
      component: UpdateChar,
      props: () => ({
        character: {
          type: Object,
          required: true
        }
      })
    }
  ],
  mode: "history"
});
