<template>
    <Hero />
    <Features />
    <Hero />
</template>

<script>
import Hero from '@/components/landing-page/Hero.vue';
import Features from '@/components/landing-page/Features.vue';
export default {
    name: 'Landing',
    components: {
       Hero,
       Features
    }
}
</script>

<style scoped>
</style>
