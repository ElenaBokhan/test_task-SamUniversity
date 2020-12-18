import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import './public/css/style.css'
import './public/css/normalize.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import Vue from "vue"
import app from "./public/app.vue"

library.add(faSearch)
library.add(faSort)


Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue ({
render: h=>h(app)
}).$mount("#app")