<script>
import axios from 'axios';
import { store } from '../store';

export default {
  data() {
    return {
      clientToken: null,
      braintreeInstance: null,
      customerName: "",
      customerSurname: "",
      customerPhone: "",
      customerEmail: "",
      customerAddress: "",
      orderNotes: "",
      total: 0,
      store
    };
  },
  mounted() {
    this.getClientToken();
  },
  computed: {
    getTotal() {
      return this.store.cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    }
  },
  methods: {
    async getClientToken() {
      try {
        const response = await axios.get(store.apiUrl + "token");
        this.clientToken = response.data.token; // Assuming the token key is 'token'
        this.initializeBraintree();
      } catch (error) {
        console.error('Errore durante il recupero del client token:', error);
      }
    },
    initializeBraintree() {
      braintree.dropin.create({
        authorization: this.clientToken, // Removed quotes around this.clientToken
        selector: '#dropin-container'
      }, (err, instance) => {
        if (err) {
          console.error('Errore durante l\'inizializzazione di Braintree:', err);
          return;
        }
        this.braintreeInstance = instance;
      });
    },
    async submitPayment() {
      try {
        const { nonce } = await this.braintreeInstance.requestPaymentMethod();
        const response = await axios.post(this.store.apiUrl + 'token', {
          nonce: nonce,
          name: this.customerName,
          surname: this.customerSurname,
          phone: this.customerPhone,
          email: this.customerEmail,
          address: this.customerAddress,
          notes: this.orderNotes,
          total: this.getTotal, // Sending total from frontend
        });
        console.log(response.data);
        // Handle response from backend
      } catch (error) {
        console.error('Errore durante il pagamento:', error);
      }
    },
    async processOrder() {
      // Process order details
    }
  }
};
</script>

<template>
  <div>
    
  <div class="myDiv">
    <h2 class="text-center">Checkout</h2>
    <!-- Campo info compra -->
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
    <h3 class="m-3 w-75 m-auto">Totale: {{ getTotal }}</h3>
  </div>


    <!-- Modulo Braintree -->
    <div>
      <div id="dropin-container" class="w-25"></div>
      <button id="submit-button" class="button button--small button--green" @click="submitPayment">Aggiungi metodo di pagamento</button>
    </div>

    <!-- Modulo per l'utente visitatore -->
    <h2>Dettagli Cliente</h2>
    <form @submit.prevent="processOrder" class="mb-3">
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" v-model="customerName" required>

      <label for="surname">Cognome:</label>
      <input type="text" id="surname" name="surname" v-model="customerSurname" required>

      <label for="phone">Telefono:</label>
      <input type="number" minlength="9" maxlength="13" id="phone" name="phone" v-model="customerPhone" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="customerEmail" required>

      <label for="address">Indirizzo:</label>
      <input type="text" id="address" name="address" v-model="customerAddress" required>

      <label for="notes">Note:</label>
      <input type="text" id="notes" name="notes" v-model="orderNotes">

      <button type="submit">Effettua Ordine</button>
    </form>
  </div>
</template>


<style scoped>
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  --webkit-appearance: none;
  --moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>