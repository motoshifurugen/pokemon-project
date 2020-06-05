<template>
<div>

  <div id="app">

  <!-- <Attribute />
  <Region /> -->
  <Monster />

  </div>
</div>
</template>

<script>
// import Vue from 'vue';
// import axios from "axios";
// import Attribute from "@/components/Attribute";
// import Region from "@/components/Region";
import Monster from "@/components/Monster";

export default {
  data() {
    return {
     
    };
  },
  // mounted() {
  //   this.find();
  // },
  // methods: {
  //   async find() {
  //     const url = monsUrl;
  //     const res = await axios.get(url);
  //     this.items = res.data;
  //   },
    // async put() {
    //   const params = { 
    //       name: this.name, 
    //       attribute: this.attribute,
    //       region: this.region,
    //       size: this.size,
    //       weight: this.weight,
    //       attack_name: this.attack_name,
    //       attack_description: this.attack_description
    //     };
    //   const res = await axios.post(monsUrl, params);
    //   this.find();
    // }
  //   async update(i) {
  //     const url = monsUrl + '/' + i;
  //     const params = { 
  //       name: this.name, 
  //       // attribute: attribute.attribute,
  //       // region: region.regions,
  //       // size: this.size,
  //       // weight: this.weight,
  //       // attack_name: this.attack_name,
  //       // attack_description: this.attack_description 
  //       };
  //     const res = await axios.put(url, params);
  //     this.find();
  //   },
  //   async del(i) {
  //     const url = monsUrl + '/' + i;
  //     const res = await axios.delete(url);
  //     this.find();
  //   },
  components: {
    // Attribute,
    // Region,
    Monster,
  },
};
</script>