import { createApp } from 'vue'
import App from './App.vue'
import store from '/store'
import router from './router.js'
import Toast from "vue-toastification";
import { createGtm } from '@gtm-support/vue-gtm';

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App)
    app.use(store)
    app.use(router)
    app.use(PerfectScrollbar)
    app.use(Toast)
    app.use(createGtm({id: "GTM-KFZZVGN",vueRouter: router}))
    app.mount('#app')
