<script setup>
import { ref } from "vue";
import Navbar from '../components/navbar.vue';
import banner from '../components/banner.vue';
import suparman from "../assets/1.png";

const isModalShow = ref(false);
</script>
<template>
<Navbar @open-modal="isModalShow = true" tampilan="true" />
<banner tittle="Ini Home" color="bg-yellow-400"  :image="suparman"/>

</template>