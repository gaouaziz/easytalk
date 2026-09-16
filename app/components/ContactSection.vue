<template>
  <section
    id="contact"
    class="bg-white py-16 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl space-y-4 text-center lg:max-w-none">
        <span class="text-sm font-bold uppercase tracking-wider text-orange-500">
          Get in Touch
        </span>
        <h2 class="text-4xl font-extrabold tracking-tight text-[#06213d] sm:text-5xl">
          We're here to help you grow
        </h2>
        <p class="mx-auto max-w-xl text-lg text-gray-600">
          Have questions about our online conversation sessions? Reach out and our team will get back to you within 24 hours.
        </p>
      </div>

      <!-- Grid layout -->
      <div class="mt-16 grid gap-16 lg:grid-cols-2 lg:items-start">
        <!-- Info Column -->
        <div class="space-y-8">
          <div class="rounded-3xl bg-[#06213d] p-8 text-white shadow-xl">
            <h3 class="text-xl font-bold text-orange-400">
              Contact Information
            </h3>
            <p class="mt-2 text-sm text-white/70">
              Feel free to message us directly through any of these channels.
            </p>

            <div class="mt-8 space-y-6">
              <!-- Email -->
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-orange-400">
                  ✉️
                </div>
                <div>
                  <p class="text-xs uppercase tracking-wider text-white/50">
                    Email us
                  </p>
                  <a
                    href="mailto:hello@easytalk.com"
                    class="font-semibold text-white hover:text-orange-300 transition"
                  >hello@easytalk.com</a>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl text-orange-400">
                  🕒
                </div>
                <div>
                  <p class="text-xs uppercase tracking-wider text-white/50">
                    Support Hours
                  </p>
                  <p class="font-semibold">
                    Mon - Fri, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links (Mis à jour avec uniquement Facebook) -->
            <div class="mt-12 border-t border-white/10 pt-8">
              <p class="text-xs uppercase tracking-wider text-white/50 mb-4">
                Follow our community
              </p>
              <div class="flex">
                <a
                  href="https://www.facebook.com/share/1BzYz1iezK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 hover:bg-orange-500 transition-all duration-300 text-sm font-medium"
                >
                  <!-- SVG Facebook qui passe de blanc-translucide à blanc pur au survol -->
                  <svg
                    class="h-5 w-5 fill-current text-white/70 group-hover:text-white transition"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
          <div
            v-if="isSuccess"
            class="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-sm flex items-center gap-2"
          >
            <span>✨</span> Your message has been sent successfully!
          </div>

          <form
            class="space-y-6"
            @submit.prevent="handleContactSubmit"
          >
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">Full name</label>
                <input
                  v-model.trim="contactForm.name"
                  type="text"
                  required
                  placeholder="John Doe"
                  class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                >
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">Email address</label>
                <input
                  v-model.trim="contactForm.email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                >
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">Subject</label>
              <div class="relative">
                <select
                  v-model="contactForm.subject"
                  class="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                >
                  <option value="General Inquiry">
                    General Inquiry
                  </option>
                  <option value="Technical Support">
                    Technical Support
                  </option>
                  <option value="Partnership">
                    Partnership
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg
                    class="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  ><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">How can we help you?</label>
              <textarea
                v-model.trim="contactForm.message"
                rows="4"
                required
                placeholder="Write your message here..."
                class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex items-center justify-center gap-2 rounded-xl bg-[#06213d] px-5 py-3.5 font-bold text-white transition hover:bg-[#0c355e] active:scale-[0.99] disabled:opacity-50"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin h-5 w-5 text-white"
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
              {{ isSubmitting ? 'Sending message...' : 'Send message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const isSuccess = ref(false)

const contactForm = ref({
  name: '',
  email: '',
  subject: 'General Inquiry',
  message: ''
})

const handleContactSubmit = async () => {
  isSubmitting.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    isSuccess.value = true

    contactForm.value = {
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    }
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    isSubmitting.value = false

    // CORRECTION : Séparation de la fonction sur plusieurs lignes
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }
}
</script>
