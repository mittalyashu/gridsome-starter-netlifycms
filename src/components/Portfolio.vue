<template>
  <ul id="work" class="Portfolio">
    <li v-for="item in Portfolio.items" class="Portfolio__Content__Card" :style="item.image | truncate(8)" :key="item.title">
      <h2>{{ item.title }}</h2>
    </li>
  </ul>
</template>

<script>
	import Portfolio from '~/data/Portfolio.yml'

	export default {
		computed: {
			Portfolio () {
				return Portfolio
			}
    },
    filters: {
      truncate: function(text, length) {
        return "background-image: url(" + text.substring(length) + ")"
      }
    }
  } 
</script>


<style lang="sass" scoped>
  .Portfolio
    padding: 30px 0
    
  .Portfolio__Content__Card
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    height: 300px
    border-radius: 5px
    display: flex
    align-items: flex-end
    margin-bottom: 1em
    position: relative

    &::before
      content: ""
      background: linear-gradient(to top, #000, rgba(225,255, 255, 0))
      opacity: 0.45
      border-radius: 5px
      position: absolute
      top: 0
      right: 0
      left: 0
      bottom: 0
      z-index: 0

    h2
      position: relative
      font-weight: 600
      color: white
      padding-bottom: 20px
      padding-left: 20px

  @media (min-width: 576px)
    .Portfolio
      display: grid
      grid-template-columns: repeat(2, auto)
      grid-gap: 2em

    .Portfolio__Content__Card
      margin: 0
</style>