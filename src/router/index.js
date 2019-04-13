import Vue from "vue";
import Router from "vue-router";

import WitcherList from "../components/WitcherList";
import CreateChar from "../components/CreateChar";
import CharDetails from "../components/CharDetails";
import CharDetailsTwo from "../components/CharDetailsTwo";

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
      path: "/details/:id",
      name: "Details",
      component: CharDetails
    },
    {
      path: "/detailsTwo/:id",
      name: "DetailsTwo",
      component: CharDetailsTwo
    }
  ],
  mode: "history"
});
