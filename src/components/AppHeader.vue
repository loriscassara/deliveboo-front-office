<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuItems: [],
    };
  },
};
</script>
<template>
  <!-- start header section -->
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            id="nav-logo"
            src="/public/images/png-logo.png"
            alt="Bootstrap"
          />
        </a>
        <div>
          <button
            type="button"
            class="btn btn-outline-light mx-2 rounded-circle p-2 border-2"
          >
            <i class="fa-regular fa-user mx-1"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-light mx-2 border-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="fa-solid fa-cart-shopping text-light"></i>
          </button>
        </div>
      </div>
    </nav>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header border-3 border-bottom">
        <h5 class="offcanvas-title fw-bold" id="offcanvasRightLabel">
          Il mio carello
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h6 class="text-center">I tuoi articoli</h6>
        <hr />
        <p class="fw-bold text-danger">Totale:</p>
      </div>
    </div>
  </header>
  <!-- end header section -->
</template>
<style scoped lang="scss">
.navbar {
  background-image: url(/public/images/nav.jpg);
  padding-left: 100px;
  padding-right: 100px;
}
#nav-logo {
  width: 100px;
  height: 100px;
}
button:hover .fa-cart-shopping {
  filter: invert(1);
}

.offcanvas-header {
  border-color: #57a708 !important;
}
</style>
