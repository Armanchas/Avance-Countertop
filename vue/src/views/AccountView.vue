<script setup>
import Box from "@/components/Box.vue";
import MainLayout from "@/components/MainLayout.vue";
</script>

<template>
    <MainLayout>
        <Box title="Account">
            <div class="flex flex-col">
                <div class="flex justify-between">
                    <div class="flex flex-col p-12">
                        <label for="username" class="pt-6 font-semibold text-white text-lg">Username</label>
                        <input type="text" id="username" class="border border-stone-900 rounded-2xl p-2 text-black"/>
                        <label for="email" class="pt-6 font-semibold text-white text-lg">Email</label>
                        <input type="email" id="email" class="border border-stone-900 rounded-2xl p-2 text-black"/>
                        <label for="password" class="pt-6 font-semibold text-white text-lg">Password</label>
                        <input type="password" id="password" class="border border-stone-900 rounded-2xl p-2 text-black"/>
                    </div>
                    <div class="p-32 rounded-full">
                        <img src="../assets/images/user.png" alt="user profile picture">
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </Box>
    </MainLayout>
</template>