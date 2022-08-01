<script setup>
import NavLogo from '@/assets/images/navLogo.png'
import Search from "~/components/Search";</script>


<template>
  <div class="navbar bg-white fixed top-0 h-[80px] drop-shadow-xl px-[10px]">
    <div class="flex-1">
      <router-link to="/">
      <img class="max-w-[235px] px-[10px]" :src="NavLogo" alt="#"/>
      </router-link>
      <Search/>
    </div>
    <router-link to="/products">
      <div class="flex mr-[5px] cursor-pointer items-center">
        <span class="text-stone-500 mr-[10px] text-lg">CART</span>
        <div class="w-[24px] h-[24px] rounded-xl bg-stone-500 flex justify-center"><span class="text-white">0</span></div>
      </div>
    </router-link>
  </div>
</template>

