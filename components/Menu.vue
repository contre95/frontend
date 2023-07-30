<template>
  <div
    class="text-center min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"
  >
    <button
      class="middle none center mr-4 rounded-lg bg-slate-300 py-3 px-6 font-sans text-lg font-bold uppercase text-slate-500 shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      <NuxtLink to="/">home </NuxtLink>
    </button>
    <button
      class="middle none center mr-4 rounded-lg bg-slate-400 py-3 px-6 font-sans text-lg font-bold uppercase text-slate-600 shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      <NuxtLink to="/events">events </NuxtLink>
    </button>
    <button
      class="middle none center mr-4 rounded-lg bg-slate-500 py-3 px-6 font-sans text-lg font-bold uppercase text-white shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      <NuxtLink to="/events/temps"> Temps</NuxtLink>
    </button>
  </div>
</template>
