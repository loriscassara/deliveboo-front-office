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

<!-- <template>
    <main>
        <h1>Eventi in programma:</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4 gy-4" v-for="event in store.eventList">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">{{ event.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{ event.user ? event.user.name : "Utente sconosciuto"
                            }}</h6>
                            <p class="card-text">Biglietti disponibili: {{ event.available_tickets }}</p>
                            <router-link v-for="(item, index) in menuItems" :key="index" :to="{ name: item.routerName }" class="nav-link">
			                    {{ item.label }}
		                    </router-link>
                            <a href="#" class="btn btn-primary">Apri dettagli evento</a>
                            <a href="#" class="btn btn-warning ms-2">Compra biglietti</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template> -->

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

<style scoped lang="scss"></style>
