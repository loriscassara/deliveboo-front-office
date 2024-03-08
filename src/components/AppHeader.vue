<script>
import { store } from "../store.js"; //
export default {
  name: "AppHeader",
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
      (item.quantity>1) ? item.quantity-- : 0;
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    },
    cartAddItemQuantity(item) {
      (item.quantity<20) ? item.quantity++ : 0;
      localStorage.setItem('cart', JSON.stringify(this.store.cart));
    }

    
    },

    
    computed: {
//       totalSum() {

// for (let i = 0; i < this.total.length; i++) {
//   this.sum += Number(this.total[i]);
// }
//   console.log(this.sum);
// }

    }
};
</script>
<template>
  

  <!-- start header section -->
  <header>

    <!-- navbar -->
    <nav class="navbar px-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:5173/">
          <img
            id="nav-logo"
            src="/public/images/png-logo.png"
            alt="Bootstrap"
          />
        </a>
        <div>

          <button type="button" class="btn btn-outline-light mx-2 rounded-circle p-2 border-2" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-regular fa-user mx-1"></i>
          </button>
          
          <!-- dropdown to back-office -->
          <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a>
                <a class="dropdown-item" href="http://127.0.0.1:8000/register">Registrati</a>
          </div>


          <button
            type="button"
            class="btn btn-outline-light mx-2 border-2 position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="fa-solid fa-cart-shopping text-light"></i>
            <div class="dot" v-if="this.store.cart.length"></div>
          </button>
        </div>
      </div>
    </nav>
    
    

    <!-- offcanvas -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header border-3 border-bottom">
        <h5 class="offcanvas-title fw-bold" id="offcanvasRightLabel">
          Il mio carello
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h6 class="text-center fw-bold">I tuoi articoli</h6>
        <!-- ternario in cui se non c'è nulla compare "Il carrello è vuoto!" mentre se c'è roba viene "I tuoi articoli" -->
        <p mt-4 v-if="!this.store.cart.length"> Non ci sono prodotti nel carrello</p>
        <p v-else>I tuoi articoli:</p>
        <div v-for="item in store.cart">
        <div class="d-flex">
          <img src="" alt="">
          <div>
            <h6>{{ item.name }}</h6>
            <p>{{ item.price }} €</p>
            <p>Qt. {{ item.quantity }}</p>
            <button class="px-2 me-2" @click="cartDeleteItemQuantity(item)">-</button>
            <button class="px-2" @click="cartAddItemQuantity(item)">+</button>
            <button class="px-2  ms-4 bg-danger text-white" @click="deleteItemFromCart(item)">Rimuovi</button>
          </div>
        </div>
      </div>
        <hr>
        <p class="fw-bold text-danger" v-if="store.cart.length">Totale: {{ calculateTotal() }} €</p>
        <div class="d-flex flex-column align-items-center">
          <router-link v-if="store.cart.length" class="btn btn-success my-2" to="/checkout">Checkout</router-link>
          <!-- <button type="button" class="btn btn-success my-2">Checkout</button> -->
          <button v-if="store.cart.length" type="button" class="btn btn-danger my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Svuota Carrello</button>


        </div>
      </div>
    </div>

  </header>
  <!-- end header section -->

</template>
<style scoped lang="scss">


.navbar {
  background-image: url(/public/images/nav.jpg);
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
  width: 0.9rem;
  height: 0.9rem;
  background-color: red;
  border-radius: 50%;
  right: -0.5rem;
  top: -0.5rem;
}

.offcanvas {width: 20% !important;}

.offcanvas-header {
  background-image: url(/public/images/health-food-healthy-diet-diabetes-mellitus-movie-set-meal-122c7c38808c03a9d3eb4c009e8f84ba.png);
  background-size: 77%;
  background-position-x: right;
  background-repeat: no-repeat; 
}
button:hover .fa-cart-shopping {
  filter: invert(1);
}

.btn-success, .btn-danger { width: 40%;}

.offcanvas-header {
  border-color: #57a708 !important;
}

</style>
