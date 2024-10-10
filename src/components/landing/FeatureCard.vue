<template>

    <div style="display: flex; flex-direction: column; align-items: center;">
        <img :src="image" width="30%" alt="Image"
            style="display: block; margin: 0 auto; margin-bottom: -50px; z-index: 2;" />
        <div class="card">
            <h3 style="text-align: center;">{{ title }}</h3>
            <p style="text-align: center;">{{ text }}</p>
        </div>
    </div>

</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 60px 30px 50px 30px;
    align-content: center;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #7c3aff 0%, #5d24ff 50%, #4a00e0 100%);
    /* background-color: rgba(var(--v-theme-button), 0.8); */
    color: white;
    border: none;
    border-radius: 12px;
    height: fit-content;
    width: 25vw;
    /* max-width: 300px; */
    /* position: relative; */
    /* overflow: hidden; */
    gap: 20px;

}

.card:hover {
    background: linear-gradient(30deg, #7c3aff 0%, #5d24ff 50%, #4a00e0 100%);
    /* transform: translateY(-2px); */
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(93, 36, 255, 0.3), 0 0 20px rgba(93, 36, 255, 0.4);
}
</style>

<script setup>
const props = defineProps({
    symbol: String,
    title: String,
    text: String,
    image: String
})

</script>