<template>
  <logo/>
  <RouterView/>
</template>

<script >
import logo from '@/components/logo.vue'


export default {
  components: { 
    logo
  }
}


</script>


<style lang="scss" scoped>
@import "@/styles/main.scss";

#app {
  font-family: 'Courier New', Courier, monospace;
  position: relative;
}
// .logo:hover {
//   filter: drop-shadow(0 0 2em #03f754aa);
// }
// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
