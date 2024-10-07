<template>
    <div id="features" style="padding-top: 100px">
        <div class="dotted-background">
        <div style="display: flex; width:100%; justify-content: center; margin-bottom: 20px;">
            <h1>¿Por qué nos eligen?</h1>
        </div>
        <div class="inner-container">
            <div class="align-self-start">
                <FeatureCard 
                symbol="1"
                title="Strategy"
                text="Amplitud de features para usar, lorem ipsut odor, blah blah"
                :image="featureImage1"
                />
            </div>
            <div class="align-self-end">
                <FeatureCard 
                symbol="1"
                title="Escalar"
                text="Facil y rapido, navegacion intituiva, no cobra comisiones y puedo ahorrar mas"
                :image="featureImage2"
                />
            </div>
            <div class="align-self-start">
                <FeatureCard 
                symbol="1"
                title="Goals"
                text="Setea tus metas y cumplilas, mira tu progreso y motivate"
                :image="featureImage3"
                />
            </div>
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
    background-image: radial-gradient(#ffffff 1px, transparent 1px);
    background-size: 80px 80px;
    background-repeat: repeat;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    
    align-content: center;
    align-items: center;
    display: flex; 
    flex-direction: column; */
    /* height: 100vh; */
}

.inner-container {
    display: flex;
    flex-direction: row;
    /* height: 100vh; */
    justify-content: space-around;
    gap: 20px;
    /* margin: 20px;  */
    /* padding: 20px; */
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
