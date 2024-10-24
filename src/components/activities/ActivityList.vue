<template>
  <div class="activity-container pa-4">
    <div class="d-flex justify-space-between">
      <h1 v-if="isHomePage" class="title">Actividades Recientes</h1>
      <v-btn 
        v-if="isHomePage" 
        class="link" 
        @click="navigateToActivities" 
        elevation="0" 
        variant="text" 
        density="compact"
      >
        Ver más >
      </v-btn>
    </div>

    <div v-if="!displayedActivities.length" class="text-center pa-4">
      <v-icon icon="mdi-receipt-text-clock-outline" size="64" color="text_caption" />
      <p class="text-caption mt-2">No hay actividades para mostrar</p>
    </div>

    <template v-else v-for="(activity, index) in displayedActivities" :key="index">
      <div v-if="isNewDate(index)" class="date-header">
        <v-divider class="my-4" />
        {{ formatDate(activity.date) }}
      </div>
      <ActivityItem 
        v-bind="activity" 
        class="py-2 px-4" 
        @click="showActivityDetails(activity)"
      />
    </template>

    <v-dialog v-model="showDialog" max-width="500">
      <v-card v-if="selectedActivity" class="pa-4" rounded="lg">
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Detalles de la Actividad</span>
          <v-btn icon="mdi-close" variant="text" @click="showDialog = false" />
        </v-card-title>
        
        <v-card-text>
          <div class="my-2">
            <div class="text-caption">Fecha y Hora</div>
            <div>{{ formatDateTime(selectedActivity.date, selectedActivity.time) }}</div>
          </div>
          
          <div class="my-2">
            <div class="text-caption">Usuario</div>
            <div>{{ selectedActivity.user }}</div>
          </div>
          
          <div class="my-2">
            <div class="text-caption">Tipo de Transacción</div>
            <div>{{ selectedActivity.transaction_type }}</div>
          </div>
          
          <div class="my-2">
            <div class="text-caption">Método de Pago</div>
            <div>{{ selectedActivity.payment_type }}</div>
          </div>
          
          <div class="my-2">
            <div class="text-caption">Monto</div>
            <div :class="{ 'text-success': !selectedActivity.out }">
              {{ selectedActivity.out ? '-' : '+' }}{{ selectedActivity.amount }}
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn 
            color="primary" 
            variant="text" 
            @click="showDialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import ActivityItem from './ActivityItem.vue'

export default {
  name: 'ActivityList',
  
  components: {
    ActivityItem
  },
  
  props: {
    activities: {
      type: Array,
      required: true
    },
    displayCount: {
      type: Number,
      default: Infinity
    },
    isHomePage: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const showDialog = ref(false)
    const selectedActivity = ref(null)

    return {
      showDialog,
      selectedActivity
    }
  },
  
  computed: {
    displayedActivities() {
      return this.activities.slice(0, this.displayCount)
    }
  },
  
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      const options = { day: 'numeric', month: 'long' }
      return date.toLocaleDateString('es-ES', options)
    },

    formatDateTime(date, time) {
      const formattedDate = new Date(date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
      return `${formattedDate} - ${time}`
    },

    isNewDate(index) {
      if (index === 0) return true
      return this.displayedActivities[index].date !== this.displayedActivities[index - 1].date
    },

    navigateToActivities() {
      this.$router.push('/actividades')
    },

    showActivityDetails(activity) {
      this.selectedActivity = activity
      this.showDialog = true
    }
  }
}
</script>

<style scoped>
.activity-container {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 20px;
  overflow: hidden;
  min-width: 300px;
}

.date-header {
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: rgb(var(--v-theme-text_caption));
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgb(var(--v-theme-surface));
  padding: 8px 0;
}

.link {
  color: rgb(var(--v-theme-details));
  font-size: x-small;
}

/* Dialog Styles */
:deep(.v-card-title) {
  font-size: 1.25rem;
  font-weight: 500;
}

:deep(.text-caption) {
  color: rgb(var(--v-theme-text_caption));
  font-size: 0.875rem;
  margin-bottom: 4px;
}

:deep(.v-card-text > div) {
  padding: 8px 0;
  border-bottom: 1px solid rgba(var(--v-theme-text_caption), 0.1);
}

:deep(.v-card-text > div:last-child) {
  border-bottom: none;
}
</style>