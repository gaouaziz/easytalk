<template>
  <section
    id="temoignages-audio"
    class="bg-gray-50 py-16 sm:py-24"
  >
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="mx-auto max-w-2xl text-center space-y-3">
        <span class="text-sm font-bold uppercase tracking-wider text-orange-500">
          Student Reviews
        </span>
        <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-[#06213d] sm:text-5xl">
          سْمع بْراسك أش كايقولو الطّالَبة ديالنا —
          <span class="block text-orange-500 lg:inline">بْالصّوت ديالْهُم</span>
        </h2>
      </div>

      <!-- Grille de cartes Audio (2 colonnes sur tablette/ordinateur) -->
      <div class="mt-14 grid gap-6 sm:grid-cols-2">
        <div
          v-for="(review, index) in audioReviews"
          :key="index"
          class="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 shadow-sm hover:shadow-md hover:border-orange-200"
        >
          <!-- Profil de l'étudiant -->
          <div class="flex items-center gap-4 mb-5">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <h3 class="font-bold text-[#06213d] text-lg leading-snug">
                {{ review.name }}
              </h3>
              <p class="text-xs text-gray-500 tracking-wide font-medium">
                {{ review.level }}
              </p>
            </div>
          </div>

          <!-- Commentaire écrit rapide (dir="rtl" ajouté pour un alignement parfait de la Darija) -->
          <p
            dir="rtl"
            class="text-right text-base text-gray-600 font-medium leading-relaxed mb-6 flex-grow"
          >
            " {{ review.text }} "
          </p>

          <!-- Lecteur MP3 HTML5 personnalisé & épuré -->
          <div class="w-full pt-4 border-t border-gray-100">
            <audio
              controls
              class="w-full h-9 accent-orange-500 rounded-lg outline-none"
            >
              <source
                :src="review.audioPath"
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

// Liste des 4 témoignages étudiants optimisés en Darija marocaine
const audioReviews = ref([
  {
    name: 'Anass B.',
    level: 'Étudiant • Pack Conversational',
    text: 'بفضل الحصص التفاعلية، قدرت أخيراً نتغلب على العقدة ديال الهضرة. والمواضيع اليومية كاتعاون بزاف !',
    audioPath: '/audio/review-1.mp3'
  },
  {
    name: 'Sarah M.',
    level: 'Professionnelle • Pack Business',
    text: 'المرونة لي كاينين في EasyTalk خلّاتني ندخّل الإنجليزية في برنامجي لّي عامر بزاف. الثقة ديالي في الاجتماعات تضاعفات !',
    audioPath: '/audio/review-2.mp3'
  },
  {
    name: 'Youssef K.',
    level: 'Étudiant • Pack Débutant',
    text: 'ما كانش عندي مستوى طالع في الأول، ولكن البيئة لي كاتشجع وبلا ضغوطات عاوناتني نتقدّم دغيا وبسرعة.',
    audioPath: '/audio/review-3.mp3'
  },
  {
    name: 'Lina T.',
    level: 'Préparation Examen • Pack Intensif',
    text: 'متابعة الإحصائيات ديالي في الطلاقة على لوحة التحكم (dashboard) حفزاتني باش نستمر بانتظام كل سيمانة.',
    audioPath: '/audio/review-4.mp3'
  }
])
</script>

<style scoped>
/* Personnalisation moderne de la barre de lecture audio native pour les navigateurs basés sur WebKit */
audio::-webkit-media-controls-enclosure {
  background-color: #f9fafb; /* gray-50 */
  border-radius: 12px;
}
</style>
