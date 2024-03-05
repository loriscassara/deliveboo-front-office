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
      <h1>Benvenuto su Deliveboo!</h1>
      <h3>le nostre categorie:</h3>
      <TypesCard />
      <h3>La lista dei nostri ristoranti:</h3>
      <RestaurantCard v-for="restaurant in store.restaurantsList" :item="restaurant" />
    </div>
  </div>
</template>

<style scoped></style>
