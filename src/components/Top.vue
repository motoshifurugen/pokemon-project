<template>
<div>
  <div class="container">
   
   <router-link to="/create" class="btn btn-danger">新しいポケモンを作る</router-link>

  <table class="table" border="3" v-if="items">
    <thead class="thead-dark">
    <tr>
      <th>名前</th>
      <th>タイプ</th>
      <th>地方</th>
      <th>高さ （m）</th>
      <th>重さ（kg）</th>
      <th>技の名前</th>
      <th>技の説明</th>
      <th></th>
      <th></th>
    </tr>
    </thead>

    <tr v-for="(item) in items" :key="item.id">
      <!-- <a :href="'/monsters/' + item.id"> -->
      <td class="name">{{ item.name }}</td>
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

      <td class="sptd"><router-link :to="{ name: 'show', params: { showId: item.id }}" class = "btn btn-primary">見る</router-link></td>
      <td class="sptd"><input class="btn btn-success" type="button" @click="delalert(item.id)" value="野生に返す"></td>
    </tr>
  </table>
  </div>
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
      delalert(i) {
        if(confirm("削除してもいいですか？")) {
          this.del(i);
        }
      },
      async del(i) {
      const url = monsUrl + '/' + i;
      const res = await axios.delete(url); // eslint-disable-line no-unused-vars
      this.find();
      }
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

/* .createform dt {
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
} */

.btn-success{
  width: 100px;
}

.btn-primary{
  width: 90px;
}

td {
  width: 120px;
}

.name {
  font-weight: 800;
}

.sptd {
  width: 100px;
}

.btn-danger{
  float: right;
  margin: 10px;
}

</style>