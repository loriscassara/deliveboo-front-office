<script>
import { store } from "../store";
export default {
    name: "TypesCard",
    data() {  
    return {
      store,
      items: [
      { id: 1, name: 'Item 1', filters: [1, 2] },
      { id: 2, name: 'Item 2', filters: [2, 3] },
      { id: 3, name: 'Item 3', filters: [1, 3] }
    ],

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
    methods:{
      
    }
  
}



</script>

<template>

<div>
    <label v-for="filter in filters" :key="filter.id">
      <input type="checkbox" v-model="selectedFilters" :value="filter.id">
      {{ filter.name }}
    </label>
  </div>
  <ul>
    <li v-for="item in filteredItems" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
                <!-- <div >
                        <button :id="tag.id" class="m-2 badge rounded-pill text-bg-info" v-for="tag in store.types">{{ tag.name }}</button>
                </div> -->
</template>