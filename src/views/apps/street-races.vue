<template>
    <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut" mode="out-in">
        <loading v-if="isLoading" />
    </transition>

    <div class="page">
       Street races open
    </div>
</template>

<script>
import loading from '../../components/extras/loading'

export default {
    name: 'street-races',
    components: {
        loading
    },
    data() {
        return {
            isLoading: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1500)
    }
}
</script>

<style scoped>

</style>