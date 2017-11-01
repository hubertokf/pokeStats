<template>
    <div class="gymBox column is-one-third">
        <div class="content" :style="{ 'background-image': 'url(' + img + ')' }">
            <div class="gymTitle">{{ name }}</div>
            <div class="gymDesc">{{ desc }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "GymBox",
  data() {
    return {
      
    };
  },
  created: function() {
    
  },
  props: ['name','desc','img'],
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .gymBox {
        height: 130px;
    }
    .gymBox .content {
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
        height: 100%;
        background-color: #5BF;
        border-radius: 5px;
    }
    .gymBox .content .gymTitle{ 
        font-weight: bold;
        font-size: 16px;
        max-width: 80%;
        padding: 10px 0 0 10px;
    }
    .gymBox .content .gymDesc{
        padding: 10px 0 0 10px;
        max-width: 80%;
        font-size: 12px;
    }
</style>
