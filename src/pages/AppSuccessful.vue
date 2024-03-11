<script>
import { store } from "../store.js";
export default {
    name: "AppSuccessful",
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
        <h1>Grazie per il tuo ordine</h1>
        <router-link :to="{ name: 'Restaurants' }" class="btn btn-outline-dark w-25 m-auto d-flex justify-content-center mt-5 mb-5">
    <span>Torna alla lista ristoranti</span>
  </router-link>
     
</template>



