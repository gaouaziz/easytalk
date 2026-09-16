<template>
  <section
    id="about"
    class="bg-gray-50 py-16 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Image (Forcée à GAUCHE sur grand écran grâce à lg:order-first, passe en dessous sur mobile) -->
        <div class="lg:order-first w-full">
          <div class="relative overflow-hidden rounded-3xl bg-[#06213d] shadow-xl aspect-video lg:aspect-[4/3] xl:aspect-[16/10]">
            <NuxtImg
              src="/images/easy-talk-about.png"
              alt="EasyTalk live online English learning dashboard"
              class="h-full w-full object-cover object-center transform transition duration-500 hover:scale-103"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Content (Déplacé à DROITE sur grand écran grâce à lg:order-last) -->
        <div class="lg:order-last max-w-xl lg:max-w-none">
          <span
            class="text-sm font-bold uppercase tracking-wider text-orange-500"
          >
            About EasyTalk
          </span>

          <h2
            class="mt-4 text-4xl font-extrabold tracking-tight text-[#06213d] sm:text-5xl"
          >
            A place to practice,
            <span class="block text-orange-500 lg:inline">communicate and grow.</span>
          </h2>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            EasyTalk is dedicated to helping people who want to improve
            their English and feel more comfortable speaking it.
          </p>

          <p class="mt-4 leading-7 text-gray-600">
            Our approach focuses on practical communication and regular
            practice. The goal is to create a learning experience where
            English becomes something you actively use rather than simply
            study.
          </p>

          <!-- Grille des fonctionnalités thématiques -->
          <div class="mt-8 grid gap-5 sm:grid-cols-2">
            <!-- Carte 1 -->
            <div class="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition hover:shadow-md">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-500 transition group-hover:scale-110"
              >
                💬
              </div>

              <h3 class="mt-4 font-bold text-gray-900 text-lg">
                Practice
              </h3>

              <p class="mt-2 text-sm leading-6 text-gray-600">
                Improve through regular English practice covering grammar, vocabulary, and real-time conversation.
              </p>
            </div>

            <!-- Carte 2 -->
            <div class="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition hover:shadow-md">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600 transition group-hover:scale-110"
              >
                🎯
              </div>

              <h3 class="mt-4 font-bold text-gray-900 text-lg">
                Confidence
              </h3>

              <p class="mt-2 text-sm leading-6 text-gray-600">
                Build true confidence when communicating with native styles and modern visual tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
