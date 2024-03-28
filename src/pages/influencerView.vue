<template>
  <influencerTitle />
  <idealinfluencer />
  <microInfluencer />
  <MacroInfluencer />
  <InfluencerLogos />
  <EmailSection />
  <theFooter />
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import { RouterLink } from 'vue-router'
import influencerTitle from '@/components/InfluencerTitle.vue'
import idealinfluencer from '@/components/IdealInfluencer.vue'
import microInfluencer from '@/components/MicroInfluencers.vue'
import EmailSection from '@/components/EmailSection.vue'
import InfluencerLogos from '@/components/InfluencerLogos.vue'
import MacroInfluencer from '@/components/MacroInfluencer.vue'

export default {
  components: {
    TheFooter,
    influencerTitle,
    idealinfluencer,
    microInfluencer,
    EmailSection,
    InfluencerLogos,
    MacroInfluencer
  }
}
</script>
