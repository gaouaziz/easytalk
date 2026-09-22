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

      <!-- CTA -->
      <a
        href="#easytalk-contact-form"
        class="inline-flex max-w-[240px] md:max-w-none items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 md:px-6 md:py-3 text-center text-xs sm:text-sm md:text-base font-bold leading-tight text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 active:scale-95"
      >
        تواصل معنا الآن
      </a>
    </div>
  </header>
</template>
