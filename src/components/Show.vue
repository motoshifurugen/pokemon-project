<template>
  <div>
    <p v-on="id">{{ $route.params.id}}</p>
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

      <td class="sptd"><a :href="'/monster/' + item.id"><input class="btn btn-outline-danger" type="button" value="書き換える"></a></td>
      <td class="sptd"><input class="btn btn-success" type="button" @click="del(item.id)" value="野生に返す"></td>
    </tr>
  </table>
  </div>
</template>

<script>
import axios from "axios";
const monsUrl ='http://localhost:8080/api/monsters';
const attributeUrl ='http://localhost:8080/api/attributes';
const regionUrl ='http://localhost:8080/api/regions';

export default {
    props: { id: Number },
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
          const monsurl = monsUrl ;
        //   const monsres = await axios.get(monsurl);
          const monsres = await axios.get(monsurl, ); // eslint-disable-line no-unused-vars
          this.items = monsres.data;
      },
    }
}
</script>