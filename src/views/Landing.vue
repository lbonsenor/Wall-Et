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
import Hero from '@/components/landing/Hero.vue';
import Features from '@/components/landing/Features.vue';
import Testimonials from '@/components/landing/Testimonials.vue';
import Navigation from '@/components/landing/Navigation.vue';
import Footer from '@/components/landing/Footer.vue';
import FAQ from '@/components/landing/FAQ.vue';
import JoinUs from '@/components/landing/JoinUs.vue';
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
