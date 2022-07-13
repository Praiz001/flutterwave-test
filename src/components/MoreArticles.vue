<template>
  <div class="app__morearticles">
    <h2 class="app__morearticles_title">More Articles</h2>
    <div class="app__morearticles-posts_wrapper">
      <div
        v-for="item in posts"
        :key="item.index"
        class="app__morearticles-posts"
        
      >
        <ArticleCard @goToNext="this.$router.push('Details')"  :data="item"  />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard.vue";
export default {
  name: "MoreArticles",
  components: {
    ArticleCard,
  },
  data() {
    return {
      posts: [
        {
          src: require("../assets/img/post1.png"),
          stack: "Front-end",
          time: "1 Month Ago",
          title: "Css Grid",
          desc: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
          duration: "12 Min Read",
          action: "Read Full",
        },
        {
          src: require("../assets/img/post2.png"),
          stack: "Front-end",
          time: "2 Month Ago ",
          title: "Colors in Css",
          desc: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
          duration: "8 Min Read",
          action: "Read Full",
        },
        {
          src: require("../assets/img/post3.png"),
          stack: "Front-end",
          time: "1 Month Ago",
          title: "Css Variables",
          desc: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
          duration: "10 Min Read",
          action: "Read Full",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped >
.app__morearticles {
  max-width: 1144px;
  margin: 0 auto;
  margin-bottom: 251px;

  .app__morearticles_title {
    margin-top: 65px;
    font-size: 24px;
    line-height: 28.64px;
    font-weight: 900;
    color: #2c2c2c;
  }

  .app__morearticles-posts_wrapper {
    margin-top: 23px;
    display: flex;
    gap: 47px;

    .app__morearticles-posts {
      width: 350px;
      height: 402px;
    }
  }
}
</style>