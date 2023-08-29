<template>
  <div>
    <radioButtonLists :data="radioLists" />
  </div>
</template>

<script>
import radioButtonLists from "@/components/radioButtonLists.vue";

export default {
  components: {
    radioButtonLists,
  },
  data() {
    return {
      radioLists: [
        {
          id: 1,
          label: "мойка техническими средствами",
          value: "teh",
          price: "От 1000р м2",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro accusantium voluptatum exercitationem fugit aperiam minus assumenda molestias ex quo itaque?",
        },
        {
          id: 2,
          label: "ветраж",
          value: "vet",
          price: "От 100р м2",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro accusantium voluptatum exercitationem fugit aperiam minus assumenda molestias ex quo itaque?",
        },
        {
          id: 3,
          label: "чистка водостоков",
          value: "wod",
          price: "От 1000р м.п.",
          info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro accusantium voluptatum exercitationem fugit aperiam minus assumenda molestias ex quo itaque?",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>
