<template>
  <div class="mt-5">
    <h1>Profile</h1>
    <div class="card mx-auto" style="width: 30rem;">
      <div class="view overlay">
        <img
          class="card-img-top"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          alt="Card image cap"
        />
        <a @click.prevent>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body">
        <h4 class="card-title">@{{ user.username }}</h4>
        <p class="card-subtitle">{{ user.name }}</p>
        <p class="card-text">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "Auth/user"
    })
  },
  methods: {
    ...mapActions({
      loadProfile: "Auth/getProfile"
    })
  },
  created() {
    this.loadProfile();
  }
};
</script>