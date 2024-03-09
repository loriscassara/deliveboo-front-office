<script>
export default {
    name: "AppSlider",
};
</script>

<template>
    <div class="logos">
      <div class="logos-slide">
        <img src="/images/bk_logo_new.webp" />
        <img src="/images/bowl-wide.webp" />
        <img src="/images/burger.webp" />
        <img src="/images/carrefour-square-256x256.webp" />
        <img src="/images/fries-2-wide.webp" />
        <img src="/images/grocery-wide.webp" />
        <img src="/images/hop3.webp" />
        <img src="/images/icecreamwide.webp" />
        <img src="/images/icon-donut.webp" />
        <img src="/images/icon-pizza.webp" />
        <img src="/images/icon-vegan.webp" />
        <img src="/images/icon-wine.webp" />
        <img src="/images/kfc.webp" />
        <img src="/images/mcdonalds-logo-green-250x250.webp" />
        <img src="/images/old-wild-west.webp" />
        <img src="/images/salad-wide.webp" />
        <img src="/images/sushi-wide.webp" />
      </div>

      <div class="logos-slide">
        <img src="/images/bk_logo_new.webp" />
        <img src="/images/bowl-wide.webp" />
        <img src="/images/burger.webp" />
        <img src="/images/carrefour-square-256x256.webp" />
        <img src="/images/fries-2-wide.webp" />
        <img src="/images/grocery-wide.webp" />
        <img src="/images/hop3.webp" />
        <img src="/images/icecreamwide.webp" />
        <img src="/images/icon-donut.webp" />
        <img src="/images/icon-pizza.webp" />
        <img src="/images/icon-vegan.webp" />
        <img src="/images/icon-wine.webp" />
        <img src="/images/kfc.webp" />
        <img src="/images/mcdonalds-logo-green-250x250.webp" />
        <img src="/images/old-wild-west.webp" />
        <img src="/images/salad-wide.webp" />
        <img src="/images/sushi-wide.webp" />
      </div>
    </div>
</template>

<style scoped lang="scss">
    @keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
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
  animation: 1000s slide infinite linear;
}

.logos-slide img {
  height: 150px;
  margin: 0 10px;
  border-radius: 10px;
}
</style>