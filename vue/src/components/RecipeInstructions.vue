<script setup>
import Box from "@/components/Box.vue";

/**
 * @typedef {Object} Props
 * @prop {import("@/api/client").Instruction[]} instructions
 */

/**
 * @type {Props}
 */
const props = defineProps({
	instructions: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<Box title="Instructions" bg-color="bg-[#757169]">
		<ol class="max-h-[300px] list-inside list-decimal overflow-y-auto pt-4">
			<li
				v-for="(instruction, index) in props.instructions.toSorted(
					(a, b) => a.order - b.order,
				)"
				:key="index"
				class="font-semibold text-white"
			>
				{{ instruction.description }}
			</li>
		</ol>
	</Box>
</template>
