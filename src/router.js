import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import EventList from "./pages/EventList.vue";
import EventDetail from "./pages/EventDetail.vue";
import ProductsList from "./pages/ProductsList.vue";
import ProductSearch from "./pages/ProductSearch.vue";
import ProductsFiltered from "./pages/ProductsFiltered.vue";
import AppCheckout from "./pages/AppCheckout.vue";
import AppSuccessful from "./pages/AppSuccessful.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHome,
      props: true
    },
    {
      path: "/",
      name: "Restaurants",
      component: AppHome,
      props: true
    },
    {
      path: "/restaurants/:id",
      name: "Restaurant-detail",
      component: EventDetail,
      props: true,
    },
    {
      path: "/products",
      name: "Products",
      component: ProductsList,
    },
    {
      path: "/search",
      name: "ProductSearch",
      component: ProductSearch,
    },
    {
      path: "/update",
      name: "ProductsFiltered",
      component: ProductsFiltered,
    },
    {
      path: "/checkout",
      name: "AppCheckout",
      component: AppCheckout,
    },
    {
      path: "/successful",
      name: "AppSuccessful",
      component: AppSuccessful
    },
  ],
});

export { router };
