import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";

Vue.use(RadSideDrawer);
Vue.registerElement(
    'CardView', ()=> require('nativescript-cardview').CardView
);
Vue.registerElement('Mapbox', ()=> require('nativescript-mapbox').MapboxView);

Vue.registerElement('MapView', ()=> require('nativescript-google-maps-sdk').MapView);

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
