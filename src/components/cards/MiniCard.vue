<template>
    <v-card :class="randomGradientClass" class="gradient-card mx-auto my-auto align-center mt-4 pa-2" rounded="xl" elevation="1"
    @click="navigateToCards">
        <template v-slot:prepend>
            <v-icon icon="mdi-credit-card" class="mr-2"></v-icon>
            <v-card-title class="custom-subtitle mr-2"> {{ " " + card_type + " " }} </v-card-title>
            <v-card-title class="custom-subtitle"> {{ " ···· ···· ···· " + card_number.substring(card_number.length-4) }}</v-card-title>
        </template>
    </v-card>
</template>
<!-- @click="navigateToCards" -->


<script>
export default {
    name: 'MiniCard',
    props: {
        card_brand: {
            type: String,
            required: true
        },
        card_type: {
            type: String,
            required: false
        },
        card_number: {
            type: String,
            required: true
        }
    },
    methods: {
        navigateToCards() {
            return this.$router.push('/tarjetas');
        }
    },
    computed: {
        randomGradientClass() {
            const gradientClasses = ['card-gradient-1', 'card-gradient-2', 'card-gradient-3', 'card-gradient-4', 'card-gradient-5'];
            const randomIndex = Math.floor(Math.random() * gradientClasses.length);
            return gradientClasses[randomIndex];
        }
    },

}
</script>

<style scoped>
.custom-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    /* color: rgb(var(--v-theme-title)); */
    font-family: 'Fira Mono', monospace;
    font-size: small;
    white-space: nowrap;
    display: flex;
    justify-content: flex-end;
}

.gradient-card {
    transition: all 0.3s ease;
    color: white;
}

.gradient-card:hover {
    transform: scale(1.02);
    cursor: pointer;
}

/* Scheme 1: Deep Purple to Indigo */
.card-gradient-1 {
    background: linear-gradient(135deg, #4A0E4E 0%, #3F51B5 100%);
}

.card-gradient-1:hover {
    background: linear-gradient(30deg, #5C1160 0%, #5C6BC0 100%);
}

/* Scheme 2: Midnight Blue to Electric Blue */
.card-gradient-2 {
    background: linear-gradient(135deg, #1A237E 0%, #0288D1 100%);
}

.card-gradient-2:hover {
    background: linear-gradient(80deg, #2C3590 0%, #039BE5 100%);
}

/* Scheme 3: Dark Teal to Aqua */
.card-gradient-3 {
    background: linear-gradient(135deg, #00695C 0%, #00BCD4 100%);
}

.card-gradient-3:hover {
    background: linear-gradient(80deg, #00796B 0%, #26C6DA 100%);
}

/* Scheme 4: Deep Magenta to Violet */
.card-gradient-4 {
    background: linear-gradient(135deg, #880E4F 0%, #9C27B0 100%);
}

.card-gradient-4:hover {
    background: linear-gradient(80deg, #9A1663 0%, #AB47BC 100%);
}

/* Scheme 5: Navy to Cerulean */
.card-gradient-5 {
    background: linear-gradient(135deg, #0D47A1 0%, #03A9F4 100%);
}

.card-gradient-5:hover {
    background: linear-gradient(80deg, #1565C0 0%, #29B6F6 100%);
}
</style>