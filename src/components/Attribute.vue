<template>
    <select v-model="attribute_id">
        <option v-for="(attribute) in attributes" :key="attribute.id">{{ attribute.name }}</option>
      </select>
</template>

<script>
import axios from "axios";
const attributeUrl ='http://localhost:8080/api/attributes';

export default {
    data() {
        return {
            attribute_id: 'ノーマル',
            attributes: []
        }
    },
    mounted() {
        this.find();
    },
    methods: {
      async find() {
          const atturl = attributeUrl;
          const attres = await axios.get(atturl);
          this.attributes = attres.data;
      }
    }
}

</script>