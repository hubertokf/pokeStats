<template>
  <div id="app">
    <HeroHead></HeroHead>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import HeroHead from './components/HeroHead'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Foot,
    HeroHead
  }
}
</script>

<style>
  .hero-head{
    padding: 20px 0;
  }

  .hero-numbers{
    padding: 10px;
    margin-bottom: 45px;
    background-color: #26B;
  }
</style>
