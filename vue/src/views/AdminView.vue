<script setup>
import { ref, onMounted } from 'vue';
import { getAllRecipes, getAllUsers, deleteRecipe, deleteUser } from '@/api/client';
import Box from '@/components/Box.vue';

const recipes = ref([]);
const users = ref([]);

onMounted(async () => {
    recipes.value = await getAllRecipes();
    users.value = await getAllUsers();
});

const handleDeleteRecipe = async (recipeId) => {
    const success = await deleteRecipe(recipeId);
    if (success) {
        recipes.value = recipes.value.filter(recipe => recipe.id !== recipeId);
    }
};

const handleDeleteUser = async (userId) => {
    const success = await deleteUser(userId);
    if (success) {
        users.value = users.value.filter(user => user.id !== userId);
    }
};
</script>

<template>
    <div class="admin-dashboard">
        <Box title="Admin Dashboard" class="my-16 mx-44 text-white">
            <div class=" my-8">
                <div class="flex justify-between py-6 bg-stone-600 rounded-3xl">
                    <h2 class="text-2xl font-semibold px-6">Recipes</h2>
                    <h2 class="text-2xl font-semibold px-6">Action</h2>
                </div>
                <ul>
                    <li v-for="recipe in recipes" :key="recipe.id" class="flex justify-between items-center py-3 my-5 bg-stone-500 rounded-3xl">
                        <div>
                            <span class="font-semibold mx-4 ">{{ recipe.title }}</span> by User ID: {{ recipe.user_id }}
                        </div>
                        <button @click="handleDeleteRecipe(recipe.id)" class="bg-red-700 text-white px-4 py-2 mx-4 rounded">Delete</button>
                    </li>
                </ul>
            </div>
            <div class="my-8">
                <div class="flex justify-between py-6 bg-stone-600 rounded-3xl mt-12">
                    <h2 class="text-2xl font-semibold px-6">Users</h2>
                    <h2 class="text-2xl font-semibold px-6">Action</h2>
                </div>
                <ul>
                    <li v-for="user in users" :key="user.id" class="flex justify-between items-center py-3 my-5 bg-stone-500 rounded-3xl">
                        <div>
                            <span class="font-semibold mx-4">{{ user.username }}</span> ({{ user.email }})
                        </div>
                        <button @click="handleDeleteUser(user.id)" class="bg-red-700 text-white px-4 py-2 mx-4 rounded">Delete</button>
                    </li>
                </ul>
            </div>
        </Box>
    </div>
</template>