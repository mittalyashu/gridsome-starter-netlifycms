import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}