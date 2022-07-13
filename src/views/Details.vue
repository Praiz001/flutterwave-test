<template>
    <div>
       <DetailedPost />
       <MoreArticles />
    </div>
</template>

<script>
import DetailedPost from '../components/DetailedPost.vue'
import MoreArticles from '../components/MoreArticles.vue'
export default {
    name: 'DetailsView',
    components: {
        DetailedPost,
        MoreArticles
    }
    
}
</script>