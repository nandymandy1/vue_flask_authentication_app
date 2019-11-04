<template>
  <form
    class="text-center border border-light p-5 heavy-rain-gradient"
    @submit.prevent="registerUser()"
  >
    <p class="h4 mb-4">Register</p>
    <input
      type="text"
      id="username"
      class="form-control mb-4"
      placeholder="Username"
      v-model="username"
    />
    <input type="text" id="name" class="form-control mb-4" placeholder="Name" v-model="name" />
    <input type="text" id="email" class="form-control mb-4" placeholder="Email" v-model="email" />
    <input
      type="password"
      id="password"
      class="form-control mb-4"
      placeholder="Password"
      v-model="password"
    />
    <input
      type="password"
      id="confirm_password"
      class="form-control mb-4"
      placeholder="Confirm Password"
      v-model="confirmPassword"
    />
    <button class="btn btn-primary btn-block my-4" type="submit">Register</button>
    <p>
      Already a member?
      <router-link to="/auth/Login">Login</router-link>
    </p>
  </form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Alert from "../Utils/Alert";

export default {
  data() {
    return {
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      err: {}
    };
  },

  methods: {
    ...mapActions({
      register: "Auth/register"
    }),
    registerUser() {
      // Validate the data
      this.validateData();
      if (!Object.keys(this.err).length) {
        let newUser = {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password
        };
        this.register(newUser);
      } else {
        console.log(this.err);
      }
    },

    async validateData() {
      let { username, email, name, password, confirmPassword } = this;

      // validate Name
      if (name === "") {
        this.err["name"] = "Name field is required.";
      }

      // validate Email
      // let regx = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/gim;

      if (email === "") {
        this.err["email"] = "Email field is required.";
      }
      //  else if (regx.test(email)) {
      //   this.err["email"] = "This is not valid email address.";
      // }

      // validate Username
      if (username === "") {
        this.err["username"] = "Username field is required.";
      }

      // validate Password
      if (password === "") {
        this.err["password"] = "Password field is required.";
      }

      // Validate confirm password field
      if (password !== confirmPassword) {
        this.err["confirmPassword"] = "Passwords do not match.";
      }
    }
  }
};
</script>