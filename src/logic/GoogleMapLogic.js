import { onMounted, onUnmounted, ref } from 'vue'

export function getGeolocation () {
    const coordinates = ref({ latitude: 0, longitude: 0 })
    // geolocation is supported
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    // keep coordinates up-to-date
    let watcher = null
    onMounted(() => {
        if (isSupported) {
            watcher = navigator.geolocation.watchPosition(
                position => (coordinates.value = position.coords) // update when users location changes
            )
        }
    })
    // handle listener safely
    onUnmounted(() => {
        if (watcher) {
            navigator.geolocation.clearWatch(watcher) // clear watcher when unmounted
        }
    })

    return { coordinates, isSupported }
}
