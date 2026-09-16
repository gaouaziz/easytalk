<template>
  <section id="faq" class="bg-gray-50 py-16 sm:py-24">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">

      <!-- En-tête de section -->
      <div class="mx-auto max-w-2xl text-center space-y-4">
        <span class="text-sm font-bold uppercase tracking-wider text-orange-500">
          Questions & Answers
        </span>
        <h2 class="text-4xl font-extrabold tracking-tight text-[#06213d] sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Everything you need to know about our conversational learning experience.
        </p>
      </div>

      <!-- Liste Accordéon Dynamique -->
      <div class="mt-12 space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-2xl border border-gray-200 bg-white p-1 transition-all duration-200 shadow-sm"
          :class="{ 'ring-2 ring-orange-500/20 border-orange-200': faq.isOpen }"
        >
          <!-- Bouton Question -->
          <button
            @click="toggleFaq(index)"
            class="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-[#06213d] outline-none transition group text-base sm:text-lg"
          >
            <span class="pr-4 group-hover:text-orange-500 transition-colors">
              {{ faq.question }}
            </span>
            <!-- Chevron SVG avec rotation active -->
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-transform duration-300 group-hover:bg-orange-100 group-hover:text-orange-500"
              :class="{ 'rotate-180 bg-orange-500 text-white group-hover:bg-orange-500 group-hover:text-white': faq.isOpen }"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </span>
          </button>

          <!-- Animation de déploiement de la réponse -->
          <div
            v-show="faq.isOpen"
            class="overflow-hidden transition-all duration-300 animate-slide-down"
          >
            <div class="px-6 pb-6 pt-1 text-sm sm:text-base leading-7 text-gray-600 border-t border-gray-100 mt-1 pt-4">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Liste des questions récurrentes pour EasyTalk
const faqs = ref([
  {
    question: "Do I need a high level of English to start?",
    answer: "Not at all! EasyTalk is designed precisely for learners who want to build confidence. Whether you are a beginner or looking to brush up on your skills, our conversational environment adapts to your pace.",
    isOpen: false
  },
  {
    question: "How do the online conversation sessions work?",
    answer: "Sessions are fully online and focus on active speech. You will engage in guided everyday topics, practical role-plays, and vocabulary exercises with friendly peers, eliminating the stress of traditional classrooms.",
    isOpen: false
  },
  {
    question: "Can I track my learning progress?",
    answer: "Yes! Our platform features a dedicated dashboard (as shown in our Learning section) where you can track your consistency, speaking stats, and see your fluency metrics grow step by step.",
    isOpen: false
  },
  {
    question: "What skills will I practice the most?",
    answer: "While speaking and practical conversation are at the heart of our method, our structured modules naturally incorporate listening, contextual reading, and everyday vocabulary expansion.",
    isOpen: false
  }
])

// Fonction pour ouvrir une question et fermer automatiquement les autres (effet Accordéon)
const toggleFaq = (index) => {
  faqs.value.forEach((faq, i) => {
    if (i === index) {
      faq.isOpen = !faq.isOpen
    } else {
      faq.isOpen = false
    }
  })
}
</script>

<style scoped>
/* Animation d'ouverture fluide */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-down {
  animation: slideDown 0.25s ease-out forwards;
}
</style>
