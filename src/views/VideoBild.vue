<template>
    <form v-on:submit.prevent="formSubmit">
      <span><h1>Выберите услугу</h1></span>
      <br>
      <label><input class="form-check-input" type="radio" value="vid" v-model="service">монтаж камер</label>
      <br>
      <label><input class="form-check-input" type="radio" value="remont" v-model="service">ремонт существующей линии</label>
      <br>
      <label><input class="form-check-input" type="radio" value="montBild" v-model="service">установка датчиков</label>
      <br>
      <label><input class="form-check-input" type="radio" value="final" v-model="service">проверка и пусконаладка системы</label>
      <hr>
      <button class="btn back" @click="backSite">назад</button><br>
      <button type="submit" class="btn">отправить</button>

      
    </form>
  </template>
  
  <script>
  export default {
      data() {
          return {
              service: 'vid' 
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
  .back {
    position: absolute;
    top: 9rem;
    left: 30rem;
  }
  
  </style>