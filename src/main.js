import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";



Vue.config.productionTip = false;
	function initRem() {
	  let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
	  window.document.documentElement.style.fontSize = `${100 * cale}px`
	}
	
	window.addEventListener('resize', function() {
	  initRem()
	})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
