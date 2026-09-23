<template>
  <div
    dir="rtl"
    class="relative z-10 mt-12 w-full lg:ml-auto lg:mt-0 lg:w-[430px]"
  >
    <!-- FIX: Bordure orange 400 plus épaisse et fond flouté enrichi -->
    <div
      class="rounded-3xl border-2 border-orange-400 bg-[#517742]/90 p-6 shadow-[0_0_50px_rgba(249,115,22,0.15)] backdrop-blur-2xl sm:p-8"
    >
      <!-- Title (Blanc pur pour un contraste maximal) -->
      <h2 class="text-center text-xl font-bold text-white sm:text-2xl leading-snug">
        عمّر دابا المعلومات ديالك، وغادي نتواصلو معاك.
      </h2>

      <!-- Message de succès -->
      <div
        v-if="isSuccess"
        class="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400"
      >
        <span class="text-base">✨</span>
        <p class="leading-6 font-medium">
          شكراً لك! سنتواصل معك قريباً عبر الواتساب.
        </p>
      </div>

      <form
        v-else
        class="mt-6 space-y-5"
        @submit.prevent="handleContactSubmit"
      >
        <!-- Nom -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white">
            الاسم الكامل:
          </label>

          <!-- Input: Bordures et contrastes renforcés -->
          <input
            v-model.trim="contactForm.name"
            type="text"
            required
            autocomplete="name"
            placeholder="أدخل اسمك الكامل"
            class="w-full rounded-xl border border-white/25 bg-[#061c33] px-4 py-3 text-right text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-400 focus:bg-[#082544] focus:ring-4 focus:ring-orange-400/20"
          >
        </div>

        <!-- WhatsApp -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white">
            رقم الواتساب:
          </label>

          <input
            v-model="contactForm.whatsapp"
            type="tel"
            inputmode="numeric"
            required
            autocomplete="tel"
            maxlength="13"
            placeholder="0691 71 17 32"
            class="w-full rounded-xl border border-white/25 bg-[#061c33] px-4 py-3 text-right text-white placeholder:text-white/40 outline-none transition-all focus:border-orange-400 focus:bg-[#082544] focus:ring-4 focus:ring-orange-400/20"
            @input="formatWhatsapp"
          >
        </div>

        <!-- Niveau -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white">
            مستوى اللغة الإنجليزية
            <span class="font-normal text-white/50">(اختياري)</span>
          </label>

          <div class="relative">
            <select
              v-model="contactForm.level"
              class="w-full appearance-none rounded-xl border border-white/25 bg-[#061c33] px-4 py-3 text-right text-white outline-none transition-all focus:border-orange-400 focus:bg-[#082544] focus:ring-4 focus:ring-orange-400/20"
            >
              <option
                value=""
                class="text-white"
              >
                اختر مستواك
              </option>
              <option
                value="Beginner"
                class="text-white"
              >
                مبتدئ
              </option>
              <option
                value="Intermediate"
                class="text-white"
              >
                متوسط
              </option>
              <option
                value="Advanced"
                class="text-white"
              >
                متقدم
              </option>
            </select>

            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-white/60">
              <svg
                class="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-400/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>{{ isSubmitting ? 'جاري الإرسال...' : 'تواصل معنا الآن' }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Synchronisation propre avec la logique d'état de votre composant parent Hero
defineProps({
  isSubmitting: {
    type: Boolean,
    default: false
  },
  isSuccess: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit'])

const contactForm = ref({
  name: '',
  whatsapp: '',
  level: ''
})

const handleContactSubmit = () => {
  // Transmet les données du formulaire directement à la fonction onFormSubmit du parent
  emit('submit', { ...contactForm.value })

  // Optionnel : Réinitialise localement les champs après l'envoi si besoin
  // (Il est plus propre de surveiller le succès depuis le parent pour réinitialiser)
}

const formatWhatsapp = (event) => {
  let value = event.target.value

  // Supprime tout sauf les chiffres
  value = value.replace(/\D/g, '')

  // Limite stricte à 10 chiffres (Format marocain standard)
  value = value.slice(0, 10)

  // Découpage automatique pour le format visuel (0691 71 17 32)
  const parts = [
    value.slice(0, 4),
    value.slice(4, 6),
    value.slice(6, 8),
    value.slice(8, 10)
  ].filter(Boolean)

  contactForm.value.whatsapp = parts.join(' ')
}
</script>
