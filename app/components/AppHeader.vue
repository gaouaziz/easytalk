<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06213d]/90 backdrop-blur-md"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3"
      >
        <img
          src="/images/easy-talk-logo.png"
          alt="EasyTalk"
          class="h-11 w-auto overflow-visible p-0.5"
        >
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          href="#home"
          class="text-sm font-medium text-white/90 transition hover:text-orange-400"
        >
          Home
        </a>

        <a
          href="#about"
          class="text-sm font-medium text-white/90 transition hover:text-orange-400"
        >
          About
        </a>

        <a
          href="#faq"
          class="text-sm font-medium text-white/90 transition hover:text-orange-400"
        >
          FAQ
        </a>

        <a
          href="#contact"
          class="text-sm font-medium text-white/90 transition hover:text-orange-400"
        >
          Contact
        </a>
      </nav>

      <!-- CTA (Desktop) -->
      <a
        href="#contact"
        class="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400 md:inline-flex"
      >
        Start Learning
      </a>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-lg p-2 text-white md:hidden text-2xl"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <!-- Affiche ✕ si ouvert, ☰ si fermé -->
        {{ isMenuOpen ? '✕' : '☰' }}
      </button>
    </div>

    <!-- Mobile Panel (Menu déroulant) -->
    <div
      v-show="isMenuOpen"
      class="border-t border-white/10 bg-[#06213d] px-6 py-6 md:hidden space-y-4"
    >
      <nav class="flex flex-col gap-4">
        <a
          href="#home"
          class="text-base font-medium text-white/90 transition hover:text-orange-400 py-2"
          @click="closeMenu"
        >
          Home
        </a>

        <a
          href="#about"
          class="text-base font-medium text-white/90 transition hover:text-orange-400 py-2"
          @click="closeMenu"
        >
          About
        </a>

        <a
          href="#faq"
          class="text-base font-medium text-white/90 transition hover:text-orange-400 py-2"
          @click="closeMenu"
        >
          FAQ
        </a>

        <a
          href="#contact"
          class="text-base font-medium text-white/90 transition hover:text-orange-400 py-2"
          @click="closeMenu"
        >
          Contact
        </a>
      </nav>

      <!-- CTA (Mobile) -->
      <div class="pt-4 border-t border-white/5">
        <a
          href="#contact"
          class="flex w-full justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
          @click="closeMenu"
        >
          Start Learning
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
