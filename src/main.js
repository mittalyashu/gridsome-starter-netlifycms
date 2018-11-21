import DefaultLayout from '~/layouts/Default/index.vue'
require('~/assets/css/style.sass')

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}