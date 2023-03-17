<template>
  <div>
    <h2>Travel Survey</h2>
    <form>
      <label for="destination">Destination:</label>
      <input type="text" id="destination" v-model="destination" />
      <hr />
      <label for="duration">Duration of stay:</label>
      <select id="duration" v-model="duration">
        <option value="1">1 week</option>
        <option value="2">2 weeks</option>
        <option value="3">3 weeks</option>
        <option value="4">4 weeks or more</option>
      </select>
      <hr />
      <label for="activities">What activities are you interested in?</label>
      <input type="checkbox" id="beach" value="beach" v-model="activities" />
      <label for="beach">Beach</label>
      <input
        type="checkbox"
        id="sightseeing"
        value="sightseeing"
        v-model="activities"
      />
      <label for="sightseeing">Sightseeing</label>
      <input
        type="checkbox"
        id="adventure"
        value="adventure"
        v-model="activities"
      />
      <label for="adventure">Adventure</label>
      <hr />
      <label for="budget">What is your budget for the trip?</label>
      <input
        type="range"
        id="budget"
        min="1000"
        max="10000"
        step="500"
        v-model="budget"
      />
      <p>Current budget: {{ budget }}</p>

      <button type="submit" @click.prevent="submitForm()">Submit</button>
      <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
        Logout
      </button>
    </form>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default {
  data() {
    return {
      email: auth.currentUser.email,
      destination: "",
      duration: "",
      activities: [],
      budget: 5000,
    };
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
    submitForm() {
      const data = {
        destination: this.destination,
        duration: this.duration,
        activities: this.activities,
        budget: this.budget,
      };
      console.log(data); // or send data to server
    },
  },
};
</script>
