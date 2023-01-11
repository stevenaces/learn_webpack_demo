import { sum } from "./js/math";
import "./js/element";

console.log(sum(10, 20));

// 打包vue
import { createApp } from "vue";
import App from "./vue/app.vue";

createApp(App).mount("#app");
