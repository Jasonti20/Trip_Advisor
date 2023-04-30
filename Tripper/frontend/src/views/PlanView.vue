<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card bg-dark text-white">
          <h5 class="card-title">{{ responseData["form_data"]["destination"] }}</h5>
          <h6 class="card-subtitle mb-2">{{ responseData["form_data"]["rangeTimePicker"] }}</h6>
          <p class="card-text scrollable">{{ responseData["chat_response"] }}</p>
      </div>
      <button @click="saveToFirestore(response)">Save</button>
    </div>
  </div>
</template>



<script>
import { auth, db } from "../main.js";
import { collection, doc, addDoc } from "firebase/firestore";

export default {
  computed: {
    responseData() {
      return JSON.parse(this.$route.query.response);
    },
  },
  methods: {
    saveToFirestore() {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        console.log("Result: ", this.result);
        addDoc(collection(doc(collection(db, "plan"), userId), "cards"), {
          uId: userId,
          // title: Test,
          // subtitle: this.timerange.content,
          content: this.responseData,
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
  height: 600px; /* Adjust the height to your desired value */
}

.card-container {
  margin-right: 20px;
  max-width: 500px;
}
.scrollable {
  max-height: 200px;
  overflow: auto;
}
.card {
  max-width: 500px;
  height: 500px;
  opacity: transparent
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
  max-height: 600px;
  overflow: hidden;
}
</style>


