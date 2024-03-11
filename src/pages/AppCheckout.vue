<script>

import { store } from "../store.js";
import axios from "axios"; //importo Axios
export default {
  name: "AppCheckout",
  data() {
    return {
      store,
      name: '',
      surname: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
      paid: 1,

      // restaurant_id: '',
      expirationDate: '',
      cvv: '',

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

      const total = this.total;
      // Invia l'ordine a Braintree per l'elaborazione del pagamento
      const formData = {

        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        address: this.address,
        notes: this.notes,
        paid: this.paid,
        total: total,
        // restaurant_id: this.store.cart[0].restaurant_id, 
        products: this.store.cart.map(item => ({
          id: item.id,
          item_quantity: item.quantity,
          total: item.total
        })),
        payment: {
          cardNumber: this.cardNumber,
          expirationDate: this.expirationDate,
          cvv: this.cvv
        }
      };

      axios.post('http://127.0.0.1:8000/api/orders/store', formData)
        .then(response => {
          // Gestisci la risposta dal backend
          console.log("Risposta metodo post", response.data.message);

          this.$router.push({ name: 'AppSuccessful' });
        })
        .catch(error => {
          // Gestisci eventuali errori
          console.error('Errore durante la creazione dell\'ordine:', error);
        });




    }
  }
};
</script>

<template>
  <div class="container">
    <h2 class="text-center mb-4">Checkout</h2>

    <!-- Tabella prodotti nel carrello -->
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
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
    </div>

    <!-- Totale -->
    <h3 class="text-end">Totale: {{ total }}</h3>

    <!-- Informazioni ordine -->
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Indirizzo</th>
            <th scope="col">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" id="name" class="form-control" v-model="name" required></td>
            <td><input type="text" id="surname" class="form-control" v-model="surname" required></td>
            <td><input type="number" id="phone" class="form-control" v-model="phone" required></td>
            <td><input type="email" id="email" class="form-control" v-model="email" required></td>
            <td><input type="text" id="address" class="form-control" v-model="address" required></td>
            <td><input type="text" id="notes" class="form-control" v-model="notes"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Campo pagamento -->
    <form @submit.prevent="submitOrder">
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th scope="col">Numero carta di credito</th>
              <th scope="col">Data di scadenza</th>
              <th scope="col">Codice CVV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="cardNumber" placeholder="1234 5678 9012 3456"
                    required>
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fab fa-cc-visa"></i> <!-- Icona VISA -->
                      <i class="fab fa-cc-mastercard"></i> <!-- Icona Mastercard -->
                    </span>
                  </div>
                </div>
              </td>
              <td><input type="text" class="form-control" v-model="expirationDate" placeholder="MM/YY" required></td>
              <td><input type="text" class="form-control" v-model="cvv" placeholder="CVV" required></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pulsanti -->
      <div >
        <button class="btn btn-primary me-4" type="submit">Conferma ordine</button>
        <a class="btn btn-secondary" href="http://localhost:5174/">Torna alla homepage</a>
      </div>
    </form>
  </div>

</template>

<style scoped>
/* Stili specifici al componente */
.myDiv {
  height: 80vh;
}
</style>