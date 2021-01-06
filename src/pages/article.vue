<template>
    <div>
        <router-link to="/login">登录</router-link>
        <a href="" @click="goToHome">首页</a>
        <p>{{completeName}}</p>
        <p v-html="search"></p>
        <p>search value is: {{_data.search}}</p>
        <input v-model="search">
        <home-page></home-page>
    </div>
</template>

<script>
    import HomePage from './homepage.vue'
    export default {
        name: 'article',
        components: {
            'HomePage':HomePage
        },
        data() {
            return {
                article: {
                    title: 'A name',
                    author: 'me'
                },
                search: ''
            }
        },
        computed:{
            completeName: function() {
                console.log('computed')
                return this.article.title + '-' + this.article.author
            },
        },
        watch: {
            search:  function(newVal, oldVal) {
                console.log('search new: %s, old: %s', newVal, oldVal);
                // this.article.title = newVal
                // console.log(this.completeName)
            },
            article: {
                handler: function(newVal, oldVal) {
                    console.log(this.completeName)
                },
                deep: true
            }
        },
        mounted() {
            console.log(this.$el,this)
            /* console.log(this.$route.params.name)
            console.log(this.title,this._data) */
        },
        methods: {
            goToHome() {
                this.$router.push({name:'homepage'})
            }
        }
    }
</script>

<style scoped>

</style>