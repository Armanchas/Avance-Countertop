<script setup>
/**
 * @typedef {Object} Props
 * @prop {import("@/api/client").Recipe} recipe
 */

/**
 * @type {Props}
 */
const props = defineProps({
	recipe: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="flex gap-6 py-4 pl-6">
		<img
			:src="recipe.images.thumbnail.url"
			:alt="recipe.images.thumbnail.alt"
			class="h-[75px] w-[75px] rounded-3xl"
		/>
		<div>
			<RouterLink
				:to="'/recipes/' + recipe.id"
				class="pb-5 text-white underline"
			>
				{{ recipe.title }}
			</RouterLink>
			<p class="text-white">Cook time: ~{{ recipe.cook_time_minutes }}</p>
		</div>
	</div>
</template>
