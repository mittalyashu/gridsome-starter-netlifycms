<template>
  <footer>
    <span>Copyright © 2018 Gridsome</span>
    <ul>
      <li>
				<a href="#about">About</a>
			</li>
      <li>
				<a href="#contact">Contact</a>
			</li>
    </ul>
  </footer>
</template>

<style lang="sass" scoped>
	footer
		padding: 60px 0
		display: flex
		font-size: 0.9rem

		span
			color: black
			margin-right: auto
			font-weight: 600

		ul
			display: flex
			margin-top: 1rem

			a
				color: #aeaeae

	footer, ul
		flex-direction: column

	@media (min-width: 576px)
		footer, ul
			flex-direction: row
		
		ul
			li:last-child
				margin-left: 20px
</style>