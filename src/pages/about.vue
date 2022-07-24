<script setup>
import { ref } from "vue";
import Navbar from '../components/navbar.vue';
import banner from '../components/banner.vue';
import suparman from "../assets/2.png";

const isDescShow = ref(false);

</script>
<template>
<Navbar color="bg-red-400" />
<banner @click="isDescShow = !isDescShow" tittle="Ini About" color="bg-gray-300" desc-color="text-white" tittle-color="text-white" :image="suparman" desc="Suparman akan menyelamatkan anda" :isShow="isDescShow" />
</template>