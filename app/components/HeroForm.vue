<template>
  <div class="relative z-10 mt-12 lg:mt-0 lg:ml-auto lg:w-[430px] w-full">
    <div class="rounded-3xl border border-white/15 bg-[#06213d]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      <h2 class="text-2xl font-bold text-white">
        Start your English journey
      </h2>

      <p class="mt-2 text-sm text-white/65">
        Tell us a little about yourself and we'll get in touch.
      </p>

      <!-- Message de succès -->
      <div
        v-if="isSuccess"
        class="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2 animate-pulse"
      >
        <span>✨</span> Thank you! We will contact you very soon.
      </div>

      <form @submit.prevent="handleSubmit" class="mt-6 space-y-5">
        <!-- Champ Nom -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">Your name</label>
          <input
            v-model.trim="formData.name"
            type="text"
            required
            placeholder="John Doe"
            class="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
          />
        </div>

        <!-- Champ Email -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">Email</label>
          <input
            v-model.trim="formData.email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
          />
        </div>

        <!-- Champ Objectif -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">What would you like to improve?</label>
          <div class="relative">
            <select
              v-model="formData.objective"
              class="w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
            >
              <option class="text-gray-900" value="Speaking">Speaking</option>
              <option class="text-gray-900" value="Pronunciation">Pronunciation</option>
              <option class="text-gray-900" value="Vocabulary">Vocabulary</option>
              <option class="text-gray-900" value="Conversation">Conversation</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <!-- Bouton de validation -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-400/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isSubmitting ? 'Sending...' : 'Get started' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Déclaration de l'événement pour communiquer avec le parent
const emit = defineEmits(['submit'])

// Props pour contrôler l'état de chargement et de succès depuis le parent
defineProps({
  isSubmitting: { type: Boolean, default: false },
  isSuccess: { type: Boolean, default: false }
})

const formData = ref({
  name: '',
  email: '',
  objective: 'Speaking'
})

const handleSubmit = () => {
  // On envoie une copie des données au parent, et on vide le formulaire si nécessaire
  emit('submit', { ...formData.value })

  // Optionnel : réinitialiser après soumission
  formData.value = { name: '', email: '', objective: 'Speaking' }
}
</script>
