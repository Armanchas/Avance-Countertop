import { defineStore } from 'pinia';
import { ref } from 'vue';



export const useUserStore = defineStore('userStore', {
    state: () => {

        const id = ref(null);
        const username = ref(null);
        const email = ref(null);

        const localStorageData = localStorage.getItem('userStore')
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            id.value = parsedData.id;
            username.value = parsedData.username;
            email.value = parsedData.email;
        }
        return {
            id,
            username,
            email,
        }
    }
})