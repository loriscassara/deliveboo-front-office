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
    emptyCart() {
      this.store.cart = [];
      // Aggiorna il carrello nel localStorage
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    },

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
          this.emptyCart();
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
       <div class="mainscreen">
      <div class="card">
        <div class="leftside d-flex flex-column align-items-center p-3">
          <table class="table table-dark table-striped w-100 m-auto">
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
          <h3 class="m-auto">Totale: {{ total }} €</h3>
        </div>
        <div class="rightside">
          <form @submit.prevent="submitOrder">
            <h1 class="text-uppercase fw-bold">CheckOut</h1>
            <h2>Informazioni personali</h2>
            <p class="m-0 pt-1">Nome</p>
            <input type="text" id="name" class="form-control" placeholder="Marco" v-model="name" required>
            <p class="m-0 pt-1">Cognome</p>
            <input type="text" id="surname" class="form-control" placeholder="Rossi" v-model="surname" required>
            <p class="m-0 pt-1">Numero</p>
            <input type="number" id="phone" class="form-control" placeholder="000-000-0000" v-model="phone" required>
            <p class="m-0 pt-1">Email</p>
            <input type="email" id="email" class="form-control" placeholder="marco.rossi@example.com" v-model="email" required>
            <p class="m-0 pt-1">Indirizzo</p>
            <input type="text" id="address" class="form-control" placeholder="Via Torino 12" v-model="address" required>
            
            <h2 class="pt-2">Informazioni pagamento</h2>
            <p>Numero carta</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" placeholder="0000-0000-0000-0000" required />

            <p>Tipo di carta</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">Scegli il tipo di carta</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div class="expcvv">

            <p class="expcvv_text">Scadenza</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" placeholder="000" required />
        </div>
            <button type="submit" class="button text-uppercase">Compra ora</button>
          </form>
          <a href="http://localhost:5173/">Torna alla home</a>
        </div>
      </div>
    </div>

</template>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat';
}

.mainscreen
{
	min-height: 100vh;
	width: 100%;
	display: flex;
    flex-direction: column;
    background-color: #DFDBE5;
    background-image: url("/public/images/checkout.jpg");
    color:#963E7B;
}

.card {
	width: 60rem;
    margin: auto;
    background: white;
    position:center;
    align-self: center;
    top: -3rem;
    border-radius: 1.5rem;
    box-shadow: 10px 3px 20px #0d0d0d8c;
    display:flex;
    flex-direction: row;
    
}

.leftside {
	background-image: url(/public/images/card-cover.jpg);
	width: 25rem;
	display: inline-flex;
    align-items: center;
    justify-content: center;
	border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}

.product {
    object-fit: cover;
	width: 20em;
    height: 20em;
    border-radius: 100%;
}

.rightside {
    background-color: #ffffff;
	width: 35rem;
	border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1rem 2rem 3rem 3rem;
}

p{
    display:block;
    font-size: 1.1rem;
    font-weight: 400;
    margin: .8rem 0;
}

.inputbox
{
    color:#030303;
	width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1.5px solid #ccc;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    color: #615a5a;
    font-size: 1.1rem;
    font-weight: 500;
  outline:none;
}

.expcvv {
    display:flex;
    justify-content: space-between;
    padding-top: 0.6rem;
}

.expcvv_text{
    padding-right: 1rem;
}
.expcvv_text2{
    padding:0 1rem;
}

.button{
    background: linear-gradient(
135deg
, #101010 0%, #727272 100%);
    padding: 15px;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 10px;
    width:100%;
    letter-spacing: .11rem;
    outline:none;
}

.button:hover
{
	transform: scale(1.05) translateY(-3px);
    box-shadow: 3px 3px 6px #38373785;
}

@media only screen and (max-width: 1000px) {
    .card{
        flex-direction: column;
        width: auto;
      
    }

    .leftside{
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
      border-top-right-radius:0;
      border-radius:0;
    }

    .rightside{
        width:auto;
        border-bottom-left-radius: 1.5rem;
        padding:0.5rem 3rem 3rem 2rem;
      border-radius:0;
    }
}
</style>