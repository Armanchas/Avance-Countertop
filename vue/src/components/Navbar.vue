<script setup>
import { RouterLink } from "vue-router";
import RouterButton from "@/components/RouterButton.vue";
</script>

<template>
	<header class="py-3">
		<nav class="flex justify-between p-2 border-2 border-stone-900 rounded-full text-justify items-center font-semibold">
			<img src="@/assets/images/logo.jpeg" alt="Logo" class="mx-2 w-12 rounded-full" />
			<RouterLink to="/">Cooking tips</RouterLink>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/">Browse</RouterLink>
			<RouterLink to="/">Post recipe</RouterLink>
			<RouterButton to="/login">Sign up / Log in</RouterButton>
		</nav>
	</header>
</template>
