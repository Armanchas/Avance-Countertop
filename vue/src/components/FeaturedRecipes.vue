<script setup>
import Box from "@/components/Box.vue";
import Divider from "./Divider.vue";
import FeaturedRecipeItem from "./FeaturedRecipeItem.vue";

const props = defineProps({
	recipes: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<Box title="Featured recipes">
		<div class="flex flex-col overflow-y-auto py-4">
			<div v-for="(recipe, index) in props.recipes">
				<Divider />
				<FeaturedRecipeItem :recipe="recipe" />
				<Divider v-if="index + 1 === props.recipes.length" />
			</div>
		</div>
	</Box>
</template>
