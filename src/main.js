import { createApp } from 'vue'
import App from './App.vue'

// importo bootstrap (js)
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import * as regularIcons from '@fortawesome/free-regular-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'

library.add(solidIcons.fas);
library.add(regularIcons.far);
library.add(brandIcons.fab);

window.vue = {};
window.vue.App = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
