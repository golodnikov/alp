<template>
 <form v-on:submit.prevent="formSubmit">
    <span><h1>Выберите вид услуг</h1></span>
    <br>
    <label><input class="form-check-input" type="radio" value="dem" v-model="service">демонтаж</label>
    <br>
    <label><input class="form-check-input" type="radio" value="mont" v-model="service">монтаж</label>
    <br>
    <label><input class="form-check-input" type="radio" value="kras" v-model="service">покраска</label>
    <hr>
    <button class="btn back" @click="backSite">назад</button><br>
    <button type="submit" class="btn">отправить</button>
  </form>
</template>

<script>
export default {
    // data() {
    //     return {
    //         service: 
    //     }
    // },
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