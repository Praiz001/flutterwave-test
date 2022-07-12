<template>
    <div>
        <TopArticle />
        <BlogPosts />
        <BlogPosts />
        <AppFooter />
    </div>
</template>

<script>
import TopArticle from '@/components/TopArticle'
import BlogPosts from '../components/BlogPosts.vue'
import AppFooter from '../components/Footer.vue'
export default {
    name: 'HomePage',
    components: {
        TopArticle,
        BlogPosts,
        AppFooter
    }
    
}
</script>