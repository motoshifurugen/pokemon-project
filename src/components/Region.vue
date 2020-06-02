<template>

    <select v-model="region_id">
        <option v-for="(region) in regions" :key="region.id">{{ region.name }}</option>
      </select>
</template>

<script>
import axios from "axios";
const regionUrl ='http://localhost:8080/api/regions';

export default {
    data() {
        return {
            region_id: 'カントー',
            regions: []
        }
    },
    mounted() {
        this.find();
    },
    methods: {
      async find() {
          const atturl = regionUrl;
          const attres = await axios.get(atturl);
          this.regions = attres.data;
      }
    }
}

</script>