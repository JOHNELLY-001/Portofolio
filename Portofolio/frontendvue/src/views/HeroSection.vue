<template>
  <section class="bg-black min-h-screen flex flex-col md:flex-row items-center justify-between px-10">
    <!-- Text -->
    <div class="text-white space-y-6 font-serif  flex-col justify-items-center">
      <h1 class="text-5xl font-bold pt-6 ">
        IT's 
        JOHN<span class="text-teal-300">ELLY</span>
      </h1>

      <p class="font-bold text-lg lg:px-20">
        Hi there. It's nice to meet you — welcome to my Personal Portfolio.
        I love building apps & websites, collaborating in teams, and discovering new things.
        Building automated digital systems for a smart future.
      </p>

      <!-- Image -->
      <img :src="require('@/assets/images/PSX_20250426_164607.jpg')" alt="iamjohnelly" class="rounded-b-full shadow-lg w-80 animate-bounce-slow ">

      <p class="text-2xl text-teal-300 text-center sm:text-left">Founder @SmartMinds.tech</p>

      <!-- Buttons -->
      <div class="flex space-x-5">
        <button class="bg-teal-400 px-3 py-2 rounded-xl font-semibold hover:bg-teal-600 transition">HIRE ME</button>
        <button class="bg-teal-400 px-3 py-2 rounded-xl  font-semibold hover:bg-teal-600 transition">DOWNLOAD CV</button>
      </div>

      
    </div>

    
  </section>
</template>

<style>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}
</style>
