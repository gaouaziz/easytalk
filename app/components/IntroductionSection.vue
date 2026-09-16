<template>
  <section class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Inversion de l'ordre sur mobile (flex-col-reverse) pour que l'image apparaisse sous le texte si besoin, ou grille classique sur desktop -->
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- Image Wrapper adapté au format panoramique -->
        <div class="relative overflow-hidden rounded-3xl bg-sky-900 shadow-xl aspect-video lg:aspect-[4/3] xl:aspect-[16/10]">
          <!--
            Utilisation de NuxtImg avec object-center pour garder le personnage au milieu
            loading="lazy" est utilisé ici car cette section se trouve sous la ligne de flottaison (Hero)
          -->
          <NuxtImg
            src="/images/easy-talk-introduction.png"
            alt="Student practicing English online with EasyTalk platform"
            class="h-full w-full object-cover object-center transform transition duration-500 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Content -->
        <div class="max-w-xl lg:max-w-none">
          <span
            class="text-sm font-bold uppercase tracking-wider text-orange-500"
          >
            Introduction
          </span>

          <h2
            class="mt-4 text-4xl font-extrabold tracking-tight text-[#06213d] sm:text-5xl"
          >
            English becomes easier
            <span class="block text-orange-500 lg:inline">when you practice.</span>
          </h2>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            Learning English isn't only about memorizing grammar rules.
            It's about practicing, communicating and becoming comfortable
            expressing yourself.
          </p>

          <p class="mt-4 leading-7 text-gray-600">
            EasyTalk creates opportunities to practice English in a
            simple and accessible way, helping learners develop the
            confidence they need to communicate naturally.
          </p>

          <div class="mt-8">
            <a
              href="#learning"
              class="inline-flex rounded-full bg-[#06213d] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0c355e] hover:shadow-lg active:scale-95"
            >
              Learn more
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
