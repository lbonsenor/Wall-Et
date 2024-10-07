<template>
        <Navigation />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
</template>

<script>
import Hero from '@/components/landing-page/Hero.vue';
import Features from '@/components/landing-page/Features.vue';
import Testimonials from '@/components/landing-page/Testimonials.vue';
import Navigation from '@/components/landing-page/Navigation.vue';
import Footer from '@/components/landing-page/Footer.vue';
export default {
    name: 'Landing',
    components: {
        Hero,
        Features,
        Testimonials,
        Navigation,
        Footer
    }
}
</script>

<style scoped></style>
