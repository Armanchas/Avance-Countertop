<script setup>
import RouterButton from "@/components/RouterButton.vue";
</script>

<template>
	<main class="h-max">
		<div>
			<div class="flex p-5 absolute">
				<RouterButton to="/" class="w-32">Back</RouterButton>
			</div>
			<div class="flex h-screen items-center justify-around">
				<h1 class="text-5xl font-bold max-w-96 leading-[60px] text-center">Creating new account</h1>
				<div
					class="flex flex-col rounded-3xl border border-stone-900 bg-stone-400 p-5 text-center w-96"
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
								name="username"
							/>
						</div>
                        <div class="flex flex-col py-3">
							<label class="text-white font-semibold p-2" for="username">Email</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Email..."
								type="text"
								name="email"
							/>
						</div>
						<div class="flex flex-col py-3">
							<label class="text-white font-semibold p-2" for="password">Password</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Password..."
								type="password"
								name="password"
							/>
						</div>
                        <div class="flex flex-col py-3">
							<label class="text-white font-semibold p-2" for="password">Repeat password</label>
							<input
								class="border border-stone-900 rounded-2xl p-2"
								placeholder="Password..."
								type="password"
								name="password"
							/>
						</div>
					</div>
					<div class="flex justify-center items-center py-5">
						<RouterButton class="w-32" to="/login"
							>Sign up!</RouterButton
						>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
