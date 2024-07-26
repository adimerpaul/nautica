<template>
  <q-page class="q-pa-xs bg-grey">

  </q-page>
</template>
<script>
export default {
  name: 'BoatDetails',
  data () {
    return {
      boat: {}
    }
  },
  async created () {
    this.boat = await this.$axios.get(`/boats/${this.$route.params.id}`).then(res => res.data)
  }
}
</script>
