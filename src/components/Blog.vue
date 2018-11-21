<template>
  <ul id="blog">
    <li v-for="{ node } in $static.allBlogPost.edges" :key="node.id">
      <g-link :to="node.path">
        <h6 v-html="node.title"/>
      </g-link>
      <span v-html="node.date"/>
    </li>
  </ul>
</template>

<static-query>
  query Blog {
    allBlogPost(sortBy: "DESC") {
      edges {
        node {
          id
          title
          date (format: "YYYY")
          path
        }
      }
    }
  }
</static-query>

<style lang="sass" scoped>
  #blog
    padding: 30px 0

    li
      display: flex
      margin-bottom: 10px

      &:last-child
        margin-bottom: 0

      a
        margin-right: auto

      span
        display: flex
        align-items: center
        color: #cdcdcd
        font-size: 14px

  @media (min-width: 576px)
    #blog
      padding: 50px 0
      display: grid
      grid-template-columns: repeat(2, auto)
      grid-gap: 2em

      li
        margin-bottom: 0
</style>
