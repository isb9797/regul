<template>
  <div class="guaranties">
    <span v-if="props.docs" class="guaranties__item"><nuxt-icon name="certificate" class="guaranties__item-icon" filled/>Документы проверены</span>
<!--    <i class="guaranties__delimiter fa fa-circle"></i>-->
    <nuxt-icon v-if="props.docs" name="circle" class="guaranties__delimiter" filled/>
    <span v-if="props.rating" class="guaranties__item"><nuxt-icon name="star" class="guaranties__item-icon" filled/>{{ props.rating }}</span>
    <nuxt-icon v-if="props.rating" name="circle" class="guaranties__delimiter" filled/>
    <span v-if="props.feedbacks" class="guaranties__item"><i class="guaranties__item-icon"></i>{{ props.feedbacks }} отзывов</span>
  </div>
</template>

<script setup>
const props = defineProps({
  feedbacks: {
    type: String
  },
  rating: {
    type: Number
  },
  docs: {
    type: Boolean
  }
})
</script>

<style lang="sass">
@import "~/styles/macro.sass"
</style>
