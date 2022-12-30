<script setup>
import { computed } from 'vue'
import { getGeolocation } from 'src/logic/GoogleMapLogic'

const { coordinates } = getGeolocation()
const currPos = computed(() => ({
    lat: coordinates.value.latitude,
    lng: coordinates.value.longitude
}))
</script>
<template>
    <div class="d-flex text-center">
        <div class="m-auto">
            <h4>Position</h4>
            Latitude: {{ currPos.lat.toFixed(2) }}, Longitude: {{ currPos.lng.toFixed(2) }}
        </div>
    </div>
</template>
