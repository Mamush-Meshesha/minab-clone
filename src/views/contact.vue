<script setup>
import { computed, ref } from "vue";
import { useGeolocation } from "@/useGeolocation";

const { coords } = useGeolocation();

const currPos = computed(() => ({
  lat: coords.value.latitude,
  lng: coords.value.longitude,
}));
</script>

<template>
  <div class="bg-[#E5E5E5]">
    <div class="mx-auto container py-20">
      <div class="flex justify-center">
        <h1 class="text-5xl font-bold">Mam</h1>
      </div>
      <div>
        <h1 class="text-xl font-bold">find us here</h1>
        Latitude: {{ currPos.lat.toFixed(2) }}, Longtide:
        {{ currPos.lng.toFixed(2) }},

        <div class=" flex justify-center pt-20">
          <div class="bg-[#fff] w-[50%] h-[600px] flex items-center justify-center rounded-md">
            <div class="">
              <div class="flex flex-col items-center w-[500px] py">
                <input type="text" placeholder="Email" class="w-[60%] my-5 bg-[#E5E5E5] h-12 px-4 rounded-md"/>
                <input type="tel" placeholder="Phone Number" class="w-[60%] mb-5 bg-[#E5E5E5] h-12 px-4 rounded-md"/>
                <input type="password" placeholder="Password" class="w-[60%] mb-5 bg-[#E5E5E5] h-12 px-4 rounded-md"/>
                <textarea
                  class="w-[60%] h-[300px] bg-[#E5E5E5] rounded-md"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
