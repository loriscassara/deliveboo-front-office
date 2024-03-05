<script>
export default {
  name: "MyHeader",
  data() {
    return {
      menuItems: [
        {
          routeName: "Home",
          label: "Homepage",
        },
        {
          routeName: "ProductSearch",
          label: "Ricerca",
        },
        // {
        //   routeName: "Products",
        //   label: "Prodotti"
        // }
      ],
    };
  },
};
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><b>LOGO</b></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!--<li class="nav-item">
                                <router-link :to="{ name: 'events' }" class="nav-link">Vai agli eventi</router-link> 
                        </li>-->
            <li
              class="nav-item"
              v-for="(item, index) in menuItems"
              :key="index"
            >
              <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>
