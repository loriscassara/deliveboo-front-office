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
      selectedTypes: [],
    };
  },
  computed: {
    filteredRestaurants() {
      return this.store.restaurantsList.filter(restaurant => {
        // Controlla se non ci sono tipi selezionati
        if (this.selectedTypes.length === 0) {
          return true; // Se non ci sono tipi selezionati, tutti i ristoranti devono essere visualizzati.
        } else {
          // Verifica che tutti i tipi selezionati siano presenti nei tipi associati al ristorante
          return this.selectedTypes.every(selectedTypeId =>
            restaurant.types.some(tag => tag.id === selectedTypeId)
          );
        }
      });
    },
  },
};

</script>





<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-uppercase fw-bold">Benvenuto su Deliveboo!</h1>
        <h3 class="text-center fw-bold">Categorie ristoranti</h3>
        <TypesCard />
      </div>

      <div class="col-12 d-flex flex-wrap justify-content-center pb-5">
        <div v-for="tag in store.types" :key="tag.id">
          <input type="checkbox" v-model="selectedTypes" :value="tag.id" @change="filteredRestaurants" class="btn-check"
            :id="'tag' + tag.id" autocomplete="off">
          <label class="btn btn-outline-dark m-2" :for="'tag' + tag.id">{{ tag.name }}</label>
        </div>
      </div>

      <div class="col-12">
        <h3 v-if="filteredRestaurants.length" class="text-center fw-bold pb-5">La lista dei nostri ristoranti:</h3>
        <h3 v-else class="text-center fw-bold pb-5"><i>Non ci sono ristoranti che soddisfano la ricerca</i></h3>
        <RestaurantCard v-for="restaurant in filteredRestaurants" :key="restaurant.id" :item="restaurant"
          class="col-md-6 col-lg-4 mb-4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Il tuo stile rimane invariato */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
font-family: 'Montserrat';
}
</style>