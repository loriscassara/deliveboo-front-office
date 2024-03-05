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
                <div >
                        <span :id="tag.id" class="m-2 badge rounded-pill text-bg-info" v-for="tag in store.types">{{ tag.name }}</span>
                </div>
</template>