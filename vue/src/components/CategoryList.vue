<script setup>
import Box from "./Box.vue";
import Divider from "./Divider.vue";
</script>

<template>
	<Box title="Categories">
		<div class="flex flex-col gap-4 pt-4">
			<Divider />
			<div class="flex items-center justify-between px-4">
				<RouterLink
					to="/search?category=breakfast"
					class="text-lg font-semibold text-white"
					>Breakfast</RouterLink
				>
				<img
					class="h-[25px] w-[25px]"
					src="@/assets/images/icons/breakfast-icon.png"
					alt=""
				/>
			</div>
			<Divider />
			<div class="flex items-center justify-between px-4">
				<RouterLink
					to="/search?category=lunch"
					class="text-lg font-semibold text-white"
					>Lunch</RouterLink
				>
				<img
					class="h-[25px] w-[25px]"
					src="@/assets/images/icons/lunch-icon.png"
					alt=""
				/>
			</div>
			<Divider />
			<div class="flex items-center justify-between px-4">
				<RouterLink
					to="/search?category=dinner"
					class="text-lg font-semibold text-white"
					>Dinner</RouterLink
				>
				<img
					class="h-[25px] w-[25px]"
					src="@/assets/images/icons/dinner-icon.png"
					alt=""
				/>
			</div>
			<Divider />
			<div class="flex items-center justify-between px-4">
				<RouterLink
					to="/search?category=snacks"
					class="text-lg font-semibold text-white"
					>Snacks</RouterLink
				>
				<img
					class="h-[25px] w-[25px]"
					src="@/assets/images/icons/snacks-icon.png"
					alt=""
				/>
			</div>
			<Divider />
		</div>
	</Box>
</template>
