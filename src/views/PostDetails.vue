<template>
  <!-- <h1>haloooo posts {{id}}</h1> -->
  <!-- <div v-if="post" class="app__detailedpost">
    <div class="app__detailedpost-tags">
      <p class="app__detailedpost-tags_name">{{post.parsely.meta.author[0].name }}</p>
      <p class="app__detailedpost-tags_time">{{post.parsely.meta.datePublished }}</p>
    </div>
    <h1 class="app__detailedpost-title">
      {{ post.title.rendered }}
    </h1>
    <div class="app__detailedpost-content">
      <section class="app__detailedpost-content_section1">
        <p class="app__detailedpost-content_section1-desc">
          {{ post.excerpt.rendered }}
        </p>
      </section>
      <div class="app__detailedpost-content_image">
        <img :src="post.parsely.meta.image.url" alt="blog photo"  />
      </div>
      <section class="app__detailedpost-content_section2">
        <p class="app__detailedpost-content_section1-desc">
          {{ post.excerpt.rendered }}
        </p>
      </section>
    </div>
  </div> -->
  <div>
    <DetailedPost v-if="post" :data="post" />
    <MoreArticles />
  </div>
</template>

<script>
import DetailedPost from '../components/DetailedPost.vue'
import MoreArticles from '../components/MoreArticles.vue'
export default {
    name: "PostDetails",
    props: ['id'],
    components:{
      DetailedPost,
      MoreArticles
    },
    computed:{
      post() {
          return this.$store.state.post;
      },
    },
    mounted(){
      this.$store.dispatch("getDetailPost", this.id);
    }

}
</script>

// <style lang='scss' scoped >
// .app__detailedpost {
//   max-width: 1144px;
//   margin: 0 auto;

//   .app__detailedpost-tags{
//     display: flex;
//     margin-top: 91px;
//     gap: 4px;

//     :nth-child(1){
//       font-size: 12;
//       line-height: 14.32px;
//       font-weight: 500;
//       color: #4B4B4B;
//     }

//     :nth-child(2){
//       font-size: 12;
//       line-height: 14.32px;
//       font-weight: 500;
//       color: #6E6E6E;
//     }
//   }

//   .app__detailedpost-title{
//     margin-top: 10px;
//     font-size: 32px;
//     line-height: 38.19px;
//     font-weight: 900;
//     color: #2C2C2C;
//   }

//   .app__detailedpost-content {
//     margin-top: 23px;

//     .app__detailedpost-content_section1-desc,
//     .app__detailedpost-content_section2-desc{
//       font-size: 14px;
//       line-height: 21px;
//       font-weight: 400;
//       color: #6E6E6E;
//     }

//     .app__detailedpost-content_image{
//       display: flex;
//       justify-content: center;
//       margin: 30px 0px;
//     }
//   }


// }
// </style>