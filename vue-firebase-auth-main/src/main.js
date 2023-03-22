import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

createApp(App).use(router).use(Antd).mount("#app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaM6TEzO22E9DMmyEljyeULoLSEVUnuw8",
  authDomain: "coca-cola-d1b7a.firebaseapp.com",
  projectId: "coca-cola-d1b7a",
  storageBucket: "coca-cola-d1b7a.appspot.com",
  messagingSenderId: "157701769324",
  appId: "1:157701769324:web:23468651cb5435a4e8b049",
  measurementId: "G-ZTXJFGNZ25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
