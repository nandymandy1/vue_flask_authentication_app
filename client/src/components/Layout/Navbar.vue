<template>
  <nav class="navbar navbar-expand-lg navbar-dark primary-color">
    <a class="navbar-brand" href="/">Vue Flask</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#basicExampleNav"
      aria-controls="basicExampleNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="basicExampleNav">
      <!-- Links -->
      <ul class="navbar-nav ml-auto">
        <!-- General Links -->
        <li class="nav-item" v-for="link in generalLinks" :key="link.name">
          <router-link class="nav-link" :to="link.path">{{ link.name }}</router-link>
        </li>
        <!-- General Links -->

        <!-- Unauthenticated Links -->
        <template v-if="!isLoggedIn">
          <li class="nav-item" v-for="link in publicLinks" :key="link.name">
            <router-link class="nav-link" :to="link.path">{{ link.name }}</router-link>
          </li>
        </template>
        <!-- Unauthenticated Links -->

        <!-- Authenticated Links -->
        <template v-else>
          <li class="nav-item" v-for="link in authLinks" :key="link.name">
            <router-link class="nav-link" :to="link.path">{{ link.name }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logoutUser()">Logout</a>
          </li>
        </template>
        <!-- Authenticated Links -->
      </ul>
    </div>
    <!-- Collapsible content -->
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      publicLinks: [
        {
          path: "/auth/login",
          name: "Login"
        },
        {
          path: "/auth/register",
          name: "Register"
        }
      ],
      authLinks: [
        {
          path: "/accounts/products",
          name: "Product"
        },
        {
          path: "/accounts/profile",
          name: "Profile"
        }
      ],
      generalLinks: [
        {
          path: "/home",
          name: "Home"
        },
        {
          path: "/about",
          name: "About"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "Auth/isLoggedIn"
    })
  },
  methods: {
    ...mapActions({
      logoutUser: "Auth/logout"
    })
  }
};
</script>