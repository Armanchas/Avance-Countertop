<script setup>
import Box from "@/components/Box.vue";
import { formatIngredientToString } from "@/utils";

/**
 * @typedef {Object} Props
 * @prop {import("@/api/client").Ingredient[]} ingredients
 */

/**
 * @type {Props}
 */
const props = defineProps({
	ingredients: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<Box title="Ingredients" bg-color="bg-stone-500">
		<ul class="list-inside list-disc overflow-y-auto pt-4 max-h-[400px]">
			<li
				v-for="(ingredient, index) in props.ingredients"
				:key="index"
				class="font-semibold text-white"
			>
				{{ formatIngredientToString(ingredient) }}
			</li>
		</ul>
	</Box>
</template>
