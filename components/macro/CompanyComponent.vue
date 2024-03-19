<template>
  <section class="company">
    <div class="company__logo space--md">
      <img src="assets/img/Avatar.svg" alt="">
    </div>
    <h1 class="company__title space--sm">
      Наследие
    </h1>

    <MacroGuarantiesComponent :feedbacks="feedbacks" :rating="rating" :docs="docs" class="space--md"/>

    <MicroBtnComponent class="btn--big btn--accent space--lg">Показать номер телефона</MicroBtnComponent>

    <MacroTabsComponent class="space--lg">
      <MicroBtnComponent class="btn--small btn--gray ">Товары и услуги</MicroBtnComponent>
      <MicroBtnComponent class="btn--small btn--gray tab tab--active" :count="store.data.length">Агенты</MicroBtnComponent>
      <MicroBtnComponent class="btn--small btn--gray">О компании</MicroBtnComponent>
    </MacroTabsComponent>

  </section>
</template>
<script setup>


const store = useCardsStore()

const docs = ref(true),
      feedbacks = ref(10),
      rating = ref(4.5)
</script>