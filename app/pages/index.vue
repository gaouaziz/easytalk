<template>
  <div>
    <HeroSection />
    <FaqSection />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtr'
  },
  link: [
    { rel: 'canonical', href: config.public.siteUrl }
  ]
})

useSeoMeta({
  title: 'EasyTalk | تعلّم الإنجليزية بطريقة بسيطة وفعّالة',
  description: 'بارك عليك ما تعلم الانجليزية بالطرق التقليدية! ابدأ دابا بطريقة جديدة مع EasyTalk اللي غاتخليك تهضر وتكتب بحال شي ميريكاني في وقت قياسي.',
  keywords: 'تعلم الانجليزية, لغة انجليزية المغرب, دروس الدعم, EasyTalk, الدار البيضاء, anglais maroc',
  canonical: config.public.siteUrl,

  ogType: 'website',
  ogUrl: config.public.siteUrl,
  ogTitle: 'EasyTalk | تعلّم الإنجليزية بطريقة بسيطة وفعّالة 🇲🇦',
  ogDescription: 'ابدأ دابا بطريقة جديدة مع EasyTalk اللي غاتخليك تهضر وتكتب بحال شي ميريكاني. سجل معلوماتك الآن وتواصل معنا مباشرة عبر الواتساب !',
  ogImage: `${config.public.imgUrl}/easy-talk-learning.png?v=1.0`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'EasyTalk Logo - Learn English in Morocco',
  ogLocale: 'ar_MA',
  ogSiteName: 'EasyTalk',

  twitterCard: 'summary_large_image',
  twitterUrl: config.public.siteUrl,
  twitterTitle: 'EasyTalk | تعلّم الإنجليزية بطريقة بسيطة وفعّالة',
  twitterDescription: 'بارك عليك ما تعلم الانجليزية بالطرق التقليدية! ابدأ دابا بطريقة جديدة مع EasyTalk اللي غاتخليك تهضر وتكتب بحال شي ميريكاني.',
  twitterImage: `${config.public.imgUrl}/easy-talk-learning.png?v=1.0`
})
</script>
