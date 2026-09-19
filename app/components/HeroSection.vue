<template>
  <section
    id="home"
    class="relative isolate overflow-hidden bg-[#06213d]"
  >
    <!-- Decorative background -->
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(249,115,22,0.10),transparent_30%)]"
    />

    <div
      class="mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-28 lg:px-8"
    >
      <div
        class="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <!-- TEXT -->
        <div
          dir="rtl"
          class="order-1 relative z-10 max-w-2xl text-right lg:order-1"
        >
          <!-- Badge -->
          <span
            class="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300"
          >
            تعلّم الإنجليزية بطريقة بسيطة وفعّالة
          </span>

          <!-- Heading -->
          <h1
            class="mt-6 text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            بغيتي تخدم ولا تقرا
            <span class="text-orange-400">
              فبلاد كتهضر بالإنجليزية؟
            </span>

            <span class="mt-3 block text-white">
              الطريق ديالك كيبدا من هنا 🚀
            </span>
          </h1>

          <!-- Description -->
          <p
            class="mt-6 max-w-xl text-lg leading-8 text-white/75 sm:text-xl"
          >
            مع
            <strong class="font-semibold text-white">EasyTalk</strong>،
            غادي تمارس الإنجليزية، تطور المستوى ديالك، وتكتسب الثقة باش تهضر
            بالإنجليزية بلا تردد.
          </p>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap justify-end gap-4">
            <a
              href="#temoignages-audio"
              class="rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
            >
              تقييمات الطلاب
            </a>

            <a
              href="#about"
              class="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              اكتشف EasyTalk
            </a>
          </div>
        </div>

        <!-- FORM -->
        <div
          class="order-2 w-full lg:order-2"
        >
          <HeroForm
            :is-submitting="loading"
            :is-success="success"
            @submit="onFormSubmit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const success = ref(false)

const onFormSubmit = async (_payload) => {
  loading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1200))

    success.value = true
  } catch (error) {
    console.error('Erreur serveur :', error)
  } finally {
    loading.value = false

    setTimeout(() => {
      success.value = false
    }, 4000)
  }
}
</script>
