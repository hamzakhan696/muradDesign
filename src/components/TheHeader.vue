<template>
  <!-- Header -->
  <div class="relative wavy-border">
    <header>
      <div class="container mx-auto">
        <div class="header-wrapper pb-12">
          <div class="social-icons flex justify-center py-3">
            <i class="fab fa-whatsapp mx-3"></i>
            <i class="far fa-envelope mx-3"></i>
            <i class="fab fa-linkedin mx-3"></i>
            <i class="fab fa-instagram mx-3"></i>
            <i class="fab fa-google mx-3"></i>
          </div>
          <div class="main-title flex justify-center">
            <img src="@/assets/images/murad.png" alt="murad murad" />
          </div>

          <ul class="menu ml-3 flex flex-wrap justify-center mt-3">
            <li class="md:mt-3 text-white hover:text-blue-500 flex-shrink-0">
              <a href="#" @click="scrollToSection('about')">About Me</a>
            </li>
            <li class="md:mt-3 text-white hover:text-blue-500 flex-shrink-0">
              <a href="#" @click="scrollToSection('consultancy')">Marketing Consultancy</a>
            </li>
            <li class="md:mt-3 text-white hover:text-blue-500 flex-shrink-0">
              <a href="#" @click="scrollToSection('services')">Services</a>
            </li>
            <li class="md:mt-3 text-white hover:text-blue-500 flex-shrink-0">
              <a href="#" @click="scrollToSection('portfolio')">Portfolio</a>
            </li>
            <li class="md:mt-3 text-white hover:text-blue-500 flex-shrink-0">
              <a href="#" @click="scrollToSection('contact')">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
