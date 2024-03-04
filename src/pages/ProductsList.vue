<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "ProductsList",
  data() {
    return {
      store,
    };
  },
  mounted() {
    // this.event = this.store.eventList.find(item => item.id == this.id);
    this.getTagDetail();
  },
  methods: {
    getTagDetail() {
      let url = this.store.apiUrl + this.store.apiProductEndPoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.success) {
              this.store.productList = result.data.payload;
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

<template>
  <ul>
    <h1>Lista Piatti:</h1>
    <li v-for="product in store.productList">
      <!-- <router-link
        :to="{ name: 'Restaurant-details', params: { id: product.id } }"
        class="btn btn-primary"
      >
        <span>{{ product?.name }}</span>
      </router-link> -->
      <span>{{ product?.name }}</span>
    </li>
  </ul>
</template>
