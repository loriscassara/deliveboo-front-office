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
      <h1 class="text-center text-uppercase fw-bold">Benvenuto su Deliveboo!</h1>
      <h3 class="text-center fw-bold">Categorie ristoranti</h3>
      <TypesCard />

      <div class="d-flex justify-content-center pb-5">
      <div v-for="tag in store.types">
            <!-- <input type="checkbox" v-model="selectedTypes" :value="tag.id" @change="filteredRestaurants">
          {{ tag.name }} -->
         
            <input type="checkbox" v-model="selectedTypes" :value="tag.id" @change="filteredRestaurants" class="btn-check" :id="tag.id + 1" autocomplete="off">
            <label class="btn btn-outline-dark m-2" :for="tag.id + 1"> {{ tag.name }} </label>
            
      </div>
      </div>




      <h3 v-if="filteredRestaurants.length" class="text-center fw-bold pb-5">La lista dei nostri ristoranti:</h3>
      <h3 v-else class="text-center fw-bold pb-5"><i>Non ci sono ristoranti che soddisfano la ricerca</i></h3>
      <RestaurantCard v-for="restaurant in filteredRestaurants" :item="restaurant" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat';
}
</style>
