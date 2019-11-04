<template>
  <form
    class="text-center border border-light p-5 heavy-rain-gradient"
    @submit.prevent="loginUser()"
  >
    <p class="h4 mb-4">Sign in</p>
    <input
      type="text"
      id="username"
      class="form-control mb-4"
      placeholder="Username"
      v-model="username"
    />
    <input
      type="password"
      id="defaultLoginFormPassword"
      class="form-control mb-4"
      placeholder="Password"
      v-model="password"
    />
    <button class="btn btn-primary btn-block my-4" type="submit">Login</button>
    <p>
      Not a member?
      <router-link to="/auth/register">Register</router-link>
    </p>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      err: {}
    };
  },
  methods: {
    ...mapActions({
      login: "Auth/login"
    }),
    async loginUser() {
      let { username, password } = this;
      if (username !== "" && password !== "") {
        // Login the user into the system and issue the token to the user
        this.login({ username, password });
      } else {
        username === ""
          ? (this.err["username"] = "Username field is required.")
          : (this.err["password"] = "Password field is required.");
      }
    }
  }
};
</script>