import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import EventList from "./pages/EventList.vue";
import EventDetail from "./pages/EventDetail.vue";
import TagsList from "./pages/TagsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHome,
    },
    {
      path: "/events",
      name: "Events",
      component: EventList,
    },
    {
      path: "/events/:id",
      name: "Event-detail",
      component: EventDetail,
      props: true,
    },
    {
      path: "/about",
      name: "About",
      component: AppAbout,
    },
    {
      path: "/tags",
      name: "Tags",
      component: TagsList,
    },
  ],
});

export { router };
