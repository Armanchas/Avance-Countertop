<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { loginUser } from "@/api/client";
import RouterButton from "@/components/RouterButton.vue";

const router = useRouter();

const user = reactive({
	username: "",
	password: "",
});

const error = ref();

/**
 * 
 * @param event {SubmitEvent}
 */
const onSubmit = async (event) => {
	event.preventDefault();
	const response = await loginUser(user.username, user.password);
	console.log(response);
	if (!response){
		error.value = "Username or password are incorrect";
	}
	router.push("/");
}

</script>

<template>
	<main class="h-max">
		<div>
			<div class="flex p-5 absolute">
				<RouterButton to="/" class="w-32">Back</RouterButton>
			</div>
			<div class="flex h-screen items-center justify-around">
				<h1 class="text-5xl font-bold max-w-96 leading-[60px] text-center">Log into the countertop!</h1>
				<form
					@submit="onSubmit" class="flex flex-col rounded-3xl border border-stone-900 bg-stone-400 p-5 text-center w-96"
				>
					<h2 class=" pt-3 pb-7 text-2xl font-bold text-white">
						Log into your account
					</h2>
					<div class="flex flex-col ">
						<div class="flex flex-col py-10">
							<label class="text-white font-semibold p-2" for="username">Username</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Username..."
								type="text"
								:name="'username'"
								v-model="user.username"
								required
							/>
						</div>
						<div class="flex flex-col py-10">
							<label class="text-white font-semibold p-2" for="password">Password</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Password..."
								type="password"
								:name="'password'"
								v-model="user.password"
								required
							/>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center">
						<p v-if="error" class="text-red-600">{{ error }}</p>
						<button type="submit" class="w-32 flex items-center justify-center rounded-full bg-stone-950 px-3 py-2 font-bold text-white transition-colors hover:bg-stone-950/90"
							>Log in</button
						>
					</div>
					<div class="py-5">
						<p>Don't have an account?</p>
						<RouterLink to="/register" class=" hover:underline font-medium">You can sign up here!</RouterLink>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>
