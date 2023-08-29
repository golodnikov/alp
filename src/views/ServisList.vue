<template>
  <button @click="linkServis">{{ servisesListbutton.title }}</button>
</template>

<script>
export default {
  props: {
    servisesListbutton: {
        type: Object,
        default() {
            return {}
        }
      }
    },
    methods: {
      linkServis() {
        this.$router.push(this.servisesListbutton.linkto)
      }
    }
  }
</script>

<style>

</style>