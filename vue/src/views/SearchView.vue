<script setup>
import Button from "@/components/Button.vue";
import MainLayout from "@/components/MainLayout.vue";
import { ref, watch } from "vue";
import { getAllRecipes, searchRecipes } from "@/api/client";
import SearchResult from "@/components/SearchResult.vue";
import { useRoute, useRouter } from "vue-router";
import Divider from "@/components/Divider.vue";

const route = useRoute();
const router = useRouter();

let recipes = ref([]);

/**
 * @param {SubmitEvent} event
 */
async function onSearchSubmit(event) {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	router.push({ query: { query: formData.get("query") } });
}

watch(async () => {
	if (!route.query.query) {
		recipes.value = await getAllRecipes();
		return;
	}

	recipes.value = await searchRecipes(route.query.query, []);
});
</script>

<template>
	<MainLayout>
		<div class="h-[800px] rounded-3xl bg-stone-400 p-4">
			<div class="flex justify-between">
				<h1 class="pl-2 text-xl font-bold text-white">Search</h1>
				<form @submit="onSearchSubmit" class="flex gap-4">
					<input
						class="rounded-full p-2 border border-stone-800"
						placeholder="Search"
						name="query"
						:value="$route.query.query"
						type="text"
					/>
				</form>
			</div>
			<div class="overflow-y-auto pt-4">
				<div v-for="(recipe, index) in recipes">
					<Divider />
					<SearchResult :recipe="recipe" />
					<Divider v-if="index + 1 === recipes.length" />
				</div>
			</div>
		</div>
	</MainLayout>
</template>
