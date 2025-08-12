<template>
  <section class="bg-black min-h-screen flex flex-col md:flex-row items-center justify-between px-10">
    <!-- Text -->
    <div class="text-white space-y-6 font-serif max-w-lg">
      <h1 class="text-5xl font-bold">
        ITS <br>
        JOHN<span class="text-teal-300">ELLY</span>
      </h1>
      <p class="font-bold text-lg">
        Hi there. It's nice to meet you — welcome to my Personal Portfolio.
        I love building apps & websites, collaborating in teams, and discovering new things.
        Building automated digital systems for a smart future.
      </p>
      <p class="text-2xl text-teal-300">Founder @ SmartMinds.tech</p>

      <!-- Buttons -->
      <div class="flex space-x-6">
        <button class="bg-teal-400 px-4 py-2 rounded-xl font-semibold hover:bg-teal-600 transition">HIRE ME</button>
        <button class="bg-teal-400 px-4 py-2 rounded-xl font-semibold hover:bg-teal-600 transition">DOWNLOAD CV</button>
      </div>

      <!-- Socials -->
      <div class="flex space-x-4 text-3xl text-gray-400 mt-6">
        <a href="#" class="hover:text-blue-700"><i class='bx bxl-facebook'></i></a>
        <a href="#" class="hover:text-white"><i class='bx bxl-github'></i></a>
        <a href="#" class="hover:text-blue-600"><i class='bx bxl-linkedin'></i></a>
        <a href="#" class="hover:text-green-500"><i class='bx bxl-whatsapp'></i></a>
        <a href="#" class="hover:text-pink-600"><i class='bx bxl-instagram'></i></a>
        <a href="#" class="hover:text-sky-400"><i class='bx bxl-twitter'></i></a>
      </div>
    </div>

    <!-- Image -->
    <img :src="require('@/assets/images/PSX_20250421_111211.jpg')" alt="John Elly" class="rounded-b-full shadow-lg w-80 animate-bounce-slow">
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
