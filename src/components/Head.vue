<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const heads = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "service" },
  { name: "Teams", id: "team" },
  { name: "Projects", id: "project" },
  { name: "Partners", id: "partner" },
  { name: "Contact", id: "contact" },
  { icon: "ph:desktop-bold", id: "desktop-bold" },
];

const about = ref("about");
</script>

<template>
  <div class="bg-[#e5e5e5] fixed w-screen border-b-4 z-50">
    <header class="mx-[3%] flex justify-between">
      <div class="h-20 flex items-center">
        <img
          src="https://www.minabtech.com/images/min_logo.png"
          alt=""
          class="w-[200px] h-12 object-contain"
        />
      </div>
      <div class="flex items-center">
        <div v-for="head in heads" :key="head.name">
          <button
            class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
          >
            {{ head.name }}
          </button>
          <button class="font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]">
            <Icon :icon="head.icon" />
          </button>
        </div>
        <RouterLink to="/service">about</RouterLink>
      </div>
    </header>
  </div>
</template>
