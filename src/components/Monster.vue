<template>
<div>
  <div class="container">
   
    <router-link to="/monster2">Monster2へ</router-link>

    <Show  v-bind:variable="message" />

  <table class="table" border="3" v-if="items">
    <thead class="thead-dark">
    <tr>
      <th>名前</th>
      <th>タイプ</th>
      <th>地方</th>
      <th>大きさ</th>
      <th>重さ</th>
      <th>技の名前</th>
      <th>技の説明</th>
      <th></th>
      <th></th>
    </tr>
    </thead>

    <tr v-for="(item) in items" :key="item.id">
      <!-- <a :href="'/monsters/' + item.id"> -->
      <td>{{ item.name }}</td>
      <!-- </a> -->
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

      <td class="sptd"><Show ref="taro" /><button @click="callChildMethod01">子ども呼び出し①</button></td>
      <td class="sptd"><input type="text" v-model="kozukai"><button @click="callChildMethod02">子ども呼び出し②</button></td>
    </tr>
  </table>
  <input class="btn btn-outline-danger" type="button" @click="show(item.id)" value="見る">
  <input class="btn btn-success" type="button" @click="del(item.id)" value="野生に返す">
  </div>
</div>
</template>

<script>
import axios from "axios";
import Show from './Show.vue';

const monsUrl ='http://localhost:8080/api/monsters';
const attributeUrl ='http://localhost:8080/api/attributes';
const regionUrl ='http://localhost:8080/api/regions';

export default {
    data() {
        return {
            kozukai: 0,
            attribute: '2',
            attributes: [],
            region: '2',
            regions: [],
            attribute_id: '2',
            region_id: '2',
            name: ' ',
            size: '',
            weight: '',
            attack_name: '',
            attack_description: '',
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
      async show(i) {
        const url = monsUrl + '/' + i;
        const res = await axios.get(url); // eslint-disable-line no-unused-vars
        this.items = res.data;
      },
      // async put() { 
      //     const params = { 
      //       name: this.name,
      //       attribute_id: this.attribute_id,
      //       region_id: this.region_id,
      //       size: this.size,
      //       weight: this.weight,
      //       attack_name: this.attack_name,
      //       attack_description: this.attack_description
      //     };
      //     const monsres = await axios.post(monsUrl, params); // eslint-disable-line no-unused-vars
      //     this.find();
      //  },
      //  async update(i) {
      //   const url = monsUrl + '/' + i;
      //  const params = { 
      //       name: this.name,
      //       attribute_id: this.attribute_id,
      //       region_id: this.region_id,
      //       size: this.size,
      //       weight: this.weight,
      //       attack_name: this.attack_name,
      //       attack_description: this.attack_description
      //   };
      //   const res = await axios.put(url, params); // eslint-disable-line no-unused-vars
      // this.find();
      // },
      async del(i) {
      const url = monsUrl + '/' + i;
      const res = await axios.delete(url); // eslint-disable-line no-unused-vars
      this.find();
      }
    },
    components: {
      Show
    }
}

</script>

<style scoped>
.container {
  background-color: #ffd400;
  padding: 2%;
}

table {
  background-color: #ffffcc;
}

.createform dt {
  width: 140px;
  padding: 3px 0;
  float: left;
  clear: both;
}

.createform dd {
  padding: 3px 0;
}

.createform input {
  width: 300px;
}

.createform textarea {
  width: 300px;
}

.createform select {
  width:300px;
}

.btn-danger {
  margin-bottom: 50px;
  margin-left: 140px;
  width: 180px;
}

td {
  width: 120px;
}

.sptd {
  width: 100px;
}
</style>