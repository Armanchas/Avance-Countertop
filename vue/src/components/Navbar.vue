<script setup>
import { RouterLink } from "vue-router";
import RouterButton from "@/components/RouterButton.vue";
</script>

<template>
	<header class="py-3">
		<nav
			class="flex items-center justify-between rounded-full border-2 border-stone-900 p-2 text-justify font-semibold"
		>
			<img
				src="@/assets/images/logo.jpeg"
				alt="Logo"
				class="mx-2 w-12 rounded-full"
			/>
			<RouterLink to="/">Cooking tips</RouterLink>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/search">Browse</RouterLink>
			<RouterLink to="/post">Post recipe</RouterLink>
			<RouterButton to="/login">Sign up / Log in</RouterButton>
		</nav>
	</header>
</template>
