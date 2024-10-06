<template>
        <Navigation />
        <Hero />
        <Features />
        <Testimonials />

    <div style="height:500px"></div>
</template>

<script>
import Hero from '@/components/landing-page/Hero.vue';
import Features from '@/components/landing-page/Features.vue';
import Testimonials from '@/components/landing-page/Testimonials.vue';
import Navigation from '@/components/landing-page/Navigation.vue';
export default {
    name: 'Landing',
    components: {
        Hero,
        Features,
        Testimonials,
        Navigation
    }
}
</script>

<style scoped></style>
