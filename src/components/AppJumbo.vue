<script>
export default {
  name: "AppJumbo",
};
</script>

<template>
  <div id="jumbo" class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <img src="/public/images/jumbo.jpg" alt="" class="w-100">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#jumbo {background-image: url(/public/images/nav.jpg);} //in case we wanted to add some padding-top
</style>
