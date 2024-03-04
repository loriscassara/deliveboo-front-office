<script>
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "TagsList",
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
      let url = this.store.apiUrl + this.store.apiTagEndPoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.success) {
              this.store.tagList = result.data.payload;
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
    <h1>Lista tags disponibili:</h1>
    <li v-for="tag in store.tagList">
      <router-link
        :to="{ name: 'Tag-detail', params: { id: tag.id } }"
        class="btn btn-primary"
      >
        <span>{{ tag.name }}</span>
      </router-link>
    </li>
  </ul>
</template>
