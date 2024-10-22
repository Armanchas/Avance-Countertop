<script setup>
import { ref, reactive } from 'vue';
import MainLayout from '@/components/MainLayout.vue';
import Box from '@/components/Box.vue';

const recipe = reactive({
    ingredients: [],
    steps: [],
    title: '',
    images: {
        main: {
            url: '',
            alt: ''
        },
        thumbnail: {
            url: '',
            alt: ''
        }
    },
    cook_time_minutes: 0,
    categories: [],
});

const categories = ref([
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack',
])

const addIngredient = () => {
    recipe.ingredients.push({
        name: '',
        amount: '',
        measurement: ''
    });
};

const addStep = () => {
    recipe.steps.push({
        description: ''
    });
};

const removeIngredient = (index) => {
    recipe.ingredients.splice(index, 1);
};

const removeStep = (index) => {
    recipe.steps.splice(index, 1);
};

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            recipe.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};
</script>

<template>
    <MainLayout>
        <Box title="Post your own recipe!">
            <form class="flex justify-between">
                <div class=" w-96">
                    <div class=" flex flex-col">
                        <h2 class="text-white text-2xl font-semibold pt-8"> Recipe title</h2>
                        <input v-model="recipe.title" placeholder="Title" class="border border-stone-900 rounded-2xl p-2 text-black" type="text" required/>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-white text-2xl font-semibold pt-8">Ingredients</h2>
                        <button @click="addIngredient" class="bg-stone-950 hover:bg-stone-800 text-white font-semibold py-2 px-4 rounded mt-4">Add Ingredient</button>
                    </div>
                    <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="relative">
                        <div class="flex flex-col text-white">
                            <h3 class="text-white font-semibold text-xl pt-8">Ingredient {{ index + 1 }}</h3>
                            <label class="py-2 font-semibold">Name:</label>
                            <input v-model="ingredient.name" placeholder="ingredient name" class="border border-stone-900 rounded-2xl p-2 text-black" type="text" required/>
                            <label class="py-2 font-semibold">Amount:</label>
                            <input v-model="ingredient.amount" placeholder="amount of ingredient" class="border border-stone-900 rounded-2xl p-2 text-black" type="text" required/>
                            <label class="py-2 font-semibold">Measurement:</label>
                            <input v-model="ingredient.measurement" placeholder="gram, liter, kg..." class="border border-stone-900 rounded-2xl p-2 text-black" type="text" required/>
                            <button @click="removeIngredient(index)" class="absolute top-9 right-0 bg-stone-950 hover:bg-stone-800 text-white rounded-full w-6 h-6 flex items-center justify-center">x</button>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-white text-2xl font-semibold pt-8">Instructions</h2>
                        <button @click="addStep" class="bg-stone-950 hover:bg-stone-800 text-white font-semibold py-2 px-4 rounded mt-4">Add Step</button>
                    </div>
                    <div v-for="(step, index) in recipe.steps" :key="index" class="relative">
                        <div class="flex flex-col">
                            <h3 class="text-white font-semibold pt-8">Step {{ index + 1 }}</h3>
                            <label class="text-white font-semibold py-2">Description:</label>
                            <input v-model="step.description" placeholder="description" class="border border-stone-900 rounded-2xl p-2 text-black" type="text" required/>
                            <button @click="removeStep(index)" class="absolute top-9 right-0 bg-stone-950 hover:bg-stone-950 text-white rounded-full w-6 h-6 flex items-center justify-center">x</button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col text-center">
                    <div>
                        <label for="recipe-image" class="text-white text-3xl font-bold bg-stone-500 min-h-64 items-center text-center flex py-52 flex-col hover:bg-stone-600 hover:cursor-pointer rounded-3xl p-3">Upload an image for your recipe!</label>
                        <input type="file" id="recipe-image" name="recipe-image" accept="image/*" class="hidden" @change="handleImageUpload" required/>
                        <div v-if="recipe.imageUrl" class="mt-4">
                            <img :src="recipe.imageUrl" alt="Recipe Image" class="w-32 h-32 object-cover rounded-lg mx-auto" />
                        </div>
                    </div>
                    <div>
                        <h3 class="text-white text-2xl font-semibold pt-8">Estimated cook time in minutes</h3>
                        <input v-model="recipe.cook_time_minutes" placeholder="minutes" class="border border-stone-900 rounded-2xl p-2 text-black" type="number" required/>
                        <h3 class="text-white text-2xl font-semibold pt-8">Recipe category</h3>
                        <select v-model="recipe.category" class="border border-stone-900 rounded-2xl p-2 text-black">
                            <option disabled value="">Select a category</option>
                            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                        </select>
                    </div>
                </div>
            </form>
        </Box>
    </MainLayout>
</template>