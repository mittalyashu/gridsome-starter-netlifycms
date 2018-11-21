<template>
  <Layout>
    <Header/>
    <div class="article">
      <div class="meta">
        <h1>{{ $page.blogPost.title }}</h1>
        <span>{{ $page.blogPost.date }}</span>
      </div>
      <div class="article__content" v-html="$page.blogPost.content" />
    </div>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    },
    metaInfo () {
      return {
        title: this.$page.blogPost.title
      }
    }
  }
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "DD MMMM YYYY")
      content
    }
  }
</page-query>

<style lang="sass">
  .article
    margin-top: 15px
    
    .meta
      text-align: center

      span
        font-size: 14px
        color: darken(#cdcdcd, 15%)

  .article__content
    max-width: 700px
    margin: 0 auto
  
  .article__content h1
    font-size: 40px
  
  .article__content a
    color: #4dba87
    text-decoration: underline
  
  .article__content a:hover
    text-decoration: none
  
  .article__content span
    font-size: 80%
    margin-bottom: 20px
  
  .article__content ol, .article__content ul
    list-style-position: outside
  
  .article__content ul
    list-style: disc
    padding-left: 20px
  
  .article__content p:first-child
    margin-top: 15px
  
  .article__content p
    margin-top: 0
    margin-bottom: 10px
    line-height: 1.5
  
</style>