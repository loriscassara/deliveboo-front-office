<script>
export default {
    name: "AppCarousel",
};
</script>

<template>
    <div class="logos">
      <div class="logos-slide">
        <img src="/public/images/sushi-wide.webp" />
        <img src="/public/images/salad-wide.webp" />
        <img src="/public/images/old-wild-west.webp" />
        <img src="/public/images/mcdonalds-logo-green-250x250.webp" />
        <img src="/public/images/kfc.webp" />
        <img src="/public/images/icon-wine.webp" />
        <img src="/public/images/icon-vegan.webp" />
        <img src="/public/images/icon-pizza.webp" />
        <img src="/public/images/icon-donut.webp" />
        <img src="/public/images/icecreamwide.webp" />
        <img src="/public/images/hop3.webp" />
        <img src="/public/images/grocery-wide.webp" />
        <img src="/public/images/fries-2-wide.webp" />
        <img src="/public/images/carrefour-square-256x256.webp" />
        <img src="/public/images/burger.webp" />
        <img src="/public/images/bowl-wide.webp" />
        <img src="/public/images/bk_logo_new.webp" />
      </div>

      <div class="logos-slide">
       <img src="/public/images/sushi-wide.webp" />
        <img src="/public/images/salad-wide.webp" />
        <img src="/public/images/old-wild-west.webp" />
        <img src="/public/images/mcdonalds-logo-green-250x250.webp" />
        <img src="/public/images/kfc.webp" />
        <img src="/public/images/icon-wine.webp" />
        <img src="/public/images/icon-vegan.webp" />
        <img src="/public/images/icon-pizza.webp" />
        <img src="/public/images/icon-donut.webp" />
        <img src="/public/images/icecreamwide.webp" />
        <img src="/public/images/hop3.webp" />
        <img src="/public/images/grocery-wide.webp" />
        <img src="/public/images/fries-2-wide.webp" />
        <img src="/public/images/carrefour-square-256x256.webp" />
        <img src="/public/images/burger.webp" />
        <img src="/public/images/bowl-wide.webp" />
        <img src="/public/images/bk_logo_new.webp" />
      </div>
    </div>
</template>

<style scoped lang="scss">
    @keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.logos {
  overflow: hidden;
  padding: 10px 0;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
}

.logos:after {
  right: 0;
}

.logos-slide {
  display: inline-block;
  animation: 6000s slide infinite linear;
}

.logos-slide img {
  height: 150px;
  margin: 0 10px;
  border-radius: 10px;
}
</style>