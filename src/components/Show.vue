<template>
<div>
  <div class="container-fluid">
   
  <table class="table" border="3" v-if="item">
    <thead class="thead-dark">
    <tr>
      <th>名前</th>
      <th>タイプ</th>
      <th>地方</th>
      <th>高さ（m）</th>
      <th>重さ（kg）</th>
      <th>技の名前</th>
      <th>技の説明</th>
      <th></th>
    </tr>
    </thead>

    <tr>

      <td class="name">{{ item.name }}</td>
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
      <td> <input class="btn btn-success" type="button" @click="delalert(item.id)" value="野生に返す"></td>
    </tr>

  </table>

  <div class="createform">
    <div class="create attribute">
      <dt>タイプ</dt>
      <dd><select v-bind:value="item.attribute_id" v-on:input="new_attribute_id = $event.target.value">
            <option v-for="(attribute) in attributes" :value="attribute.id" :key="attribute.id">{{ attribute.name }}</option>
      </select></dd>
    </div>
    <div class="create region">
      <dt>生息地</dt>
      <dd><select v-bind:value="item.region_id" v-on:input="new_region_id = $event.target.value">
            <option v-for="(region) in regions" :value="region.id" :key="region.id">{{ region.name }}
            </option>
      </select>地方</dd>
    </div>
    <div class="create name">
      <dt>ポケモンの名前</dt>
      <dd>
        <input type="text" v-bind:value="item.name" v-on:input="new_name = $event.target.value">
        </dd>
    </div>
    <div class="create size">
      <dt>高さ</dt>
      <dd><input type="number" v-bind:value="item.size" v-on:input="new_size = $event.target.value">m</dd>
    </div>
    <div class="create weight">
      <dt>重さ</dt>
      <dd><input type="number" v-bind:value="item.weight" v-on:input="new_weight = $event.target.value">kg</dd>
    </div>
    <div class="create attackname">
      <dt>技の名前</dt>
      <dd><input type="text" v-bind:value="item.attack_name" v-on:input="new_attack_name = $event.target.value"></dd>
    </div>
    <div class="create attackdescription">
      <dt>技の説明</dt>
      <dd><textarea type="text" v-bind:value="item.attack_description" v-on:input="new_attack_description = $event.target.value"></textarea></dd>
    </div>
    <input class="btn btn-danger" type="button" @click="update(item.id)" value="書き換える">
    </div>

    <router-link to="/top" class="btn btn-outline-primary">戻る</router-link>

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
            attribute_id: ' ',
            attributes: [],
            region_id: ' ',
            regions: [],
            name: ' ',
            size: ' ',
            weight: ' ',
            attack_name: ' ',
            attack_description: ' ',
            new_attribute_id: ' ',
            new_region_id: ' ',
            new_name: ' ',
            new_size: ' ',
            new_weight: ' ',
            new_attack_name: ' ',
            new_attack_description: ' ',
            item: []
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
          const showId = this.$route.params.showId;
          const monsurl = monsUrl + '/' + showId;
          const monsres = await axios.get(monsurl);
          this.item = monsres.data;
      },
       async update(i) {
        const url = monsUrl + '/' + i;
        if (this.new_attibute_id === ' ') {
          this.new_attribute_id = this.item.attribute_id
        }
        if (this.new_region_id === ' ') {
          this.new_region_id = this.item.region_id
        }
        if (this.new_name === ' ') {
          this.new_name = this.item.name
        }
        if (this.new_size === ' ') {
          this.new_size = this.item.size
        }
        if (this.new_weight === ' ') {
          this.new_weight = this.item.weight
        }
        if (this.new_attack_name === ' ') {
          this.new_attack_name = this.item.attack_name
        }
        if (this.new_attack_description === ' ') {
          this.new_attack_description = this.item.attack_description
        }
       const params = {
            name: this.new_name,
            attribute_id: this.new_attribute_id,
            region_id: this.new_region_id,
            size: this.new_size,
            weight: this.new_weight,
            attack_name: this.new_attack_name,
            attack_description: this.new_attack_description
       };
        const res = await axios.put(url, params); // eslint-disable-line no-unused-vars
      this.find();
      this.$router.push('/top')
      },
       delalert(i) {
        if(confirm("削除してもいいですか？")) {
          this.del(i);
        }
      },
      async del(i) {
      const url = monsUrl + '/' + i;
      const res = await axios.delete(url); // eslint-disable-line no-unused-vars
      this.find();
      this.$router.push('/top')
      }
    }
}

</script>

<style scoped>
.container-fluid {
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

.name {
  font-weight: 800;
}
</style>