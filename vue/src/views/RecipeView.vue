<script setup>
import Box from "@/components/Box.vue";
import MainLayout from "@/components/MainLayout.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getRecipeById } from "@/api/client";
import RecipeIngredients from "@/components/RecipeIngredients.vue";
import RecipeInstructions from "@/components/RecipeInstructions.vue";
const router = useRouter();

/**
 * @typedef {import("@/api/client").Recipe} Recipe
 */

/**
 * @type {import("vue").Ref<Recipe> | undefined}
 */
let recipe = ref();

onMounted(async () => {
	recipe.value = await getRecipeById(
		Number(router.currentRoute.value.params.id),
	);
});
</script>

<template>
	<MainLayout>
		<Box
			title-styles="font-bold text-white text-2xl"
			v-if="recipe"
			:title="recipe.title"
		>
			<div class="flex flex-col gap-6">
				<div class="mt-10 grid grid-cols-[1.25fr_0.75fr] gap-6">
					<RecipeIngredients :ingredients="recipe.ingredients" />
					<img
						:src="recipe.images.main.url"
						:alt="recipe.images.main.alt"
						class="w-full rounded-3xl"
					/>
				</div>
				<RecipeInstructions :instructions="recipe.instructions" />
			</div>
		</Box>
	</MainLayout>
</template>
