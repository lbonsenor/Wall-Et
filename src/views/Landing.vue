<!-- Landing page -->
<template>
        <Navigation />
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <JoinUs />
        <Footer />
</template>

<script>
import Hero from '@/components/landing-page/Hero.vue';
import Features from '@/components/landing-page/Features.vue';
import Testimonials from '@/components/landing-page/Testimonials.vue';
import Navigation from '@/components/landing-page/Navigation.vue';
import Footer from '@/components/landing-page/Footer.vue';
import FAQ from '@/components/landing-page/FAQ.vue';
import JoinUs from '@/components/landing-page/JoinUs.vue';
export default {
    name: 'Landing',
    components: {
        Hero,
        Features,
        Testimonials,
        Navigation,
        Footer,
        FAQ,
        JoinUs
    }
}
</script>

<style scoped></style>
