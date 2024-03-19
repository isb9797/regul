<template>
  <header class="header d-flex">
    <div class="container ">
      <div class="header__left d-flex">
        <img src="/Logo.png" class="header__logo" alt="Logo">

        <MicroBtnComponent class="btn--small btn--gray btn--rounded">
          <nuxt-icon name="union" class="btn__icon"/>
          Все категории
        </MicroBtnComponent>
      </div>
    </div>

  </header>
</template>
<script setup>


</script>
<style lang="sass">
@import url('~/styles/main.sass')
@import url('~/styles/micro.sass')

</style>