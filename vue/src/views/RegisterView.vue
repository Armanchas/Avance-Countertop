<script setup>
import { reactive, ref } from "vue";
import { createUser } from "@/api/client";
import RouterButton from "@/components/RouterButton.vue";

const user = reactive({
	username: "",
	email: "",
	password: "",
	confirmed_password: "",
	profile_picture: {
		url: ""
	},
});

const error = ref();

/**
 * 
 * @param event {SubmitEvent}
 */
const onSubmit = async (event) => {
	event.preventDefault();
	const response = await createUser(user);
	console.log(response);
	if (!response){
		error.value = "Passwords do not match";
	}
};

</script>


<template>
	<main class="h-max">
		<div>
			<div class="flex p-5 absolute">
				<RouterButton to="/" class="w-32">Back</RouterButton>
			</div>
			<div class="flex h-screen items-center justify-around">
				<h1 class="text-5xl font-bold max-w-96 leading-[60px] text-center">Creating new account</h1>
				<form
					@submit="onSubmit" class="flex flex-col rounded-3xl border border-stone-900 bg-stone-400 p-5 text-center w-96"
				>
					<h2 class=" pt-3 pb-7 text-2xl font-bold text-white">
						Enter new account details
					</h2>
					<div class="flex flex-col ">
						<div class="flex flex-col py-5">
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
                        <div class="flex flex-col py-3">
							<label class="text-white font-semibold p-2" for="username">Email</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Email..."
								type="text"
								:name="'email'"
								v-model="user.email"
								required
							/>
						</div>
						<div class="flex flex-col py-3">
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
                        <div class="flex flex-col py-3">
							<label class="text-white font-semibold p-2" for="password">Repeat password</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Password..."
								type="password"
								:name="'confirmed_password'"
								v-model="user.confirmed_password"
								required
							/>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center py-5">
						<p v-if="error" class="text-red-600 pb-5">{{ error }}</p>
						<button
							type="submit" class="bg-stone-950 hover:bg-stone-800 text-white font-semibold py-2 px-4 rounded-full w-32"
						>
							Sign up!
						</button>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>
