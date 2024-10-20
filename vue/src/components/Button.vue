<script setup>
const props = defineProps({
	href: {
		type: String,
		required: false,
	},
});
</script>

<template>
	<a
		v-if="props.href"
		:href="props.href"
		class="rounded-full bg-stone-950 px-3 py-2 font-bold text-white transition-colors hover:bg-stone-950/90 justify-center flex items-center"
	>
		<slot />
	</a>
	<button
		v-else
		class="rounded-full bg-stone-950 px-3 py-2 font-bold text-white transition-colors hover:bg-stone-950/90 justify-center flex items-center"
	>
		<slot />
	</button>
</template>
