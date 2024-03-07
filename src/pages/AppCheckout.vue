<script>
import { store } from "../store";
export default {
    name: "AppCheckout",
    data() {  
    return {
      store,
    
    };
  },
  computed: {
        
    },
    methods:{
      
    }
  
}



</script>

<template>

<div>
    <h2>Checkout Carrello</h2>
    <form >
       <div class="mb-3">
        <label for="firstName" class="form-label">Nome</label>
        <input type="text" class="form-control" id="firstName" v-model="firstName" required>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Cognome</label>
        <input type="text" class="form-control" id="lastName" v-model="lastName" required>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Telefono</label>
        <input type="tel" class="form-control" id="phone" v-model="phone" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Indirizzo</label>
        <input type="text" class="form-control" id="address" v-model="address" required>
      </div>
      <div class="mb-3">
        <label for="note" class="form-label">Nota</label>
        <textarea class="form-control" id="note" v-model="note"></textarea>
      </div>
      <button  class="btn btn-primary">Conferma Ordine</button>
    </form>
  </div>


</template>

<style scoped lang="scss">

</style>