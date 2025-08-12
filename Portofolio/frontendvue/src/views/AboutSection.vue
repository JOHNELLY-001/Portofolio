<template>
  <section class="bg-black text-white min-h-screen px-10 py-16 font-serif">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-teal-300">About Me</h2>
      <p class="text-gray-400 mt-3 text-lg">A musician and developer blending art with code</p>
    </div>

    <!-- Content Grid -->
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Image -->
      <div class="flex justify-center">
        <img :src="require('@/assets/images/PSX_20250421_111211.jpg')"  alt="John Elly" 
             class="rounded-2xl shadow-lg w-80 hover:scale-105 transform transition duration-500">
      </div>

      <!-- Text -->
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">
          I’m <span class="text-teal-300 font-bold">John Elly</span> — a passionate 
          <span class="text-teal-400">musician</span> and 
          <span class="text-teal-400">software developer</span> who loves building impactful digital experiences while creating soulful music.  
          My journey has been about merging creativity with technology to inspire and solve problems.
        </p>

        <!-- Skills -->
        <div>
          <h3 class="text-2xl font-bold text-teal-300 mb-4">What I Do</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="text-teal-400 mr-3"><i class='bx bx-music'></i></span>
              Writing, composing & performing original music
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-3"><i class='bx bx-code-alt'></i></span>
              Developing web & mobile applications
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-3"><i class='bx bx-brain'></i></span>
              Exploring AI & machine learning for creative projects
            </li>
            <li class="flex items-center">
              <span class="text-teal-400 mr-3"><i class='bx bx-rocket'></i></span>
              Collaborating with teams to bring ideas to life
            </li>
          </ul>
        </div>

        <!-- Fun Fact -->
        <blockquote class="border-l-4 border-teal-300 pl-4 italic text-gray-400">
          "Technology is the instrument, creativity is the music."
        </blockquote>
      </div>
    </div>
  </section>
</template>
