<template>
<div>
  <input type="text" v-model="name">
  <select v-model="attribute_id">
        <option v-for="(attribute) in attributes" :value="attribute.id" :key="attribute.id">{{ attribute.name }}</option>
  </select>
  <select v-model="region_id">
        <option v-for="(region) in regions" :value="region.id" :key="region.id">{{ region.name }}
        </option>
  </select>
  <input type="number" v-model="size">
  <input type="number" v-model="weight">
  <input type="text" v-model="attack_name">
  <input type="text" v-model="attack_description">
  
  <input class="btn btn-outline-primary" type="button" @click="put()" value="PUT">

  <table border="1" v-if="items">
    <tr v-for="(item) in items" :key="item.id">
      <td>{{ item.name }}</td>
      <td>
        <div v-for="(attribute) in attributes" :key="attribute.id">
          <td  v-if="item.attribute_id === attribute.id">{{ attribute.name }}</td>
        </div>
      </td>
      <td>
        <div v-for="(region) in regions" :key="region.id">
          <td v-if="item.region_id === region.id">{{ region.name }}</td>
        </div>
      </td>
      <td>{{ item.size }}</td>
      <td>{{ item.weight }}</td>
      <td>{{ item.attack_name }}</td>
      <td>{{ item.attack_description }}</td>

      <td><input type="button" @click="del(item.id)" value="DELETE"></td>
      <td><input type="button" @click="update(item.id)" value="PUT"></td>
    </tr>
  </table>
  <div>{{ attribute.id }}</div>

</div>

</template>

<script>
import axios from "axios";
const monsUrl ='http://localhost:8080/api/monsters';
const attributeUrl ='http://localhost:8080/api/attributes';
const regionUrl ='http://localhost:8080/api/regions';

export default {
    data() {
        return {
            attribute: '2',
            attributes: [],
            region: '2',
            regions: [],
            attribute_id: '2',
            region_id: '2',
            name: '名前',
            size: '',
            weight: '',
            attack_name: '技の名前',
            attack_description: '技の説明',
            items: []
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
          const regurl = regionUrl;
          const regres = await axios.get(regurl);
          this.regions = regres.data;
          const monsurl = monsUrl;
          const monsres = await axios.get(monsurl);
          this.items = monsres.data;
      },
      async put() { 
          const params = { 
            name: this.name,
            attribute_id: this.attribute_id,
            region_id: this.region_id,
            size: this.size,
            weight: this.weight,
            attack_name: this.attack_name,
            attack_description: this.attack_description
          };
          const monsres = await axios.post(monsUrl, params); // eslint-disable-line no-unused-vars
          this.find();
      },
      async update(i) {
        const url = monsUrl + '/' + i;
       const params = { 
            name: this.name,
            attribute_id: this.attribute_id,
            region_id: this.region_id,
            size: this.size,
            weight: this.weight,
            attack_name: this.attack_name,
            attack_description: this.attack_description
        };
        const res = await axios.put(url, params); // eslint-disable-line no-unused-vars
      this.find();
      },
      async del(i) {
      const url = monsUrl + '/' + i;
      const res = await axios.delete(url); // eslint-disable-line no-unused-vars
      this.find();
      }
    }
}

</script>