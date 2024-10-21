<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
	<div class="h-screen">
		<div class="m-auto max-w-[1200px]">
			<Navbar />
			<slot />
		</div>
	</div>
</template>
