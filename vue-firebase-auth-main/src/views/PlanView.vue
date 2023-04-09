<template>
  <div class="card-wrapper">
    <div v-for="(card, index) in cards" :key="index" class="card-container">
      <div class="card bg-dark text-white">
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <h6 class="card-subtitle mb-2">{{ card.subtitle }}</h6>
          <p class="card-text">{{ card.content }}</p>
          <button @click="saveToFirestore(card)">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the auth and db objects from your main.js file
import { auth, db } from "../main.js";
import { collection, doc, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      cards: [
        {
          title: "Card 1",
          subtitle: "Subtitle 1",
          content: "Content 1",
        },
        {
          title: "Card 2",
          subtitle: "Subtitle 2",
          content: "Content 2",
        },
        {
          title: "Card 3",
          subtitle: "Subtitle 3",
          content: "Content 3",
        },
      ],
    };
  },
  methods: {
    saveToFirestore(card) {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        addDoc(collection(doc(collection(db, "plan"), userId), "cards"), 
        {
          uId: userId,
          title: card.title,
          subtitle: card.subtitle,
          content: card.content,
        })
          .then(() => {
            console.log("Card added to Firestore!");
          })
          .catch((error) => {
            console.error("Error adding card to Firestore: ", error);
          });
      } else {
        console.log("No user currently logged in.");
      }
    },
  },
};
</script>

<style>
.card-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card-container {
  margin-right: 20px;
  max-width: 400px;
}

.card {
  max-width: 400px;
  height: 400px;
}

.card-title {
  font-size: 1.5rem;
  color: white;
}

.card-subtitle {
  font-size: 1.2rem;
  color: white;
}

.card-text {
  font-size: 1.2rem;
  max-height: 100px;
  overflow: hidden;
}
</style>
