<script>
import { store } from "../store";
export default {
    name: "TypesCard",
    data() {
    return {
      store,
      choosenTypes: [],
      
    };
  },
  computed: {
        filteredRestaurants() {
            
            let filteredRestaurants = [...this.store.restaurantsList];

            if (this.choosenTypes.length > 0) {
                filteredRestaurants = filteredRestaurants.filter((restaurant) =>
                this.choosenTypes.every((choosenTypes) =>
                restaurant.types.some((type) => type.name === choosenTypes)
                ));
            }
        },
    },
  
}
</script>

<template>
    <div class="text-center">
        <span :id="tag.id" class="btn btn-outline-dark m-2" v-for="tag in store.types">{{ tag.name }}</span>
    </div>
</template>

<style scoped lang="scss">

</style>