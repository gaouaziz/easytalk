<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06213d]/90 backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-3"
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
          href="#easytalk-contact-form"
          class="text-sm font-medium text-white/90 transition hover:text-orange-400"
        >
          Contact
        </a>
      </nav>

      <!-- Desktop CTA -->
      <a
        href="#easytalk-contact-form"
        class="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-400 md:inline-flex"
      >
        Start Learning
      </a>

      <!-- Mobile CTA -->
      <a
        href="#easytalk-contact-form"
        class="inline-flex max-w-[220px] items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-center text-xs font-bold leading-tight text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 active:scale-95 md:hidden sm:px-5 sm:text-sm"
      >
        🚀 استغل الخصم وحجز بلاصتك دابا
      </a>
    </div>
  </header>
</template>
