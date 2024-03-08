<template>
    <div class="myDiv">
      <h2 class="text-center">Checkout</h2>
      <table class="table table-dark table-striped w-75 m-auto">
    <thead>
      <tr>
        <th scope="col">Prodotto</th>
        <th scope="col">Quantità</th>
        <th scope="col">Prezzo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in store.cart" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
          </tr>
    </tbody>
  </table>
  
      <h3 class="m-3 w-75 m-auto">Totale: {{ total }}</h3>
  
      <form @submit.prevent="submitOrder">




        <table class="table table-dark table-striped w-75 m-auto">
    <thead>
      <tr>
        <th scope="col"><label for="card-number">Numero carta di credito:</label></th>
        <th scope="col"><label for="expiration-date">Data di scadenza:</label></th>
        <th scope="col"><label for="expiration-date">Data di scadenza:</label></th>
      </tr>
    </thead>
    <tbody>
      <tr>
            <td>
              <input type="text" id="card-number" v-model="cardNumber">
            </td>
            <td>
              <input type="text" id="expiration-date" v-model="expirationDate">
            </td>
            <td>
              <input type="text" id="cvv" v-model="cvv">
            </td>
          </tr>
    </tbody>
  </table>
      <div class="w-75 m-auto m-2">
          <button class="me-4" type="submit">Conferma ordine</button>
          <a href="http://localhost:5173/">Torna alla homepage</a>
      </div>
      </form>
    </div>
  </template>
  
  <script>
  import { store } from "../store.js";
  export default {
    name: "AppCheckout",
    data() {
      return {
        store,
        
        total: 0,
        cardNumber: '',
        expirationDate: '',
        cvv: ''
      };
    },
    computed: {
      // Calcola il totale del carrello
      total() {
        return this.store.cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
      }
    },
    methods: {
      submitOrder() {
        // Invia l'ordine a Braintree per l'elaborazione del pagamento
        const formData = {
          cardNumber: this.cardNumber,
          expirationDate: this.expirationDate,
          cvv: this.cvv,
          amount: this.total // Importo totale dell'ordine
        };
  
        // Esegui la chiamata a Braintree per elaborare il pagamento
        // Questo dovrebbe includere la configurazione del client Braintree e l'invio della richiesta al server per l'elaborazione del pagamento
        // In alternativa, puoi utilizzare l'API di Braintree JavaScript per gestire il pagamento direttamente dal browser
        // Assicurati di implementare le corrette misure di sicurezza e conformità PCI per la gestione dei dati sensibili della carta di credito
      }
    }
  };
  </script>
  
  <style scoped>
  /* Stili specifici al componente */
  .myDiv {
    height: 80vh;
  }
  </style>