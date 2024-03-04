<script>
import { store } from "../store";
import EventCard from "../components/EventCard.vue";
export default {
  name: "EventList",
  components: {
    EventCard,
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
      <h1>Eventi in programma:</h1>
      <EventCard v-for="event in store.eventList" :item="event" />
    </div>
  </div>
</template>
<style scoped></style>
