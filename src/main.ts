// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

import { createApp } from 'vue'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'

const app = createApp(App)
AOS.init()
app.mount('#app')
