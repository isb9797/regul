<template>
  <section class="company">
    <div class="company__logo space--14">
      <img src="assets/img/Avatar.svg" alt="">
    </div>
    <h1 class="company__title space--7">
      Наследие
    </h1>

    <MacroGuarantiesComponent class="space--22"/>

    <MicroBtnComponent class="btn--big btn--accent space--32">Показать номер телефона</MicroBtnComponent>

    <MacroTabsComponent class="space--32">
      <MicroBtnComponent class="btn--small btn--gray">Товары и услуги</MicroBtnComponent>
      <MicroBtnComponent class="btn--small btn--gray" :count="7">Агенты</MicroBtnComponent>
      <MicroBtnComponent class="btn--small btn--gray">О компании</MicroBtnComponent>
    </MacroTabsComponent>

  </section>
</template>
<script setup>

</script>