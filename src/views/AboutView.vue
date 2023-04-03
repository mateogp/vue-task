<template>
  <MainNav />

  <div class="container">
    <div class="d-flex align-items-center flex-column">
      <div class="about-desc">
        <h2>About me</h2>
        <p>I'm a professional front-end developer with more than twelve years of experience building the web with Javascript and most popular frameworks like Angular, VueJS and ReactJS.</p>
        <p>I worked for important local and foreign companies and even assumed leadership positions implementing scrum methodologies.</p>
      </div>

      <div class="about-desc">
        <h2>About this project</h2>
        <p>This project was entirely created by me, developed under the best programming practices in order to demonstrate my capabilities, the UI/UX were also invented by me as I developed the project, I am aware that it can still improve in some aspects, such as the responsive of some elements, the even more optimal handling of the data and configuring some useful tools such as prittier, but I have left it like that for reasons of time.</p>
      </div>

      <div>
        <h3>Thanks for read!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  components: {
    MainNav
  }
}
</script>

<style lang="scss" scoped>
.about-desc {
  margin-bottom: 30px;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    max-width: 550px;
    text-align: justify;
  }
}
</style>
