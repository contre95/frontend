<script setup lang="ts">
const { data: weather } = await useFetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m",
);
// const hw: Map<string, string> = new Map();
// const d: Map[] = [];
// // const time: string[] = weather.hourly.time
//
// for (let index = 0; index < 100; index++) {
//   hw.set("temp", weather.hourly.temperature_2m[index]);
//   hw.set("time", weather.hourly.time[index]);
//   hw.set("humi", weather.hourly.relativehumidity_2m[index]);
//   d.push(Map, hw);
// }
</script>

<template>
    <!-- The temperature is hola {{ hw }} -->
    <div v-for="index in 100">
      <div
          class="mb-4 rounded-lg text-center  bg-neutral-50 px-6 py-5 text-base text-neutral-600"
          role="alert"
          >
      The temperature is 
      {{ weather.hourly.temperature_2m[index] }}
      at 
      {{ weather.hourly.time[index] }}
    </div>
  </div>
</template>
