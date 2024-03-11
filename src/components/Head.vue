<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-[#e5e5e5] fixed w-screen border-b-4 z-50">
    <header class="mx-[3%] flex justify-between">
      <div class="h-20 flex items-center">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/responsible-care-logo-png-transparent.png"
          alt=""
          class="w-[200px] h-full object-contain"
        />
      </div>
      <div class="flex items-center">
        <RouterLink to="/">
          <div>
            <button
              class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
            >
              Home
            </button>
          </div>
        </RouterLink>
        <RouterLink to="/about">
          <div>
            <button
              class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
            >
              About
            </button>
          </div>
        </RouterLink>
        <RouterLink to="/team">
          <div>
            <button
              class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
            >
              Teams
            </button>
          </div>
        </RouterLink>
        <RouterLink to="/service">
          <div>
            <button
              class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
            >
              Services
            </button>
          </div>
        </RouterLink>
        <RouterLink to="/project">
          <div>
            <button
              class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
            >
              Projects
            </button>
          </div>
        </RouterLink>
        <RouterLink to="/partner">
          <div>
            <button
              class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
            >
              Partners
            </button>
          </div>
        </RouterLink>
        <div class="pl-20">
          <RouterLink to="/contact">
            <div>
              <button
                class="px-5 font-serif font-bold text-xl text-[#92799d] focus:text-[#6d4a7d]"
              >
                Contacts
              </button>
            </div>
          </RouterLink>
        </div>
      </div>
    </header>
  </div>
</template>
