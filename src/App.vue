<script setup>
import { RouterLink, RouterView } from "vue-router";
import Head from "@/components/Head.vue";
import About from "@/views/About.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const background = ref(
  "https://res.cloudinary.com/dtlezwrzm/image/upload/f_webp,q_auto:best,e_sharpen:100/minab_map_w2jaen.jpg"
);
</script>

<template>
  <div>
    <Head class="border-b-4 shadow" />
    <div class="relative top-20 pb-20">
      <div
        :style="{ backgroundImage: `url(${background})` }"
        class="w-full h-screen object-cover bg-cover bg-opacity-90 z-0"
        style="position: relative"
      >
        <div class="absolute inset-0 backdrop-filter backdrop-blur-md"></div>
      </div>
      <div class="absolute inset-0 flex z-0 pt-20 justify-center">
        <div class="flex flex-col">
          <img
            src="https://www.minabtech.com/images/min_logo.png"
            alt=""
            class="w-[650px] h-[230px]"
          />
          <h1
            class="text-6xl py-20 text-white text-center font-bold leading-[80px] font-serif"
          >
            From the cloud to clients,<br />
            we have all the
            <span class="text-[#6d4a7d] bg-white">answers.</span>
          </h1>
          <div class="flex justify-center relative">
            <button
              class="bg-[#481d5c] pl-[-176px] rounded-lg text-white w-[200px] h-14"
            >
              Let's discuss
            </button>
            <Icon
              icon="heroicons-outline:chat"
              class="absolute top-0 right-0 mr-[240px] mt-4 text-2xl text-white"
            />
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>
