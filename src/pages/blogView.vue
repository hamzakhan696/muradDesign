<template>
  <section class="bg-dark">
    <div class="container mx-auto">
      <h1 class="text-primary font-bold text-3xl md:text-6xl text-center py-20">Blogs</h1>
    </div>
  </section>
  <section class="bg-white py-12">
    <h1 class="text-dark font-bold text-3xl md:text-6xl text-center py-10">
      <span class="text-primary">Tell your</span> social media story.
    </h1>
    <p class="text-center text-gray md:mx-32">
      You may be starting up a new business and not be sure how you should be using social, or you
      might have been around and had quite a few different social media managers login to your
      Instagram over the last few years with barely any result. It truly can be difficult to hire
      good social media freelancer or manager, because social requires a very broad skill set. It’s
      a mixture of tech, design, writing, analytics and soft skills. Most of all, we need to be able
      to work fast and in a very responsive way.
    </p>
    <p class="text-center text-gray md:mx-32">
      So if you’ve found you’ve put your design agency, or your copywriter on social and they
      haven’t gotten you the numbers you want – it may be that their skills are too specialized to
      be an effective social media manager. I’ve been working on social media pages and campaigns
      for years, and believe me, I’ve seen it all. I also work in a variety of ways; from full
      social content creation and management to just overseeing and training juniors.
    </p>
  </section>
  <section class="bg-primary py-12">
    <div class="section-wrapper mx-5">
      <h1 class="text-white font-bold text-2xl sm:text-3xl md:text-5xl text-center py-12">
        Blog section
      </h1>
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/4 px-4 flex flex-col items-center mt-5 md:mt-0 mx-5">
          <img src="@/assets/images/brand.png" alt="Image 1" class="w-100" />
          <h1 class="text-bold text-white text-2xl font-bold text-center py-2">Brand Focused</h1>
        </div>
        <div class="w-full md:w-1/4 px-4 flex flex-col items-center mt-5 md:mt-0 mx-5">
          <img src="@/assets/images/engaging.jpg" alt="Image 1" class="w-100" />
          <h1 class="text-bold text-white text-2xl font-bold text-center py-2">Brand Focused</h1>
        </div>
        <div class="w-full md:w-1/4 px-4 flex flex-col items-center mt-5 md:mt-0 mx-5">
          <img src="@/assets/images/mentor.jpeg" alt="Image 1" class="w-100" />

          <h1 class="text-bold text-white font-bold text-2xl text-center py-2">Engaging</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-dark py-12 px-4">
    <h1 class="text-white font-bold text-3xl md:text-6xl text-center py-10">Branding</h1>
    <p class="text-center text-gray md:mx-32">
      You may be starting up a new business and not be sure how you should be using social, or you
      might have been around and had quite a few different social media managers login to your
      Instagram over the last few years with barely any result. It truly can be difficult to hire
      good social media freelancer or manager, because social requires a very broad skill set. It’s
      a mixture of tech, design, writing, analytics and soft skills. Most of all, we need to be able
      to work fast and in a very responsive way.
    </p>
  </section>
  <section class="bg-white py-12 px-4">
    <div class="container mx-auto">
      <div class="grid place-items-center">
        <img src="@/assets/images/payperclick-768x366.png" class="w-100" alt="brand" />
        <h1 class="font-gray text-center mx-20">
          A model of internet marketing in which advertisers pay a fee each time one of their ads is
          clicked. Essentially, it’s a way of buying visits to your site, rather than attempting to
          “earn” those visits organically.
        </h1>
      </div>
    </div>
  </section>
  <TheFooter />
</template>
<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter
  }
}
</script>
