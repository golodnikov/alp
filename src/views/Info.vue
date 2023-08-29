<template>
  <Button label="Primary" class="p-button" @click="linkServis">Работы любой сложности</Button>
</template>

<script>

import Button from 'primevue/button';



export default {
  components: {
    
  },
  methods: {
      linkServis() {
        this.$router.push('/services')
      }
    }
}
</script>

<style>

</style>