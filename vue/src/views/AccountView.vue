<script setup>
import { useUserStore } from "@/stores/userStore";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { logoutUser } from "@/api/client";
import Box from "@/components/Box.vue";
import MainLayout from "@/components/MainLayout.vue";

const userStore = useUserStore();

const router = useRouter();

const user = ref({
    username: userStore.username,
    email: userStore.email,
});

const logOutButton = () => {
    logoutUser();
    router.push("/");
};

</script>

<template>
    <MainLayout>
        <Box title="Account">
            <button @click="logOutButton" class="bg-stone-900 hover:bg-stone-800 text-white rounded-full p-2 my-5 w-24">Log out</button>
            <div class="flex flex-col">
                <div class="flex justify-between">
                    <div class="flex flex-col p-12">
                        <p class=" text-white text-2xl font-medium pt-6">Username:</p>
                        <p class=" text-white text-xl">{{ user.username }}</p>
                        <p class=" text-white text-2xl font-medium pt-6">Email:</p>
                        <p class=" text-white text-xl">{{ user.email }}</p> 
                    </div>
                    <div class="flex flex-col">
                        <div class="p-32 rounded-full">
                            <img src="../assets/images/user.png" alt="user profile picture">
                        </div>
                        <button class="bg-stone-900 hover:bg-stone-800 text-white rounded-full p-2">Change profile picture</button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </Box>
    </MainLayout>
</template>