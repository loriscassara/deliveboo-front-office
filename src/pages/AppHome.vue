<script>
import { store } from "../store";
import RestaurantCard from "../components/RestaurantCard.vue";
import TypesCard from "../components/TypesCard.vue";
export default {
  name: "AppHome",
  components: {
    RestaurantCard,
    TypesCard,
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
      <h1 class="text-center text-uppercase fw-bold">Benvenuto su Deliveboo!</h1>
      <h3 class="text-center fw-bold">Categorie ristoranti</h3>
      <TypesCard />
      <h3 class="text-center fw-bold pt-5 pb-4">Lista ristoranti</h3>
      <RestaurantCard v-for="restaurant in store.restaurantsList" :item="restaurant" />
    </div>
  </div>
</template>

<style scoped>

</style>
