<template>
    <div class="hero-container">
        <div class="left-content">
            <div class="content-wrapper">
                <h2>Tu plata, tus reglas: <span class="highlight">simplificá tus finanzas</span></h2>
                <p class="description">La billetera virtual que Argentina estaba esperando; rápida, segura y simple.</p>
                <Email />
            </div>
        </div>
        <div class="right-content">
            <img src="@/assets/wallet.svg" alt="Wallet" />
        </div>
    </div>
</template>

<script setup>
import Email from './Email.vue';
</script>

<style scoped>
.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    gap: 2rem;
    margin-top: 30px;
}

.left-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.content-wrapper {
    max-width: 500px;
}

h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: 1rem;
}

.highlight {
    color: rgb(var(--v-theme-title_span));
}

.description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    margin-bottom: 2rem;
}

.right-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-content img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
}

@media (max-width: 820px) {
    .hero-container {
        flex-direction: column;
        text-align: center;
    }

    .left-content,
    .right-content {
        justify-content: center;
    }

    .content-wrapper {
        max-width: 100%;
    }


    .right-content img {
        max-height: 300px;
    }
}

@media (max-width: 600px) {
    .hero-container {
        padding: 1rem;
    }

    .right-content img {
        max-height: 200px;
    }
}
</style>