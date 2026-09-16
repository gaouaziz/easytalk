<template>
  <section id="learning" class="bg-[#06213d] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <!-- Image (À droite sur grand écran grâce à lg:order-last, en bas sur mobile) -->
        <div class="w-full lg:order-last">
          <div class="relative overflow-hidden rounded-3xl bg-[#041629] shadow-2xl border border-white/5 aspect-video lg:aspect-[4/3] xl:aspect-[16/10]">
            <NuxtImg
              src="/images/easy-talk-learning.png"
              alt="EasyTalk English core skills platform dashboard"
              class="h-full w-full object-cover object-center transform transition duration-500 hover:scale-103"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Content (Reste à gauche sur grand écran) -->
        <div class="max-w-xl lg:max-w-none">
          <!-- Surtitre axé sur la conversation -->
          <span
            class="text-sm font-bold uppercase tracking-wider text-orange-400"
          >
            Conversational Learning
          </span>

          <!-- Titre fort axé sur la simplicité et l'expression orale -->
          <h2
            class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            The easiest way to learn
            <span class="text-orange-400">is simply by talking.</span>
          </h2>

          <!-- Paragraphe d'introduction ajusté -->
          <p class="mt-6 text-lg leading-8 text-white/70">
            Skip the complicated methods. With EasyTalk, you join online conversations
            that make learning natural, interactive, and incredibly simple.
          </p>

          <!-- Liste des étapes synchronisée avec l'illustration -->
          <div class="mt-10 space-y-6">

            <!-- Étape 1 : Écoute et Expression -->
            <div class="group flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white transition group-hover:bg-orange-400 group-hover:scale-110"
              >
                1
              </div>

              <div>
                <h3 class="font-semibold text-white transition group-hover:text-orange-400">
                  Core Skills Integration
                </h3>

                <p class="mt-1 text-sm leading-6 text-white/60">
                  Master **Listening, Speaking, Reading, and Writing** simultaneously through active multimedia courses.
                </p>
              </div>
            </div>

            <!-- Étape 2 : Vidéo et multimédia -->
            <div class="group flex gap-4">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white transition group-hover:bg-orange-400 group-hover:scale-110">
                2
              </div>

              <div>
                <h3 class="font-semibold text-white transition group-hover:text-orange-400">
                  Interactive Video Learning
                </h3>

                <p class="mt-1 text-sm leading-6 text-white/60">
                  Engage with dynamic video content and intuitive visual contexts that make everyday topics easy to absorb.
                </p>
              </div>
            </div>

            <!-- Étape 3 : Suivi de progression -->
            <div class="group flex gap-4">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white transition group-hover:bg-orange-400 group-hover:scale-110">
                3
              </div>

              <div>
                <h3 class="font-semibold text-white transition group-hover:text-orange-400">
                  Track Your Growth
                </h3>

                <p class="mt-1 text-sm leading-6 text-white/60">
                  Monitor your personal speaking confidence and fluency metrics step-by-step as you progress.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
