<script>
import { store } from "../store";
import RestaurantCard from "../components/RestaurantCard.vue";
export default {
  name: "EventList",
  components: {
    RestaurantCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center">Lista ristoranti:</h1>
      <RestaurantCard
        v-for="restaurant in store.restaurantsList"
        :item="restaurant"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
