import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PostCreate from "@/views/PostCreate.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/post-create",
      name: "post-create",
      component: PostCreate,
    },
  ],
});

export default router;
