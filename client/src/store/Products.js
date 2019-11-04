import { postData, getData, deleteData, putData } from "../services/api";

const state = {
  products: [],
  loading: false,
  notifiaction: {
    message: "",
    status: ""
  }
};
const getters = {
  loading: state => state.loading,
  products: state => state.products,
  notification: state => state.notifiaction
};

const actions = {
  // Get Products
  async getProducts({ commit }) {
    commit("product_loading");
    let { data } = await getData("/products");
    commit("products_loaded", data);
  },

  // Add Products
  async addProduct({ commit }, newProduct) {
    commit("product_loading");
    let { data } = await postData("/products", newProduct);
    if (data.success) {
      commit("product_success", data);
      commit("product_added", data.product);
    } else {
      commit("product_error", data);
    }
  },

  // Delete Products,
  async deleteProduct({ commit }, id) {
    commit("product_loading");
    let { data } = await deleteData(`/products/${id}`);
    if (data.success) {
      commit("product_success", data);
      commit("product_deleted", data.product.id);
    } else {
      commit("product_error", data);
    }
  },

  // Edit Products
  async updatedProduct({ commit }, { updatedProduct, id }) {
    commit("product_loading");
    let { data } = await putData(`/products/${id}`, updatedProduct);
    if (data.success) {
      commit("product_success", data);
      commit("product_updated", data.product);
    } else {
      commit("product_error", data);
    }
  }
};

const mutations = {
  product_error(state, data) {
    state.notifiaction.message = data.message;
    state.notifiaction.status = "danger";
    state.loading = false;
    this.commit("Products/product_notification_reset");
  },

  product_success(state, data) {
    state.notifiaction.message = data.message;
    state.notifiaction.status = "success";
    state.loading = false;
    this.commit("Products/product_notification_reset");
  },

  product_notification_reset(state) {
    setTimeout(() => {
      state.notifiaction.message = "";
      state.notifiaction.status = "";
    }, 5000);
  },

  product_loading(state) {
    state.loading = true;
  },

  products_loaded(state, data) {
    state.products = data;
    state.loading = false;
  },

  product_added(state, product) {
    state.products = [...state.products, product];
  },

  product_deleted(state, id) {
    state.products = state.products.filter(product => product.id !== id);
  },

  product_updated(state, data) {
    state.products = state.products.map(product =>
      data.product.id == product.id ? data.product : product
    );
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
