import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import EventList from "./pages/EventList.vue";
import EventDetail from "./pages/EventDetail.vue";
import ProductsList from "./pages/ProductsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHome,
    },
    {
      path: "/restaurants",
      name: "Restaurants",
      component: EventList,
    },
    {
      path: "/restaurants/:id",
      name: "Restaurant-detail",
      component: EventDetail,
      props: true
    },
    {
      path: "/products",
      name: "Products",
      component: ProductsList
    },
  ],
});

export { router };
