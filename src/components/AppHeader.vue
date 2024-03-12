<script>
import { store } from "../store.js"; //

export default {
  name: "AppHeader",
  components: {


  },
  data() {
    return {
      menuItems: [],
      store,
      sum: 0
    };

  },
  methods: {

    calculateTotal() {
      let total = 0;
      this.store.cart.forEach(item => {
        total += parseFloat((item.price * item.quantity).toFixed(2));
      });
      return total;
    },
    deleteItemFromCart(item) {
      this.store.cart.splice(item, 1);
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    },
    cartDeleteItemQuantity(item) {
      (item.quantity > 1) ? item.quantity-- : 0;
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    },
    cartAddItemQuantity(item) {
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    }


  },


  computed: {
    cartQuantity() {
      return this.store.cart.reduce((total, product) => total + product.quantity, 0);
    }

  }
};
</script>
<template>
  <!-- Modal -->
  <!-- ciaone -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          Sei sicuro di voler svuotare il carrello?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="emptyCart">Svuota
            carrello</button>
        </div>
      </div>
    </div>
  </div>

  <!-- start header section -->
  <header>

    <!-- navbar -->
    <nav class="navbar px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:5173/">
          <img id="nav-logo" src="/public/images/png-logo.png" alt="Bootstrap" />
        </a>
        <div>

          <button type="button" class="btn btn-outline-light mx-2 rounded-circle p-2 border-2" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="fa-regular fa-user mx-1"></i>
          </button>

          <!-- dropdown to back-office -->
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a>
            <a class="dropdown-item" href="http://127.0.0.1:8000/register">Registrati</a>
          </div>


          <button type="button" class="btn btn-outline-light mx-2 border-2 position-relative" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="fa-solid fa-cart-shopping text-light"></i>
            <div class="dot" v-if="this.store.cart.length"> {{ cartQuantity }}</div>
          </button>
        </div>
      </div>
    </nav>

    <!-- offcanvas -->
    <div class="offcanvas offcanvas-end d-md-block d-lg-block d-xl-block" tabindex="-1" id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header border-3 border-bottom">
        <h5 class="offcanvas-title fw-bold" id="offcanvasRightLabel">
          Il mio carello
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <!-- ternario in cui se non c'è nulla compare "Il carrello è vuoto!" mentre se c'è roba viene "I tuoi articoli" -->
        <p class="text-center fw-bold fst-italic" v-if="!this.store.cart.length"> Non ci sono prodotti nel carrello</p>
        <p class="fw-bold text-center" v-else>I tuoi articoli:</p>
        <div v-for="item in store.cart">
          <div class="d-flex">
            <img src="" alt="">
            <div>
              <h6>Nome: {{ item.name }}</h6>
              <p class="mb-1">Prezzo: {{ item.price }} €</p>
              <p>Quantità: {{ item.quantity }}</p>
              <button class="btn btn-outline-dark px-3 me-2" @click="cartDeleteItemQuantity(item)">-</button>
              <button class="btn btn-outline-dark px-3" @click="cartAddItemQuantity(item)">+</button>
              <button class="btn btn-outline-danger px-2 ms-4" @click="deleteItemFromCart(item)">Rimuovi</button>

            </div>

          </div>
          <hr>
        </div>
        <p class="fw-bold text-danger text-center" v-if="store.cart.length">Totale: {{ calculateTotal() }} €</p>
        <div class="d-flex flex-row align-items-center justify-content-between">
          <router-link v-if="store.cart.length" class="btn btn-success my-2 myCheckoutBtn"
            to="/checkout">Checkout</router-link>
          <!-- <button type="button" class="btn btn-success my-2">Checkout</button> -->
          <button v-if="store.cart.length" type="button" class="btn btn-danger my-2" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Svuota Carrello</button>
        </div>
      </div>
    </div>

  </header>
  <!-- end header section -->

</template>

<style scoped lang="scss">
.navbar {
  background: #000000;
  opacity: 0.7;
}

#nav-logo {
  width: 6rem;
  height: 6rem;
}

.dropdown-menu {
  top: 75% !important;
  right: 8% !important;
}

.dot {
  position: absolute;
  width: 0.95rem;
  height: 0.95rem;
  background-color: red;
  border-radius: 50%;
  right: -0.5rem;
  top: -0.5rem;
}

// .offcanvas {
//   width: 100% !important;
// }

.offcanvas-header {
  background-image: url(/public/images/health-food-healthy-diet-diabetes-mellitus-movie-set-meal-122c7c38808c03a9d3eb4c009e8f84ba.png);
  background-size: 77%;
  background-position-x: right;
  background-repeat: no-repeat;
}

button:hover .fa-cart-shopping {
  filter: invert(1);
}

.btn-success,
.btn-danger {
  width: 40%;
}

.offcanvas-header {
  border-color: #57a708 !important;
}

.myCheckoutBtn {
  padding: 1.1rem;
}
</style>