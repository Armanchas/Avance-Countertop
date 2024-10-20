<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>

<template>
    <div class="h-screen bg-[#F0EBE1]">
        <div class="container m-auto">
            <Navbar />
            <slot />
        </div>
    </div>
</template>