<template>
  <section
    id="temoignages-audio"
    class="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="mx-auto mb-14 max-w-2xl space-y-3 text-center">
        <span class="text-sm font-bold uppercase tracking-wider text-orange-500"> Student Reviews </span>
        <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-[#06213d] sm:text-4xl dark:text-white">
          سمع آراء طلبتنا بصوتهم
        </h2>
      </div>

      <!-- Grille des témoignages -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(review, index) in audioReviews"
          :key="index"
          :data-playing="activeAudioIndex === index"
          class="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
        >
          <!-- Entête de la carte -->
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <!-- Icône microphone -->
              <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-950/30 dark:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                  />
                </svg>
              </div>
              <!-- Titre -->
              <h3 class="text-base font-bold tracking-tight text-[#06213d] dark:text-gray-200">
                Review {{ index + 1 }}
              </h3>
            </div>

            <!-- Onde sonore -->
            <div
              class="flex h-5 w-6 items-end gap-[3px]"
              aria-hidden="true"
            >
              <span
                data-audio-bar
                style="--bar-delay: 0.1s"
              />
              <span
                data-audio-bar
                style="--bar-delay: 0.4s"
              />
              <span
                data-audio-bar
                style="--bar-delay: 0.2s"
              />
              <span
                data-audio-bar
                style="--bar-delay: 0.5s"
              />
            </div>
          </div>

          <!-- Lecteur MP3 -->
          <div class="w-full border-t border-gray-100 pt-3 dark:border-gray-700">
            <!-- PLUS AUCUN ATTRIBUT CLASS ICI : ZÉRO ERREUR LINTER POSSIBLE -->
            <audio
              controls
              preload="metadata"
              @play="handlePlay(index)"
              @pause="handlePause(index)"
              @ended="handleEnded(index)"
            >
              <source
                :src="`${config.public.mediaUrl}/${review.audio}`"
                type="audio/mpeg"
              >
              Votre navigateur ne supporte pas l'élément audio.
            </audio>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()

const audioReviews = ref([
  { audio: 'review-1.mp3' },
  { audio: 'review-2.mp3' },
  { audio: 'review-3.mp3' },
  { audio: 'review-4.mp3' },
  { audio: 'review-5.mp3' }
])

const activeAudioIndex = ref(null)

const handlePlay = (index) => {
  activeAudioIndex.value = index
  const audioElements = document.querySelectorAll('#temoignages-audio audio')
  audioElements.forEach((audio, audioIndex) => {
    if (audioIndex !== index && !audio.paused) {
      audio.pause()
    }
  })
}

const handlePause = (index) => {
  if (activeAudioIndex.value === index) {
    activeAudioIndex.value = null
  }
}

const handleEnded = (index) => {
  if (activeAudioIndex.value === index) {
    activeAudioIndex.value = null
  }
}
</script>

<style scoped>
/* =============================================================
   Lecteur audio natif ciblé par balise (zéro classes Tailwind)
   ============================================================= */
audio {
  display: block;
  width: 100%;
  height: 2.25rem; /* Equivalent à h-9 */
  border-radius: 0.5rem; /* Equivalent à rounded-lg */
  outline: 2px solid transparent; /* Equivalent à outline-none */
  outline-offset: 2px;
  color-scheme: light;
}

/* Thème clair : Fond gris clair pour la barre multimédia */
audio::-webkit-media-controls-enclosure {
  background-color: #f9fafb;
  border-radius: 8px;
}

/* Prise en charge complète du Dark Mode via la classe .dark racine */
:global(.dark) audio {
  color-scheme: dark;
}

:global(.dark) audio::-webkit-media-controls-enclosure {
  background-color: #1f2937; /* Equivalent à dark:bg-gray-800 */
}

/* Accentuation de couleur (contrôles principaux orange) */
@supports (accent-color: auto) {
  audio {
    accent-color: #f97316; /* Equivalent à accent-orange-500 */
  }
}

/* ========================================= Sound waveform ========================================= */
[data-audio-bar] {
  display: block;
  width: 3px;
  height: 4px;
  background-color: #f97316;
  border-radius: 2px;
}

[data-playing='true'] [data-audio-bar] {
  animation: sound-wave-bounce 0.8s ease-in-out infinite alternate;
  animation-delay: var(--bar-delay);
}

/* ========================================= Waveform animation ========================================= */
@keyframes sound-wave-bounce {
  0% {
    height: 4px;
  }
  100% {
    height: 20px;
  }
}

/* ========================================= Accessibility ========================================= */
@media (prefers-reduced-motion: reduce) {
  [data-playing='true'] [data-audio-bar] {
    animation: none;
  }
}
</style>
