<template>
    <div class="d-flex ga-5 align-center">
        <v-card class="mt-2 gradient-card" :class="randomGradientClass" height="30vh" min-width="40vh" max-width="60vh"
            rounded="lg" elevation="3">
            <div class="parent_container">
                <div class="d-flex align-center justify-space-between">
                    <div class="d-flex align-center">
                        <img src="@/assets/mc_symbol.svg" height="40px" />
                        <p class="text-align-start">{{ card_type }}</p>
                    </div>
                    <v-btn color="white" variant="tonal" size="small" @click="isCardNumberShown = !isCardNumberShown"
                        icon>
                        <v-icon>{{ isCardNumberShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
                    </v-btn>
                </div>
                <div class="card_details">
                    <div class="d-flex justify-space-between align-end ga-2">
                        <p style="font-size:medium">{{ isCardNumberShown ? card_number : "···· ···· ···· " +
                            card_number.slice(-4) }}</p>
                        <p>{{ card_expiry_date }}</p>
                    </div>
                    <p style="text-transform: uppercase;">{{ card_owner }}</p>
                </div>
            </div>
        </v-card>
        <CardOptions />
    </div>
</template>

<script>
import CardOptions from './CardOptions.vue';

export default {
    name: 'CardItem',
    components: {
        CardOptions
    },
    props: {
        card_brand: {
            type: String,
            required: true
        },
        card_type: {
            type: String,
            required: true
        },
        card_number: {
            type: String,
            required: true,
        },
        card_owner: {
            type: String,
            required: true
        },
        card_expiry_date: {
            type: String,
            required: true
        },
        card_cvv: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isCardNumberShown: false,
        };
    },
    computed: {
        randomGradientClass() {
            const gradientClasses = ['card-gradient-1', 'card-gradient-2', 'card-gradient-3', 'card-gradient-4', 'card-gradient-5'];
            const randomIndex = Math.floor(Math.random() * gradientClasses.length);
            return gradientClasses[randomIndex];
        }
    }

};

</script>

<style scoped>
/* .gradient-card {
    background: radial-gradient(
    circle at top left,
    rgba(var(--v-theme-primary), 0.7),
    rgba(var(--v-theme-secondary), 0.5),
    rgba(var(--v-theme-card), 1)
  );
  transition: all 0.3s ease;
}

.gradient-card:hover {
  background: radial-gradient(
    circle at bottom right,
    rgba(var(--v-theme-primary), 0.8),
    rgba(var(--v-theme-secondary), 0.6),
    rgba(var(--v-theme-card), 1)
  );
  transform: scale(1.02);
} */

.gradient-card {
    transition: all 0.3s ease;
}

.gradient-card:hover {
    transform: scale(1.02);
}


.card_details {
    padding: 5px;
    /* color: white; */
}

.parent_container {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 12px;
    /* color: white; */
}

p {
    font-family: 'Fira Mono', monospace;
    font-size: small;
    color: white;
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