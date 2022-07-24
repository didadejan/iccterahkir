<script setup>
import Navbar from '../components/navbar.vue';
import banner from '../components/banner.vue';
import suparman from "../assets/3.png";
</script>
<template>
<Navbar color="bg-white"/>
<banner tittle="Ini Gallery" color="bg-teal-400"  :image="suparman"/>
</template>