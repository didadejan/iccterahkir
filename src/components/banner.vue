<script setup>
defineProps({
    tittle:"",
    color:"",
    textcolor:"",
    image:"",
    desc:"",
    isShow: false,
})
</script>


<template>
<main :class="color" class="flex bg-slate-700 h-screen w-full justify-center p-10">
<div class="flex items-center justify-between w-full">
    <div class="flex flex-col">
    <h1 class="text-white font-bold text-5xl">{{tittle}}</h1>
    <p v-if="isShow" class="max-w-sm">
        {{ desc }}
    </p>
</div>
<img width="300" :src="image" alt=""/>
</div>
</main>
</template>