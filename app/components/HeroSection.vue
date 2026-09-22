<template>
  <section
    id="home"
    class="relative isolate overflow-hidden bg-[#06213d]"
  >
    <!-- Decorative background -->
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(249,115,22,0.10),transparent_30%)]"
    />

    <div
      class="mx-auto flex min-h-[720px] max-w-7xl items-center px-4 sm:px-6 py-20 lg:py-28 lg:px-8"
    >
      <div
        class="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <!-- TEXT (Optimisé avec des animations d'entrée) -->
        <div
          dir="rtl"
          class="order-1 relative z-10 max-w-2xl text-right lg:order-1"
        >
          <!-- Badge -->
          <span
            class="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-orange-300 backdrop-blur-sm transition-all duration-300 hover:bg-orange-400/20"
          >
            ✨ تعلّم الإنجليزية بطريقة بسيطة وفعّالة
          </span>

          <!-- Heading (Hauteur de ligne réajustée pour la Darija) -->
          <h1
            class="mt-6 text-3xl font-extrabold leading-[1.3] text-white sm:text-5xl lg:text-6xl tracking-tight"
          >
            بارك عليك ما تعلم الانجليزية بالطرق التقليدية
            بدا دابا بطريقة جديدة اللي غاتخليك
            <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              تهضر وتكتب بحال شي ميريكاني
            </span>
          </h1>

          <!-- Description (Rendu de lecture plus fluide) -->
          <p
            class="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg lg:text-xl"
          >
            ولو أن الطرق التقليدية كتخليك تكتسب بعض الكلمات والقواعد، إلا أنها ما كتخليكش تعبّر، تتواصل وتهضر بالإنجليزية بمستوى متقدم.
          </p>
        </div>

        <!-- FORM -->
        <div
          class="order-2 w-full lg:order-2"
        >
          <HeroForm
            :is-submitting="loading"
            :is-success="success"
            @submit="onFormSubmit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const success = ref(false)

const onFormSubmit = async (payload) => {
  loading.value = true
  success.value = false

  try {
    console.log('Sending contact form:', payload)

    await $fetch('/api/contact', {
      method: 'POST',
      body: payload
    })

    console.log('Email sent successfully')

    success.value = true
  } catch (error) {
    console.error('Error sending form:', error)

    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Petite animation CSS native et légère pour le chargement du texte */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
