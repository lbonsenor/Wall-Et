<template>
    <div class="email d-flex ga-3">
        <v-text-field variant="outlined" rounded="lg" placeholder="Email" persistent-placeholder hide-details
            hide-spin-buttons color="secondary" width="300px"></v-text-field>
        <div class="button" @click="navigateToRegisterPage">Empezar</div>
    </div>
</template>

<script>
export default{
    methods:{ navigateToRegisterPage() {
        console.log(this.$router.push('/login'))
    }}
}
</script>

<style scoped>
.button {
    display: inline-flex;
    padding: 12px 24px;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-weight: normal;
    font-size: normal;
    letter-spacing: normal;
    background: linear-gradient(135deg, #7c3aff 0%, #5d24ff 50%, #4a00e0 100%);
    color: white;
    border: none;
    border-radius: 12px;
    height: 56px;
    box-shadow: 0 4px 6x rgba(93, 36, 255, 0.2), 0 0 15px rgba(93, 36, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.button:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(93, 36, 255, 0.3), 0 0 20px rgba(93, 36, 255, 0.4);
}

.button:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #8d5bff, #5d24ff, #4a00e0, #8d5bff);
    z-index: -1;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.button:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(93, 36, 255, 0.2), 0 0 10px rgba(93, 36, 255, 0.3)
}

@media (max-width: 820px) {
    .email {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>