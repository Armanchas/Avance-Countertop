<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import RouterButton from "@/components/RouterButton.vue";

const userStore = useUserStore();
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
			<RouterLink to="/tips">Cooking tips</RouterLink>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/search">Browse</RouterLink>
			<RouterLink to="/post">Post recipe</RouterLink>
			<RouterButton v-if="!userStore.id" to="/login"
				>Sign up / Log in</RouterButton
			>
			<RouterButton v-if="userStore.id" to="/account"
				>Account</RouterButton
			>
		</nav>
	</header>
</template>
