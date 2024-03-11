<script>
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppSlider from "./components/AppSlider.vue";
import AppCarousel from "./components/AppCarousel.vue";
import AppFooter from "./components/AppFooter.vue";


import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management
import EventList from "./pages/EventList.vue";

export default {
  components: {
    AppHeader,
    AppJumbo,
    EventList,
    AppSlider,
    AppCarousel,
    AppFooter,
   
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.doThings();
    this.getRestaurantList();
    this.getTypesList();
    //LocalStorage per salvataggio browser item nel carrello.
		const cart = localStorage.getItem('cart');
		if (cart) {
			this.store.cart = JSON.parse(cart);
		}

    // axios.get("indirizzo").then(risultato => {
    // 	console.log(risultato);
    // }).catch(errore => {
    // 	console.error(errore);
    // });
  },
  methods: {
    doThings() {
      console.log("App.vue does things");
    },
    getRestaurantList() {
      let url = this.store.apiUrl + this.store.apiEventEndpoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.success) {
              this.store.restaurantsList = result.data.payload;
			  console.log("risposta restaurants:", this.store.restaurantsList)
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
    getTypesList() {
      let url = this.store.apiUrl + this.store.apiSearchEndPoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.success) {
              this.store.types = result.data.payload;
              console.log(this.store.types);
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
    getFilteredList() {
      let url = this.store.apiUrl + this.store.apiFilteredEndPoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.success) {
              this.store.filteredList = result.data;
              console.log("risultato list types: ", this.store.filteredList);
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
    emptyCart() {
      this.store.cart = [];
      // Aggiorna il carrello nel localStorage
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    },
  },
};
</script>

<template>
  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        Sei sicuro di voler svuotare il carrello?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="emptyCart">Svuota carrello</button>
      </div>
    </div>
  </div>
</div>
  <header class="p-0 sticky-top">
    <AppHeader v-if="['Home', 'Restaurants', 'Restaurant-detail', 'Products', 'ProductSearch', 'ProductsFiltered', 'AppCheckout','AppSuccessful'].indexOf($route.name) > -1"/>
  </header>
  <main class="p-0">
    <AppJumbo v-if="['Home', 'Restaurants', 'Restaurant-detail', 'Products', 'ProductSearch', 'ProductsFiltered'].indexOf($route.name) > -1" id="jumbo" />
    <AppSlider v-if="['Home', 'Restaurants', 'Restaurant-detail', 'Products', 'ProductSearch', 'ProductsFiltered' ].indexOf($route.name) > -1" id="slider" />
    <AppCarousel v-if="['Home', 'Restaurants', 'Restaurant-detail', 'Products', 'ProductSearch', 'ProductsFiltered' ].indexOf($route.name) > -1" id="carousel" />
    <router-view class="router"></router-view>
    <AppFooter  />
  </main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
  overflow-x: hidden;
}

#slider {
  margin-top: -80px
}
.router {
  padding-top: 50px;
}
</style>
