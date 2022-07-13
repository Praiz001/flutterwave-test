<template>
<div class="app__articlecard ">
    <div v-for="item in posts" :key="item.index" >
        <ArticleCard @goToNext="this.$router.push('Details')" :data="item" />
    </div>
</div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'
export default {
    name: 'BlogPosts',
    components: {
        ArticleCard
    },
    data(){
        return{
            posts: [
                {
                    src: require('../assets/img/post1.png'),
                    stack: 'Front-end',
                    time: '1 Month Ago',
                    title: 'Css Grid',
                    desc: 'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.',
                    duration: '12 Min Read',
                    action: 'Read Full'
                },
                {
                    src: require('../assets/img/post2.png'),
                    stack: 'Front-end',
                    time: '2 Month Ago ',
                    title: 'Colors in Css',
                    desc: 'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
                    duration: '8 Min Read',
                    action: 'Read Full'
                },
                {
                    src: require('../assets/img/post3.png'),
                    stack: 'Front-end',
                    time: '1 Month Ago',
                    title: 'Css Variables',
                    desc: 'CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.',
                    duration: '10 Min Read',
                    action: 'Read Full'
                },
            ]
        }

    }
}
</script>

<style lang="scss" scoped>

.app__articlecard {
    max-width: 1144px;
    margin: 0 auto;

    margin-top: 52px;
    display: flex;
    gap: 47px;
}
</style>