import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faEdit,
  faSignOutAlt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);