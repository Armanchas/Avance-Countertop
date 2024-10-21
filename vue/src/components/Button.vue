<script setup>
/**
 * @typedef {Object} Props
 * @prop {string | undefined} href
 */

/**
 * @type {Props}
 */
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
		class="flex items-center justify-center rounded-full bg-stone-950 px-3 py-2 font-bold text-white transition-colors hover:bg-stone-950/90"
	>
		<slot />
	</a>
	<button
		v-else
		class="flex items-center justify-center rounded-full bg-stone-950 px-3 py-2 font-bold text-white transition-colors hover:bg-stone-950/90"
	>
		<slot />
	</button>
</template>
