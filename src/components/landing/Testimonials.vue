<template>
    <div id="testimonials"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center;  width:100%; padding-top:100px;">
        <h1>Qué dicen nuestros usuarios</h1>
        <div class="testimonials">
            <TestimonialCard :image="profile1" color="star" username="camila_lee"
                quote="Buenisimooo! Mucho mejor que MercadoPago" />
            <TestimonialCard :image="profile2" color="primary" username="noah_cefalta"
                quote="La mejor aplicación. Recomendada para estudiantes" />
            <TestimonialCard :image="profile3" color="success" username="sandra_gomez"
                quote="Me encanta! Es muy fácil de usar!!" />
        </div>
    </div>

</template>

<script setup>
import TestimonialCard from './TestimonialCard.vue';
import profile1 from '@/assets/profile1.png'
import profile2 from '@/assets/profile2.png'
import profile3 from '@/assets/profile3.png'
</script>

<style>
.testimonials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    margin-top: 20px;
}
</style>