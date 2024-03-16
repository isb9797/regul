<template>
  <main>

    <MacroCompanyComponent/>

    <section class="cards">
      <article class="card">
<!--        <nuxt-img-->
<!--            src="test2.jpg"-->
<!--        />-->

        <img src="/img/Img-1.png" alt="" class="card__img">
        <div class="card__content">
          <h2 class="card__content-title">Дмитрий Хитрый</h2>
          <MacroGuarantiesComponent/>

          <p class="card__content-p">
            Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться
          </p>
        </div>

      </article>
    </section>
  </main>
</template>

<script setup>




useSeoMeta({
  title: 'Главная',
  description: 'Демонстрация',
})

</script>

