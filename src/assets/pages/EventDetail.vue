<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "EventDetail",
  props: ["id"],
  data() {
    return {
      store,
      event: null,
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
              this.event = result.data.payload;
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
<!-- user_id name date available_tickets user {id name email} -->
<template>
  <div class="container">
    <div class="row">
      <h1 class="mb-3">Nome evento: {{ event?.name }}</h1>
      <h3 class="mb-3">A cura di: {{ event?.user.name }}</h3>
      <h5 class="mb-3">Email: {{ event?.user.email }}</h5>
      <h3 class="mb-3">Data dell'evento: {{ event?.date }}</h3>
      <h3 class="mb-3">
        Tag associati:
        <span
          class="mx-2 badge rounded-pill text-bg-info"
          v-for="tag in event?.tags"
        >
          <router-link
            :to="{ name: 'Tag-detail', params: { id: tag.id } }"
            class="text-decoration-none text-white"
          >
            <span>{{ tag.name }}</span>
          </router-link>
        </span>
      </h3>
      <h3 class="mb-3">Biglietti rimanenti: {{ event?.available_tickets }}</h3>
      <router-link :to="{ name: 'Events' }" class="btn btn-primary">
        <span>Torna alla lista eventi</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
