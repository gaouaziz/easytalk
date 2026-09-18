<template>
  <div
    dir="rtl"
    class="relative z-10 mt-12 w-full lg:ml-auto lg:mt-0 lg:w-[430px]"
  >
    <div
      class="rounded-3xl border border-white/15 bg-[#06213d]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
    >
      <!-- Title -->
      <h2 class="text-center text-2xl font-bold text-white sm:text-3xl">
        عرض خاص لفترة محدودة! 🔥
      </h2>

      <p class="mt-3 text-center text-sm leading-6 text-white/70">
        سجل معلوماتك وسنتواصل معك عبر الواتساب لتأكيد التسجيل.
      </p>

      <!-- Message de succès -->
      <div
        v-if="isSuccess"
        class="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-400"
      >
        <span>✨</span>
        <span>شكراً لك! سنتواصل معك قريباً عبر الواتساب.</span>
      </div>

      <form
        v-else
        class="mt-6 space-y-5"
        @submit.prevent="handleContactSubmit"
      >
        <!-- Nom -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">
            الاسم الكامل:
          </label>

          <input
            v-model.trim="contactForm.name"
            type="text"
            required
            autocomplete="name"
            placeholder="أدخل اسمك الكامل"
            class="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-right text-white placeholder:text-white/30 outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
          >
        </div>

        <!-- WhatsApp -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">
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
            class="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-right text-white placeholder:text-white/30 outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
            @input="formatWhatsapp"
          >
        </div>

        <!-- Email optionnel -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">
            البريد الإلكتروني
            <span class="font-normal text-white/40">(اختياري)</span>
          </label>

          <input
            v-model.trim="contactForm.email"
            type="email"
            autocomplete="email"
            placeholder="you@example.com"
            class="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-left text-white placeholder:text-white/30 outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
          >
        </div>

        <!-- Niveau -->
        <div>
          <label class="mb-2 block text-sm font-semibold text-white/90">
            مستوى اللغة الإنجليزية
            <span class="font-normal text-white/40">(اختياري)</span>
          </label>

          <div class="relative">
            <select
              v-model="contactForm.level"
              class="w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-right text-white outline-none transition-all focus:border-orange-400 focus:bg-white/10 focus:ring-2 focus:ring-orange-400/20"
            >
              <option
                value=""
                class="text-gray-900"
              >
                اختر مستواك
              </option>

              <option
                value="Beginner"
                class="text-gray-900"
              >
                مبتدئ
              </option>

              <option
                value="Intermediate"
                class="text-gray-900"
              >
                متوسط
              </option>

              <option
                value="Advanced"
                class="text-gray-900"
              >
                متقدم
              </option>
            </select>

            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-white/50"
            >
              <svg
                class="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Offers -->
        <div
          class="rounded-2xl border border-orange-400/20 bg-orange-400/5 p-4"
        >
          <div class="space-y-3 text-sm leading-6 text-white">
            <div class="flex items-start gap-2">
              <span class="shrink-0 text-lg">👥</span>

              <p>
                <span class="font-semibold">دورة جماعية : </span>
                <span class="mx-1 text-white/40 line-through">800dh</span>
                <span class="font-bold text-orange-400">500dh</span>
                <span class="text-white/70">لـ 3 أشهر</span>
              </p>
            </div>

            <div class="flex items-start gap-2">
              <span class="shrink-0 text-lg">🎯</span>

              <p>
                <span class="font-semibold">حصص فردية (1-on-1) : </span>
                <span class="mx-1 text-white/40 line-through">150dh</span>
                <span class="font-bold text-orange-400">100dh</span>
                <span class="text-white/70">للحصة</span>
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-400/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            v-if="isSubmitting"
            class="h-5 w-5 animate-spin text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />

            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>

          <span>
            {{ isSubmitting ? 'جاري الإرسال...' : '🚀 استغل الخصم وحجز بلاصتك دابا' }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const isSuccess = ref(false)

const contactForm = ref({
  name: '',
  whatsapp: '',
  email: '',
  level: ''
})

const handleContactSubmit = async () => {
  isSubmitting.value = true
  isSuccess.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: contactForm.value
    })

    isSuccess.value = true

    contactForm.value = {
      name: '',
      whatsapp: '',
      email: '',
      level: ''
    }
  } catch (error) {
    console.error('Error sending registration:', error)

    alert(
      'تعذر إرسال الطلب. المرجو المحاولة مرة أخرى.'
    )
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }
}
const formatWhatsapp = (event) => {
  let value = event.target.value

  // Remove everything except numbers
  value = value.replace(/\D/g, '')

  // Maximum 10 digits
  value = value.slice(0, 10)

  // 0691 71 17 32
  const parts = [
    value.slice(0, 4),
    value.slice(4, 6),
    value.slice(6, 8),
    value.slice(8, 10)
  ].filter(Boolean)

  contactForm.value.whatsapp = parts.join(' ')
}
</script>
