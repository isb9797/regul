<template>
  <section class="cards ">
    <div class="spacer space--lg"></div>
    <article v-for="card in cardsData" :key="card.id" class="card space--sm" :id="card.id">
<!--      Лучше использовать динамический id -->
      <!--        <nuxt-img-->
      <!--            src="test2.jpg"-->
      <!--        />-->

      <img :src="card.src" alt="" class="card__img">
      <div class="card__content">
        <h2 class="card__content-title space--xs">{{ card.title }}</h2>
        <MacroGuarantiesComponent
            :feedbacks="card.guaranties.feedbacks"
            :rating="card.guaranties.rating"
            :docs="card.guaranties.docs"
            class="space--sm"
        />

        <p class="card__content-p">
          {{ card.post.length > 124 ? card.post.substring(0, 120)+'...' : card.post}}
        </p>
      </div>



    </article>
  </section>
</template>

<script setup>
const store = useCardsStore()



const cardsData = store.data



</script>

<style lang="sass">
@import url('~/styles/main.sass')
</style>