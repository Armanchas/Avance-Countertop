<script setup>
import { getAllRecipes } from "@/api/client";
import Box from "@/components/Box.vue";
import CategoryList from "@/components/CategoryList.vue";
import FeaturedRecipes from "@/components/FeaturedRecipes.vue";
import MainLayout from "@/components/MainLayout.vue";
import { ref } from "vue";
import { onMounted } from "vue";

/**
 * @typedef {import("@/api/client").Recipe} Recipe
 */

/**
 * @type {import("vue").Ref<Recipe[]>}
 */
let recipes = ref([]);

onMounted(async () => {
	recipes.value = await getAllRecipes();
});
</script>

<template>
	<MainLayout>
		<main>
			<div class="relative m-auto flex items-center justify-center">
				<img
					src="@/assets/images/banner.png"
					alt=""
					class="h-[300px] w-full rounded-[30px] object-cover brightness-[0.4]"
				/>
				<span
					class="absolute px-[400px] text-center text-4xl font-extrabold text-white"
					>Join countless aspiring home cooks on a culinary
					journey</span
				>
			</div>
			<div
				class="mt-4 grid h-[500px] grid-cols-[1.25fr_0.75fr] gap-10 overflow-y-auto"
			>
				<FeaturedRecipes v-bind:recipes="recipes" />
				<CategoryList />
			</div>
		</main>
	</MainLayout>
</template>
