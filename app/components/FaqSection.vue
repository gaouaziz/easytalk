<template>
  <section
    id="temoignages-audio"
    class="bg-gray-50 py-16 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- En-tête de section --> <div class="mx-auto mb-14 max-w-2xl space-y-3 text-center">
        <span class="text-sm font-bold uppercase tracking-wider text-orange-500"> Student Reviews </span> <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-[#06213d] sm:text-4xl">
          سمع آراء طلبتنا بصوتهم
        </h2>
      </div> <!-- Grille des témoignages --> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(review, index) in audioReviews"
          :key="index"
          :data-playing="activeAudioIndex === index"
          class="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
        >
          <!-- Entête de la carte --> <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <!-- Icône microphone --> <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-5 w-5"
                  aria-hidden="true"
                > <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                /> </svg>
              </div> <!-- Titre --> <h3 class="text-base font-bold tracking-tight text-[#06213d]">
                Review {{ index + 1 }}
              </h3>
            </div> <!-- Onde sonore --> <div
              class="flex h-5 w-6 items-end gap-[3px]"
              aria-hidden="true"
            >
              <span
                data-audio-bar
                style="--bar-delay: 0.1s"
              /> <span
                data-audio-bar
                style="--bar-delay: 0.4s"
              /> <span
                data-audio-bar
                style="--bar-delay: 0.2s"
              /> <span
                data-audio-bar
                style="--bar-delay: 0.5s"
              />
            </div>
          </div> <!-- Lecteur MP3 --> <div class="w-full border-t border-gray-50 pt-3">
            <audio
              controls
              preload="metadata"
              class="h-9 w-full rounded-lg accent-orange-500 outline-none"
              @play="handlePlay(index)"
              @pause="handlePause(index)"
              @ended="handleEnded(index)"
            > <source
              :src="review.audioPath"
              type="audio/mpeg"
            > Votre navigateur ne supporte pas l'élément audio. </audio>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const audioReviews = ref([{ audioPath: '/audio/review-1.mp3' }, { audioPath: '/audio/review-2.mp3' }, { audioPath: '/audio/review-3.mp3' }, { audioPath: '/audio/review-4.mp3' }])
/* * Index of the audio currently playing. * * null = no audio is playing. */
const activeAudioIndex = ref(null)
/** * Start playing an audio. * * Only this review's waveform will animate. */
const handlePlay = (index) => {
  activeAudioIndex.value = index
  /* * Stop all other audio elements. * * This also makes sure that only one waveform * can be animated at a time. */
  const audioElements = document.querySelectorAll('#temoignages-audio audio')
  audioElements.forEach((audio, audioIndex) => {
    if (audioIndex !== index && !audio.paused) {
      audio.pause()
    }
  })
}
/** * Pause an audio. */
const handlePause = (index) => {
  if (activeAudioIndex.value === index) {
    activeAudioIndex.value = null
  }
}
/** * Audio finished playing. */
const handleEnded = (index) => {
  if (activeAudioIndex.value === index) {
    activeAudioIndex.value = null
  }
}
</script>

<style scoped>
/* ========================================= Native audio player ========================================= */
audio::-webkit-media-controls-enclosure {
  background-color: #f9fafb;
  border-radius: 12px;
}
/* ========================================= Sound waveform ========================================= */
[data-audio-bar] {
  display: block;
  width: 3px;
  height: 4px;
  background-color: #f97316;
  border-radius: 2px;
}
/* * Animate ONLY the waveform inside the * currently playing card. */
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
