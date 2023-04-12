<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card bg-dark text-white">
        <div class="card-body">
          <h5 class="card-title">Test</h5>
          <h6 class="card-subtitle mb-2">Test</h6>
          <p class="card-text">{{ response.content }}</p>
          <button @click="saveToFirestore(response)">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../main.js";
import { collection, doc, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      response: null,
      // destination: null,
      // timerange: null,
    };
  },
  mounted() {
    this.response = JSON.parse(this.$route.query.response);
    // this.destination = JSON.parse(this.$route.query.result).destination;
    // this.timerange = JSON.parse(this.$route.query.result).rangeTimePicker;
  },

  methods: {
    saveToFirestore(response) {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        console.log("Result: ", this.result);
        addDoc(collection(doc(collection(db, "plan"), userId), "cards"), {
          uId: userId,
          // title: Test,
          // subtitle: this.timerange.content,
          content: response.content,
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


