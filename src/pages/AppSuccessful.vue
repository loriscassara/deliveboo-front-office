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
        <div class="d-flex justify-content-center">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
        </div>
        <h1 class="text-center pt-5 text-uppercase text-success fw-bold">Grazie per il tuo ordine!</h1>
        <div class="d-flex justify-content-center">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
            <img class="rotate m-5" src="https://static.vecteezy.com/system/resources/previews/024/280/420/original/hot-and-fresh-tasty-delicious-grilled-hamburger-ai-generated-png.png" alt="">
        </div>
        <router-link :to="{ name: 'Restaurants' }" class="btn btn-outline-dark w-25 m-auto d-flex justify-content-center mt-5 mb-5">
    <span>Torna alla lista ristoranti</span>
  </router-link>
     
</template>

<style>
.rotate {
    width: 300px;
    animation: rotation 4s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>