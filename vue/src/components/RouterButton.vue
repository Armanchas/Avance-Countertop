<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
	to: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<RouterLink
		:to="props.to"
		class="flex items-center justify-center rounded-full bg-stone-950 px-3 py-2 font-bold text-white transition-colors hover:bg-stone-950/90"
	>
		<slot />
	</RouterLink>
</template>
