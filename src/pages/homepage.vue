<template>
    <div id="homepage">
      homepage
      <div v-if="flag">
        <input placeholder="first input">
      </div>
      <div v-else>
        <input placeholder="second input">
      </div>
      <div v-for="item in list" :key="item.id">{{item.label}}</div>
      <button @click="switchFlag">switch flag</button>
    </div>
</template>

<script>
export default {
    name: "homepage",
    data() {
      return {
        flag: true,
        list: [{id:1,label:'a'},{id:3,label:'c'}]
      }
    },
    methods: {
      switchFlag(){
        this.list = [{id:1,label:'a'},{id:2,label:'b'},{id:3,label:'c'}]
        this.flag = !this.flag;
      }
    }
}
</script>

<style scoped>

</style>
