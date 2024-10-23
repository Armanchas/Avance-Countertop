import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import RecipeView from "@/views/RecipeView.vue";
import SearchView from "@/views/SearchView.vue";
import PostView from "@/views/PostView.vue";
import CookingTipsView from "@/views/CookingTipsView.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/register",
			name: "register",
			component: RegisterView,
		},
		{
			path: "/recipes/:id",
			name: "recipe",
			component: RecipeView,
		},
		{
			path: "/search",
			name: "search",
			component: SearchView,
		},
		{
			path: "/post",
			name: "post",
			component: PostView,
		},
		{
			path: "/tips",
			name: "tips",
			component: CookingTipsView,
		}

	],
});

export default router;
