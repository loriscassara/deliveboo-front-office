<script>
import { store } from "../store";
export default {
  name: "ProductSearch",
  components: {
  },
  data() {
    return {
      store,
    };
  },
};</script>
<template>
    <div id="hero" class="position-relative bg-dark">
    <img  src="/img/search_ok.jpg" alt="">
    <div id="text-hero" class="text-center my-py-13 text-white position-absolute">

        <h1>Cerca piatti</h1>
        <p>Scegli i tuoi piatti preferiti.</p>

        <form action="/update">
            
<select class="form-control mb-4" name="types" id="types">
                <option>Scegli la tipologia</option>
                <option v-for="type in store.types" value="{{ type.id }}"> {{ type.name }} </option>
            </select>
            <input class="btn btn-primary" type="submit" value="Cerca">
        </form>

    </div>
</div>
</template>
<style scoped></style>