import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  apiEventEndpoint: "restaurants/",
  apiProductEndPoint: "products/",
  apiSearchEndPoint: "search/",
  apiFilteredEndPoint: "update/",
  restaurantsList: [],
  types: [],
  productList: [],
  filteredList: []
});