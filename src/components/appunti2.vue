<template>
    <div>
      <!-- Modulo Braintree -->
      <h2>Pagamento con Braintree</h2>
      <div>
        <div id="dropin-container"></div>
        <button @click="submitPayment">Paga con Braintree</button>
      </div>
  
      <!-- Modulo per l'utente visitatore -->
      <h2>Dettagli Cliente</h2>
      <form @submit.prevent="processOrder">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="customerName" required>
  
        <label for="email">Indirizzo Email:</label>
        <input type="email" id="email" v-model="customerEmail" required>
  
        <label for="address">Indirizzo di Spedizione:</label>
        <textarea id="address" v-model="shippingAddress" required></textarea>
  
        <button type="submit">Effettua Ordine</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: Checkout,
    data() {
      return {
        customerName: '',
        customerEmail: '',
        shippingAddress: '',
        braintreeInstance: null
      };
    },
    mounted() {
      // Inizializza il modulo Braintree
      this.initBraintree();
    },
    methods: {
      async initBraintree() {
        // Ottieni il token client per Braintree dal backend
        const response = await axios.get('/braintree-token');
        const token = response.data.token;
  
        // Inizializza il modulo Drop-in di Braintree
        this.braintreeInstance = window.braintree.dropin.create({
          authorization: token,
          container: '#dropin-container'
        });
      },
      async submitPayment() {
        // Invia la richiesta di pagamento a Braintree
        try {
          const { nonce } = await this.braintreeInstance.requestPaymentMethod();
          const response = await axios.post('/process-payment', { paymentMethodNonce: nonce });
          console.log(response.data);
          // Gestisci la risposta da Braintree
        } catch (error) {
          console.error('Errore durante il pagamento:', error);
        }
      },
      async processOrder() {
        // Invia i dettagli dell'ordine e del cliente al backend
        try {
          const response = await axios.post('/process-order', {
            customerName: this.customerName,
            customerEmail: this.customerEmail,
            shippingAddress: this.shippingAddress,
            // Altri dettagli dell'ordine
          });
          console.log(response.data);
          // Gestisci la risposta dal backend
        } catch (error) {
          console.error('Errore durante il processo dell\'ordine:', error);
        }
      }
    }
  };
  </script>