<template>
    <div class="dotted-background">
        <div style="display: flex; width:100%; justify-content: center; margin-top: -50px;">
            <h1>¿Por qué nos eligen?</h1>
        </div>
        <div class="inner-container">
            <div class="align-self-start">
                <FeatureCard 
                symbol="1"
                title="Strategy"
                text="Description of strategy and others"
                :image="featureImage1"
                />
            </div>
            <div class="align-self-center">
                <FeatureCard 
                symbol="1"
                title="Strategy"
                text="Description of strategy and others"
                :image="featureImage2"
                />
            </div>
            <div class="align-self-start">
                <FeatureCard 
                symbol="1"
                title="Strategy"
                text="Description of strategy and others"
                :image="featureImage3"
                />
            </div>
        </div>
    </div>

</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
import featureImage1 from '@/assets/rocket.png'
import featureImage2 from '@/assets/piggy.png'
import featureImage3 from '@/assets/goal.png'


</script>
<style scoped>
.dotted-background {
    /* margin: 0 -100% 0 -100%; */
    /* background-color: rgba(0, 0, 0, 0.10); */
    background-image: radial-gradient(#ffffff 1px, transparent 1px);
    background-size: 80px 80px;
    min-height: 100vh;
    width: 100%;
    background-position: 0 0;
    box-sizing: border-box;
    position: relative;
    background-repeat: repeat;
    display: flex;
    display: flex;
    flex-direction: column;
}

.inner-container {
    display: flex;
    flex-direction: row;
    height: 80vh;
    justify-content: space-around;
    gap: 20px;
    /* margin: 20px;  */
    padding: 20px;
}

@media (min-width: 800px) {
    .inner-container {
        padding: 60px;  
    }
}

</style>

<script>
export default {
    name: 'Features'
}
</script>
