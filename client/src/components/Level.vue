<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                Top Players classificados por nível
            </h1>
            <data-tables :data="Trainers" :search-def="searchDef" :pagination-def="paginationDef">
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
  name: "Level",
  data() {
    return {
      msg: "Level",
      Trainers: [],
      titles: [
        {
          prop: "rank",
          label: "Pos"
        },
        {
          prop: "name",
          label: "Nick"
        },
        {
          prop: "teamname",
          label: "Time"
        },
        {
          prop: "level",
          label: "Level"
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
    this.fetchTrainers();
  },
  methods: {
    fetchTrainers: function() {
      const self = this;
      axios
        .get("http://31.220.56.243:3000/api/trainers")
        .then(function(response) {
          self.Trainers = response.data;
          self.Trainers.forEach((trainer, index) => {
            Vue.set(self.Trainers, index, { ...trainer, hlastseen: Vue.moment(trainer.last_seen).fromNow() });
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
