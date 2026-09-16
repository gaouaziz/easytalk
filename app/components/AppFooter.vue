<template>
  <footer class="bg-[#03172b] text-white border-t border-white/5">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">

      <div class="grid gap-10 md:grid-cols-3 items-start">

        <!-- Brand & Socials -->
        <div class="space-y-5">
          <!-- Ajout de p-0.5 et overflow-visible pour éviter que le logo / la lettre "k" soit coupée -->
          <div class="overflow-visible w-auto h-12 flex items-center">
            <img
              src="/images/easy-talk-logo.png"
              alt="EasyTalk Logo"
              class="h-full w-auto object-contain overflow-visible p-0.5"
            />
          </div>

          <p class="max-w-sm text-sm leading-6 text-white/60">
            Simplified online learning to help you practice English
            and speak with greater confidence.
          </p>

          <!-- Icône Facebook Officielle Intégrée -->
          <div class="flex pt-1">
            <a
              href="https://www.facebook.com/share/1BzYz1iezK/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white transition-all duration-300 hover:bg-orange-500 hover:scale-105 shadow-md"
              aria-label="Follow EasyTalk on Facebook"
            >
              <!-- Le SVG passe de blanc-translucide à blanc pur au survol de la boîte orange -->
              <svg
                class="h-5 w-5 fill-current text-white/70 group-hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="font-bold text-base tracking-wide text-white">
            Navigation
          </h3>

          <ul class="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <a href="#home" class="transition-colors duration-200 hover:text-orange-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" class="transition-colors duration-200 hover:text-orange-400">
                About
              </a>
            </li>

            <li>
              <a href="#faq" class="transition-colors duration-200 hover:text-orange-400">
                FAQ
              </a>
            </li>

            <li>
              <a href="#contact" class="transition-colors duration-200 hover:text-orange-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact / CTA -->
        <div>
          <h3 class="font-bold text-base tracking-wide text-white">
            Get in touch
          </h3>

          <p class="mt-4 text-sm text-white/60">
            Have questions about learning English?
          </p>

          <a
            href="/"
            class="mt-5 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-200 hover:bg-orange-400 hover:shadow-orange-400/20 active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>

      </div>

      <!-- Copyright Section (Optimisé avec une marge réduite à py-8) -->
      <div
        class="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40"
      >
        &copy; {{ new Date().getFullYear() }} EasyTalk. All rights reserved.
      </div>

    </div>
  </footer>
</template>
