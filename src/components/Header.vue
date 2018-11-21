<template>
  <header>
    <ul>
      <li>
        <a href="/#work">Work</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li class="Header__Profile__Image">
        <g-link to="/">
          <g-image src="~/assets/images/gridsome.png"/>
        </g-link>
      </li>
      <li style="text-align: right">
        <a href="/#blog">Blogs</a>
      </li>
      <li style="text-align: right">
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  </header>
</template>

<style lang="sass" scoped>
  header
    padding: 50px 0

    ul
      display: flex
      flex-direction: row
      align-items: center
      text-transform: uppercase

      li
        flex: 1 1 0
        color: #4DBA87
        font-size: 0.75rem
        font-weight: 700

  .Header__Profile__Image
    text-align: center

    img
      width: 50px
      border-radius: 50px
</style>