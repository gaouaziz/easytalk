<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06213d]/90 backdrop-blur-md"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          src="/images/easy-talk-logo.png"
          alt="EasyTalk"
          class="h-11 w-auto"
        />
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

      <!-- CTA -->
      <a
        href="#contact"
        class="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400 md:inline-flex"
      >
        Start Learning
      </a>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-lg p-2 text-white md:hidden"
        aria-label="Open menu"
      >
        ☰
      </button>
    </div>
  </header>
</template>
