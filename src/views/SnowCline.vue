<template>
    <form v-on:submit.prevent="formSubmit" >
      <span><h1>Выберите</h1></span>
      <br>
      <label><input class="form-check-input" type="radio" value="teh" v-model="service">мойка техническими средствами</label>
      <br>
      <label><input class="form-check-input" type="radio" value="vet" v-model="service">ветраж dasdsa</label>
      <br>
      <label><input class="form-check-input" type="radio" value="wod" v-model="service">чистка водостоков</label>
      <hr>
      <button class="btn back" @click="backSite">назад</button><br>
      <button type="submit" class="btn">отправить</button>

      <template v-if="service === 'vet'">
        <p>Test block</p>
      </template>
    </form>
</template>
  
<script>
  export default {
      data() {
          return {
              service: 'vet' 
          }
      },
      watch: {  
        service: {
          handler(nVal) {
            console.log(nVal)
          }
        }
      },
      methods: {
          formSubmit() {
            console.log(this.service)
          },
          backSite() {
              this.$router.push('/services')
            }
      }
  }
</script>
  
<style>
  
</style>
  