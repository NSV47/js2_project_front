<template>
  <div>
    <h2>Новости {{ val }} <v-btn @click="getNews">Обновить</v-btn></h2>
    <v-card v-for="(item, key) in news" :key="key" style="margin:20px">
      <v-img :src="item.img"></v-img>

      <v-card-title primary-title>
        <div class="center">
          <h3 class="headline mb-0">{{ item.title }}</h3>
          <div>{{ item.text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn color="orange">Share</v-btn>
        <v-btn color="orange">Explore</v-btn>
        <v-btn color="orange" @click="deleteNews">Delete</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn color="orange" @click="addArticle">Добавить новость</v-btn>
  </div>
</template>

<script>
// let a = [1, 2, 3];
// console.log(a);
// console.log(...a);
import { mapState, mapActions } from "vuex";
export default {
  name: "News",
  data: () => ({
    number: 2,
    preview: "",
    title: "",
    text: ""
  }),
  computed: {
    // news(){
    //   return this.$store.state.news
    // }
    // место этого после импорта mapState и mapActions теперь можо написать
    //...mapState(["news"]), // этот news из store/index.js из объекта Vuex.Store -> state
    ...mapState({
      news: state => state.news.news
    }),
    // ...mapState({
    //   news: state => state.news.news
    // }),
    // это подключение state из vuex и получение нужных ключей
    val() {
      return this.number * 2; // четверка в заголовке просто чтобы показать как работает
    }
  },
  methods: {
    // это подключение actions из vuex и полученнние нужных ключей
    ...mapActions(["addNews", "getNews", "deleteNews"]),
    addArticle() {
      let article = {
        title: "сделано непонятно как",
        text: "vuex beautyful"
      };

      // чтобы вызвать изменение
      // this.$store.dispatch('addNews', article); // dispatch это вызов action
      // теперь после ...mapActions можно написать
      this.addNews(article);
      // this.deleteNews(article);
    }
  }
};
</script>
