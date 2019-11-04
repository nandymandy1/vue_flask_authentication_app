import axios from "axios";
import router from "../router";
import jwt_decode from "jwt-decode";
import { postData } from "../services/api";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  error: null,
  exp: null
};

const getters = {
  isLoggedIn: state => {
    if (state.token == "") {
      return false;
    } else {
      if (jwt_decode(state.token).exp < parseInt(Date.now() / 1000)) {
        removeUser();
        return false;
      } else {
        // Set axios defualt token
        axios.defaults.headers.common["Authorization"] = state.token;
        return true;
      }
    }
  },

  authState: state => state.status,
  user: state => state.user,
  error: state => state.error
};

const actions = {
  // Login Action
  async login({ commit }, user) {
    commit("auth_request");
    let { data } = await postData("/users/login", user);
    if (data.success) {
      let { token } = data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token);
    } else {
      commit("auth_error", data.message);
    }
  },

  // Register User
  async register({ commit }, userData) {
    userData["isAdmin"] = true;
    commit("register_request");
    let { data } = await postData("/users/register", userData);
    if (data.success) {
      commit("register_success");
      return data;
    } else {
      commit("register_error", data.message);
    }
  },

  // Get the user Profile
  async getProfile({ commit, state }) {
    let profile = await jwt_decode(state.token);
    commit("profile_loaded", profile);
  },

  // Logout the user
  async logout({ commit }, type) {
    commit("logout");
    removeUser();
    if (type == "none") {
      router.push("/");
    } else {
      router.push("/auth/login");
    }
    return;
  }
};

// Delete the default token from the
// localstorage as well as axios defualt
const removeUser = async () => {
  await localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};

const mutations = {
  auth_request(state) {
    state.error = null;
    state.status = "loading";
  },

  auth_success(state, token) {
    state.token = token;
    state.status = "success";
    state.error = null;
    router.push("/accounts/profile");
    state.loginTime = parseInt(Date.now() / 1000);
  },

  auth_error(state, message) {
    state.error = message;
  },

  register_request(state) {
    state.error = null;
    state.status = "loading";
  },

  register_success(state) {
    state.error = null;
    state.status = "success";
    router.push("/auth/login");
  },

  register_error(state, message) {
    state.error = message;
  },

  logout(state) {
    state.error = null;
    state.status = "";
    state.token = "";
    state.user = "";
  },

  profile_loaded(state, profile) {
    state.user = profile.user;
    state.exp = profile.exp;
  },

  user_profile(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
