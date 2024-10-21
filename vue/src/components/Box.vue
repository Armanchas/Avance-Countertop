<script setup>
import { clsx } from "clsx";

/**
 * @typedef {Object} Props
 * @prop {string} title
 * @prop {boolean} centered
 * @prop {string} bgColor
 * @prop {string?} titleStyles
 */

/**
 * @type {Props}
 */
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	centered: {
		type: Boolean,
		default: false,
	},
	bgColor: {
		type: String,
		default: "",
	},
	titleStyles: {
		type: String,
		required: false,
	},
});
</script>

<template>
	<div
		:class="
			clsx(
				'rounded-3xl p-4',
				props.bgColor ? props.bgColor : 'bg-[#B6B0A4]',
			)
		"
	>
		<h2
			:class="
				clsx(
					props.centered && 'text-center',
					props.titleStyles
						? props.titleStyles
						: 'text-xl font-bold text-white underline',
				)
			"
		>
			{{ props.title }}
		</h2>
		<slot />
	</div>
</template>
