<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Top Pokemons e seus treinadores
            </h1>
            <data-tables :data="Pokemons" :search-def="searchDef" :pagination-def="paginationDef">
              <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" sortable="custom">
              </el-table-column>
            </data-tables>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import DataTable from "./DataTable";
export default {
  name: "Pokemon",
  data() {
    return {
      Pokemons: [],
      titles: [
        {
          prop: "pokemon_name",
          label: "Pokemon"
        },
        {
          prop: "trainer_name",
          label: "Treinador"
        },
        {
          prop: "cp",
          label: "CP"
        },
        {
          prop: "iv",
          label: "IV"
        },
        {
          prop: "move_1_name",
          label: "Ataque 1"
        },
        {
          prop: "move_2_name",
          label: "Ataque 2"
        },
        {
          prop: "height",
          label: "Altura"
        },
        {
          prop: "weight",
          label: "Peso"
        },
        {
          prop: "num_upgrades",
          label: "Qt. Upgrades"
        },
        {
          prop: "hlastseen",
          label: "Última Aparição"
        }
      ],
      searchDef: {
        colProps: {
          span: 24
        },
        inputProps: {
          placeholder: 'Pesquise'
        }
      },
      paginationDef: {
        
      }
    };
  },
  created: function() {
    Vue.moment.locale("pt-br")
    this.fetchPokemons();
  },
  methods: {
    fetchPokemons: function() {
      const self = this;
      axios
        .get("http://localhost:3000/api/gympokemons")
        .then(function(response) {
          self.Pokemons = response.data;
          self.Pokemons.forEach((pokemon, index) => {
            Vue.set(self.Pokemons, index, { ...pokemon, hlastseen: Vue.moment(pokemon.last_seen).fromNow() });
          });
        })
        .catch(function(error) {
          console.log(error.message);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-pager .number{border-radius: 0}
</style>
