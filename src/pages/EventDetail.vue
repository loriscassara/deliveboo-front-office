<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "EventDetail",
  props: ["id"],
  data() {
    return {
      store,
      restaurant: null,
    };
  },
  mounted() {
    // this.event = this.store.eventList.find(item => item.id == this.id);
    this.getEventDetail();
  },
  methods: {
    getEventDetail() {
      let url = this.store.apiUrl + this.store.apiEventEndpoint + this.id;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.success) {
              this.restaurant = result.data.payload;
            } else {
              console.error(
                "Ops... non siamo in grado di soddisfare la richiesta."
              );
            }
          } else if (result.status === 301) {
            console.error("Ops... ciò che cerchi non si trova più qui.");
          } else if (result.status === 400) {
            console.error(
              "Ops... non riusciamo a comprendere ciò che hai richiesto."
            );
          } else if (result.status === 404) {
            console.error(
              "Ops... non riusciamo a trovare ciò che hai richiesto."
            );
          } else if (result.status === 500) {
            console.error(
              "Ops... ci scusiamo per l'inconveniente, stiamo spegnendo l'incendio."
            );
          }
        })
        .catch((errore) => {
          console.error(errore);
        });
    },
  },
};
</script>
<!-- 'business_name' => 'Ristorante La Pergola',
                'description' => 'Cucina raffinata con vista panoramica.',
                'address' => 'Via Roma, 123',
                'P_IVA' => '12345678901',
                'phone' => '0123456789',
                'cover_image' => '' -->
<template>
  <div class="container">
    <div class="row">
      <h3 class="mb-3">Piatti del ristorante:</h3>
      <div class="m-4" v-for="product in restaurant?.products">
              
                        <h5>{{ product.name }}</h5>
                        <h5>{{ product.description }}</h5>
                        <h5>prezzo: {{ product.price }} €</h5>

      </div>

      <router-link :to="{ name: 'Restaurants' }" class="btn btn-primary w-25 m-auto">
        <span>Torna alla lista ristoranti</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
