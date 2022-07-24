<script setup>
import { ref } from 'vue';
import modal from '../components/modal.vue';
import { database } from '../server';
const emits = defineEmits(['openModal'])
const isAuthenticated = ref(false);
const currentFullname = ref("");
const isModalShow = ref(false);
const isLogin = ref(false);

const openModalLogin = () => {
    emits('openModal')
    isModalShow.value = true;
    isLogin.value = true;
};

const openModalRegister = () => {
    emits('openModal')
    isModalShow.value = true;
    isLogin.value = false;
};

const email = ref("")
const password = ref("")
const namaLengkap = ref("")
const passwordK = ref("")

const isLoginFormValid = () => {
    return email.value.includes("@") && email.value.length > 5 && password.value.length > 6
};

const isRegisterFormValid = () => {
    return email.value.includes("@") && email.value.length > 5 && password.value.length > 6 && passwordK.value === password.value && namaLengkap.value.length > 5
};

const submitLogin = () => {
    currentFullname.value = database.value.filter((x) => x.email === email.value).map((x) => x.namaLengkap)[0]
    isModalShow.value = false;
    isAuthenticated.value = true;
    email.value = "";
    password.value = "";
};

const submitRegister = () => {
    const payload = {
        id: new Date(),
        namaLengkap: namaLengkap.value,
        email: email.value,
        password: password.value,
    };
    database.value.push(payload)
    isModalShow.value = false;
    email.value = "";
    password.value = "";

};

const isLogout = () => {
    currentFullname.value = "";
    isAuthenticated.value = false;
};
defineProps({
    color:"",
    tampilan:false
});
</script>

<template>
<header :class="color" class="bg-teal-200 w-full flex h-[60px] items-center gap-x-6 px-6 sticky top-0">
    <figure>
        <figcaption><img src="../assets/3.png" width="50" alt=""></figcaption>
    </figure>
    <nav class="flex justify-between items-center w-full">
        <div class="flex gap-x-4">
            <router-link to="/">
            <span class="font-bold text-xl uppercase">home</span>
            </router-link>

            <router-link to="/about">
            <span class="font-bold text-xl uppercase">about</span>
            </router-link>

            <router-link to="/gallery">
            <span class="font-bold text-xl uppercase">gallery</span>
            </router-link>
        </div>
        <div class="flex gap-x-4" v-if="isAuthenticated">
            <span class="font-bold text-xl uppercase cursor-pointer">{{ namaLengkap }}</span>
            <span @click="isLogout()" class="font-bold text-xl uppercase cursor-wait">logout</span>
        </div>

        <div class="flex gap-x-4" v-else>
            <span @click="openModalLogin()" class="font-bold text-xl uppercase cursor-pointer">Login</span>
            <span @click="openModalRegister()" class="font-bold text-xl uppercase cursor-wait">Register</span>
        </div>
    </nav>
</header>
<modal v-if="isModalShow" @close-modal="isModalShow = false" :tittle="isLogin ? 'Login' : 'Register'" :btn-text="isLogin ? 'Login' : 'Register'" :isValid=" isLogin ? !isLoginFormValid() : !isRegisterFormValid()" @submit-modal="isLogin ? submitLogin() : submitRegister()">

<form>
  <div class="mb-6" v-if="!isLogin">
    <label for="namaLengkap" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama lengkap</label>
    <input v-model="namaLengkap" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abusken email maneh" required="">
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
    <input v-model="email" type="email" id="email" placeholder="abusken email na" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
  </div>
  

  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
    <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abusken password maneh" required="">
  </div>
  <div class="mb-6" v-if="!isLogin">
    <label for="passwordK" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Konfirmasi Password</label>
    <input v-model="passwordK" type="password" id="passwordkadua" placeholder="abusken password na" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
</form>
</modal>
</template>