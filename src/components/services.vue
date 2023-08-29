<template >
  <h1>services</h1>
  <hr>
  <ServisList v-for="list in servisesListbutton" 
  :key="list"
  :servisesListbutton="list"
  class="serviceItems"/><hr>
</template>

<script>
import ServisList from '@/views/ServisList.vue'

export default {
  components: {
    ServisList
  },
  data() {
    return {
      servisesListbutton: []
    }
  },
  mounted() {
    fetch('src/db/servisList.js')
      .then((response)=> {
          return response.json()
      })
      .then((data)=> {
          this.servisesListbutton = data
      })
    }
  }
</script>

<style>
.serviceItems {
  margin: 2px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.btn {
  position: absolute;
  top: 9rem;
  left: 50rem;
}

</style>