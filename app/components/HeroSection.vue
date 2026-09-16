<template>
  <section
    id="home"
    class="relative isolate overflow-hidden bg-[#06213d]"
  >
    <!-- Decorative background -->
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(249,115,22,0.10),transparent_30%)]"
    />

    <!-- Content -->
    <div
      class="mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-8"
    >
      <div class="grid w-full items-center gap-12 lg:grid-cols-2">
        <!-- Text -->
        <div class="relative z-10 max-w-2xl">
          <span
            class="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300"
          >
            Simplified online learning
          </span>

          <h1
            class="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Speak English
            <span class="text-orange-400">
              with confidence.
            </span>
          </h1>

          <p
            class="mt-6 max-w-xl text-lg leading-8 text-white/75 sm:text-xl"
          >
            EasyTalk is dedicated to practicing English and encouraging
            those who wish to speak English with greater confidence.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              class="rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-400"
            >
              Start practicing
            </a>

            <a
              href="#about"
              class="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Discover EasyTalk
            </a>
          </div>
        </div>

        <!-- Appel du nouveau composant isolé -->
        <HeroForm
          :is-submitting="loading"
          :is-success="success"
          @submit="onFormSubmit"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const success = ref(false)

// C'est ici que vous gérez la vraie logique d'envoi vers votre API
const onFormSubmit = async (_payload) => {
  loading.value = true

  try {
    // Simulation :
    await new Promise(resolve => setTimeout(resolve, 1200))

    success.value = true
  } catch (error) {
    console.error('Erreur serveur :', error)
  } finally {
    loading.value = false

    // CORRECTION 2 : Retour à la ligne pour l'instruction à l'intérieur du setTimeout
    setTimeout(() => {
      success.value = false
    }, 4000)
  }
}
</script>
