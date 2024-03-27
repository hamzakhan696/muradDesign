<template>
  <div>
    <TheHeader />
    <main>
      <IntroSection />
      <AboutSection />
      <QualificationSection />
      <IndustriesSection />
      <MarketingSection />
      <ServicesSection />
      <PortfolioSection />
      <FeaturedSection />
      <GuarenteeSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import AboutSection from '@/components/AboutSection.vue'
import QualificationSection from '@/components/QualificationSection.vue'
import IndustriesSection from '@/components/IndustriesSection.vue'
import MarketingSection from '@/components/MarketingSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import IntroSection from '@/components/IntroSection.vue'
import GuarenteeSection from '@/components/GuarenteeSection.vue'
import FeaturedSection from '@/components/FeaturedSection.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    AboutSection,
    IndustriesSection,
    QualificationSection,
    MarketingSection,
    ServicesSection,
    TestimonialsSection,
    PortfolioSection,
    ContactSection,
    IntroSection,
    GuarenteeSection,
    FeaturedSection
  }
}
</script>
