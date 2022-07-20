<script setup>
import NavLogo from '@/assets/images/navLogo.png'
</script>


<template>
  <div class="navbar bg-white fixed top-0 h-[80px] drop-shadow-xl px-[10px]">
    <div class="flex-1">
      <router-link to="/">
      <img class="max-w-[235px] px-[10px]" :src="NavLogo" alt="#"/>
      </router-link>
      <div class="form-control flex flex-row items-center">
      <button class="btn bg-white border-none hover:bg-[#f8f8f8] mx-[6px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
<!--      <div class="form-control h-[36px]">-->
        <input type="text" placeholder="Search Products" class="input input-bordered bg-white h-[36px] px-4 focus:bg-[#f8f8f8] focus:outline-none" />
      </div>
    </div>
    <router-link to="/products">
      <div class="flex mr-[5px] cursor-pointer items-center">
        <span class="text-stone-500 mr-[10px] text-lg">CART</span>
        <div class="w-[24px] h-[24px] rounded-xl bg-stone-500 flex justify-center"><span class="text-white">0</span></div>
      </div>
    </router-link>
  </div>
</template>

