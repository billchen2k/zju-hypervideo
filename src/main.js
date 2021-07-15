import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
