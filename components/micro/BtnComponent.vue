<template>

    <a href="#" class="btn" type="button">
      <slot></slot>
      <span v-if="props.count" class="btn__count">{{count}}</span>
    </a>


</template>

<script setup>
const props = defineProps(
    {
      count: {
        type: Number
      }

    }
)
</script>

<style scoped lang="sass">
@import url('~/styles/micro.sass')
@import url('~/styles/fonts.sass')


</style>