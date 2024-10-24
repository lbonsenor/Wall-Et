<template>
  <div class="activity-container pa-4">
    <div class="d-flex justify-space-between">
        <h1 v-if="isHomePage" class="title">Actividades Recientes</h1>
        <v-btn v-if="isHomePage" class="link" @click="navigateToActivities" elevation="0" variant="text" density="compact">Ver más ></v-btn>
    </div>
    <template v-for="(activity, index) in displayedActivities" :key="index">
      <div v-if="isNewDate(index)" class="date-header">
        <v-divider class="my-4" />
        {{ formatDate(activity.date) }}
      </div>
      <ActivityItem v-bind="activity" class="py-2 px-4" />
    </template>
  </div>
  
</template>

<script>
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
    isNewDate(index) {
      if (index === 0) return true
      return this.displayedActivities[index].date !== this.displayedActivities[index - 1].date
    },
    navigateToActivities() {
      this.$router.push('/actividades')
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
}


.link {
  color: rgb(var(--v-theme-details));
  font-size: x-small;
  /* padding: 0 20px 0 0; */
  /* margin-right: 3%; */

}
</style>