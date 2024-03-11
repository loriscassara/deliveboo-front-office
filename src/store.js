import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  prova: "http://127.0.0.1:8000/storage/",
  apiEventEndpoint: "restaurants/",
  apiProductEndPoint: "products/",
  apiSearchEndPoint: "search/",
  apiFilteredEndPoint: "types/",
  restaurantsList: [],
  types: [],
  type_list_restaurant: [],
  productList: [],
  filteredList: [],
  cart: [],

});