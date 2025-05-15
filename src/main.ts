import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Gtag from 'vue-gtag-next'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Gtag.default, {
  property: {
     id: 'G-PXWSH9YF4J'
  }
})
app.mount('#app')
