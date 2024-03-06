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
      counter: 0,
      cart: []
    };
  },
  mounted() {
    // this.event = this.store.eventList.find(item => item.id == this.id);
    this.getEventDetail();

  },
  computed: {
    prova() {
      console.log("counter: ", this.counter)

    }



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
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          price: product.price
        });
      }
      // Aggiorna il carrello nello storage o nella sessione, ad esempio localStorage o sessionStorage
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log("card: ", this.cart)
    },
    // Altri metodi per rimuovere prodotti dal carrello, svuotare il carrello, etc.


  },
};
</script>


<template>
  <div class="container">
    <div class="row">
      <h3 class="mb-3">Piatti del ristorante:</h3>
      <div class="m-4" v-for="product in restaurant?.products">
        <h5>{{ product.name }}</h5>
        <h5>{{ product.description }}</h5>
        <h5>prezzo: {{ product.price }} €</h5>
        <!-- <form action="">
          <label :for="product.id">Seleziona quantita:</label>
          <input type="number" :id="product.id" name="quantity" min="1" max="20" @change="prova" v-model="counter">
          <input type="button" value=" Aggiunge al carrello ">
        </form> -->

        <form @submit.prevent="addToCart(product)">
          <label :for="product.id">Seleziona quantità:</label>
          <input type="number" :id="product.id" name="quantity" min="1" max="20" v-model="product.quantity">
          <button type="submit">Aggiungi al carrello</button>
        </form>
      </div>
      <router-link :to="{ name: 'Restaurants' }" class="btn btn-primary w-25 m-auto">
        <span>Torna alla lista ristoranti</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
