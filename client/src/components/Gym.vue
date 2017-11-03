<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Hello World
            </h1>
            <div class="columns is-multiline">
                <GymBox v-for="gym in gyms" :name="gym.name" :desc="gym.description" :img="gym.url"></GymBox>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import GymBox from './GymBox'
export default {
  name: 'Gym',
  data () {
    return {
      gyms: []
    }
  },
  components: {
    GymBox
  },
  created: function() {
    this.fetchGyms();
  },
  methods: {
    fetchGyms: function() {
        const self = this;
        axios.get("http://31.220.56.243:3000/api/gymdetails")
        .then(function(response) {
            self.gyms = response.data;
        })
        .catch(function(error) {
            console.log(error.message);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
