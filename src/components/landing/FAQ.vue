<template>
    <div id="faq"
        style="display: flex; flex-direction: column; align-items: center; justify-content: center;  width:100%; padding-top:100px; margin-bottom: 20px; ">
        <h1 class="mb-3">FAQs</h1>
        <v-expansion-panels color="surface" variant="popout">
            <v-expansion-panel title="1. ¿Cómo recupero mi contraseña?"
                text="Al iniciar sesión, puede presionar el botón '¿Olvidaste tu contraseña?' y seguir las instrucciones para recuperarla.">
            </v-expansion-panel>
            <v-expansion-panel title="2. ¿Cómo puedo activar el control parental?"
                text="Por el momento, el control parental únicamente se encuentra disponible en Nueva Zelanda.">
            </v-expansion-panel>
            <v-expansion-panel title="3. ¿Dónde estará disponible la app?"
                text="Wall-Et estará disponible en Google Play y App Store.">
            </v-expansion-panel>
            <v-expansion-panel title="4. ¿Cuándo será el lanzamiento de la app?"
                text="Próximamente.">
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>