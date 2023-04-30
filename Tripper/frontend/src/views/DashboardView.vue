<template>
  <div>
    <div class="text-center">Get travel plan reccomendation based on your 16 personalities</div>
    <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
      Logout
    </button>
    <div class="text-center">
     <button @click="searchForm"> search</button>
     </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default {
  data() {
    return {
      email: auth.currentUser.email,
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
    searchForm() {
      this.$router.push("/mainpage");
    }
  },
};

</script>
