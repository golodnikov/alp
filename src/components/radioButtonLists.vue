<template>
  <form>
    <span><h1>Выберите услугу Клининга</h1></span>
    <br />
    <template v-for="radio in data" :key="radio.id">
      <label style="margin-bottom: 14px">
        <input
          class="form-check-input"
          type="radio"
          :value="radio.value"
          v-model="service"
        />
        {{ radio.label }}
      </label>
    </template>
    <hr />
    <button class="btn back" @click="backSite">назад</button><br/>
    <button type="submit" class="btn">отправить</button>

    <template v-for="item in data" :key="item.id">
      <div v-if="item.value === service">
        <p>{{ item.info }}</p>
        <p>{{ item.price }}</p>
      </div>
    </template>
  </form>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        service: null,
      };
    },
    methods: {
      backSite() {
        this.$router.push("/services");
      },
    },
  };
</script>