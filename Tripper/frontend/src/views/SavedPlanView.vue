<template>
    <div>
      <div v-for="card in savedCards" :key="card.id" class="card-wrapper">
        <div class="card-container">
          <div class="card bg-dark text-white">
            <h5 class="card-title">{{ card.title }}</h5>
            <h6 class="card-subtitle mb-2">{{ card.subtitle }}</h6>
            <p class="card-text scrollable">{{ card.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { auth, db } from "../main.js";
  import { collection, doc, getDocs } from "firebase/firestore";
  
  export default {
    data() {
      return {
        savedCards: [],
      };
    },
    mounted() {
      this.fetchSavedCards();
    },
    methods: {
      async fetchSavedCards() {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userId = currentUser.uid;
          const querySnapshot = await getDocs(
            collection(doc(collection(db, "plan"), userId), "cards")
          );
          this.savedCards = querySnapshot.docs.map((doc) => doc.data());
        } else {
          console.log("No user currently logged in.");
        }
      },
    },
  };
  </script>
  