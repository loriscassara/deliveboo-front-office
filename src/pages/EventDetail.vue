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
      messaggioVisibile: false,
      erroreVisibile: false
    };
  },
  mounted() {
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
    addToCart(product) {
      const existingProduct = this.store.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        if (this.store.cart.length > 0 && product.restaurant_id !== this.store.cart[0]?.restaurantId ) {
          this.mostraErrore();
          return;
        }
        this.store.cart.push({
          id: product.id,
          restaurantId: product.restaurant_id,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
        });
        localStorage.setItem('cart', JSON.stringify(this.store.cart));
        const addedProduct = this.store.cart.find(item => item.id === product.id);
        if (addedProduct) {
          this.mostraMessaggio();
        }
      }
    },
    mostraErrore() {
      this.erroreVisibile = true;
      this.messaggioVisibile = false; // Nasconde il messaggio di conferma in caso di errore
    },
    nascondiErrore() {
      this.erroreVisibile = false;
    },
    mostraMessaggio() {
      this.messaggioVisibile = true;
      setTimeout(() => {
        this.messaggioVisibile = false;
      }, 1500);
    },
    
  },
  
};

const dropBtn = document.getElementById('dropdownButton');
if (dropBtn) {
  document.getElementById('dropdownButton').addEventListener('click', function() {
      // Aggiungi la classe 'show' alla dropdown
      document.querySelector('.dropdown').classList.add('show');

      // Rimuovi la classe 'show' dopo 2 secondi
      setTimeout(function() {
        document.querySelector('.dropdown').classList.remove('show');
      }, 1000);
    });
}


</script>


<template>
  
<!-- Modale per messaggio di errore -->
<div class="modal" :class="{ 'show': erroreVisibile }">
    <div class="modal-dialog">
      <div class="modal-content modal-error">
        <div class="modal-body ">
          Non puoi aggiungere prodotti da ristoranti diversi nello stesso ordine! <br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="nascondiErrore">Ok scusa</button>
        </div>
      </div>
    </div>
  </div>
  

  <h3 class="mb-3 text-center fw-bold text-uppercase">Piatti ristorante "{{ restaurant?.business_name }}"</h3>

  <div class="container" v-for="product in restaurant?.products">
      <div class="images">
      <img src="https://media.istockphoto.com/id/589415708/it/foto/frutta-fresca-e-verdura.jpg?s=612x612&w=0&k=20&c=hCaRSdjKzB4phEZRlYS9OPORCwrjiyHFSQ1jEGVnvB4=" />
      </div>
      <div class="product">
        <h1>{{ product.name }}</h1>
        <h2>{{ product.price }} €</h2>
        <p class="desc">{{ product.description }}</p>
        
      </div>
      <div class="buttons pt-4">
      <form class="d-flex justify-content-between align-items-center" @submit.prevent="addToCart(product)">
        <div class="d-flex justify-content-between align-items-center">
        <label class="m-0 me-3" :for="product.id">Seleziona quantità:</label>
        <input class="input-group-text mb-2" type="number" :id="product.id" name="quantity" min="1" max="" v-model="product.quantity">
      </div>
        <button id="dropdownButton" type="submit" @click="mostraMessaggio">Aggiungi al carrello</button>

      </form>
      
      <!-- Modale per messaggio di aggiunta al carrello -->
      <div class="modal" :class="{ 'show': messaggioVisibile }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            Oggetto aggiunto al carrello!
          </div>
        </div>
      </div>
    </div>
    </div>
</div>

<h5 v-if="messaggio">{{ messaggio }}</h5>
  <router-link :to="{ name: 'Restaurants' }" class="btn btn-outline-dark w-25 m-auto d-flex justify-content-center mt-5 mb-5">
    <span>Torna alla lista ristoranti</span>
  </router-link>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat';
}

h3 {
  margin-top: 300px;
}

label {
  margin-top: 40px;
}

.container {
  position: relative;
  margin-top: 50px;
  overflow: hidden;
  width: 520px;
  height: 350px;
  background: #F5F5F5;
  box-shadow: 5px 5px 15px rgba(#1b1b1b, .5);
  border-radius: 10px;
}

p {
  font-size: 0.6em;
  color: #BA7E7E;
  letter-spacing: 1px;
}

h1 {
  font-size: 1.2em;
  color: #4E4E4E;
  margin-top: -5px;
}

h2 {
  color: #000000;
  margin-top: -5px;
}

img {
  width: 290px;
  margin-top: 35px;
}

.slideshow-buttons {
  top: 70%;
  display: none;
}

.product {
  position: absolute;
  width: 40%;
  height: 60%;
  top: 10%;
  left: 60%;
}

.desc {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 17px;
  color: #4E4E4E;
  font-size: .7em;
  line-height: 1.6em;
  margin-right: 25px;
  text-align: justify;
}

button {
  background: darken(#424242, 10%);
  padding: 10px;
  display: inline-block;
  outline: 0;
  border: 0;
  margin: -1px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #F5F5F5;
  cursor: pointer;
  &:hover {
    background: #000000;
    transition: all .4s ease-in-out;
  }
}

.add {
  width: 67%;
}

.like {
  width: 22%;
}

.sizes {
  display: grid;
  color: #000000;
  grid-template-columns: repeat(auto-fill, 30px);
  width: 60%;
  grid-gap: 4px;
  margin-left: 20px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
}

.pick {
  margin-top: 11px;
  margin-bottom:0;
  margin-left: 20px;
}

.size {
  padding: 9px;
  border: 1px solid #000000;
  font-size: 0.7em;
  text-align: center;
  &:hover{
    background: #000000;
    color: #F5F5F5;
    transition: all .4s ease-in-out;
  }
}

.focus{
  background: #0a0a0a;
  color: #F5F5F5;
}

//prove dario

.modal {
  display: none;
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
  background-color: #15ff00;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  font-weight: 600;
}
.modal-error {
  position: relative;
  background-color: #ff0000;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  font-weight: 600;
}

.show {
  display: block !important;
}
</style>