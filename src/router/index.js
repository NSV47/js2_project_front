import Vue from "vue";
import VueRouter from "vue-router";
import News from "../views/News.vue";
import Chat from "../views/Chat.vue";
import Store from "../views/Store.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "news",
    component: News
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat
  },
  {
    path: "/store",
    name: "store",
    component: Store
  }
];

const router = new VueRouter({
  routes
});

export default router;
