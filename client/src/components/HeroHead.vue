<template>
    <section class="hero is-info is-medium">
        <div class="hero-head">
            <nav class="level">
                <p class="level-item has-text-centered">
                    <a class="link is-info"></a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info"></a>
                </p>
                <p class="level-item has-text-centered">
                    <img src="../assets/unnamed.png" alt="">
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info"></a>
                </p>
                <p class="level-item has-text-centered">
                    <a class="link is-info"></a>
                </p>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <!-- <p class="title">
                    Title
                </p>
                <p class="subtitle">
                    Subtitle
                </p> -->
            </div>
        </div>

        <div class="hero-numbers">
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Pokemons</p>
                        <p class="title">{{ pokeCount }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Treinadores</p>
                        <p class="title">{{ totalCount }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Mystic</p>
                        <p class="title">{{ mysticCount }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Instinct</p>
                        <p class="title">{{ instinctCount }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Valor</p>
                        <p class="title">{{ valorCount }}</p>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li :class="{ 'is-active': $route.name === 'Level'}">
                            <router-link to="Level">Top Levels</router-link>
                        </li>
                        <li :class="{ 'is-active': $route.name === 'Pokemon'}">
                            <router-link to="Pokemon">Top Pokémons</router-link>
                        </li>
                        <!-- <li :class="{ 'is-active': $route.name === 'Gym'}">
                            <router-link to="Gym">Líderes de Ginásio</router-link>
                        </li> -->
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
  name: 'HeroHead',
  data () {
    return {
      mysticCount: 0,
      instinctCount: 0,
      valorCount: 0,
      totalCount: 0,
      pokeCount: 0,
    }
  },
  created: function() {
    this.fetchCount();
  },
  methods: {
    fetchCount: function() {
      const self = this;
      axios
        .get("http://31.220.56.243:3000/api/trainers/count")
        .then(function(response) {
            self.mysticCount = response.data[0].count
            self.valorCount = response.data[1].count
            self.instinctCount = response.data[2].count
            self.totalCount = (self.mysticCount+self.instinctCount+self.valorCount)
        })
        .catch(function(error) {
          console.log(error.message);
        });
        axios
        .get("http://31.220.56.243:3000/api/pokemons/count")
        .then(function(response) {
            self.pokeCount = response.data
        })
        .catch(function(error) {
          console.log(error.message);
        });
    }
  }
}
</script>
