<template>
  <div>
    <h1>Products</h1>
    <AddModal
      buttonText="Add"
      modalTitle="Add New Products"
      buttonTitle="Add Product"
      buttonClass="primary btn-md"
      key="product-add"
      @submitHandler="submitHandler"
    />
    <Alert
      v-if="notification.message"
      :message="notification.message"
      :status="notification.status"
    />
    <div class="row">
      <template v-if="loading">
        <Loader />
      </template>
      <template v-else>
        <div class="card p-4 mx-auto" v-if="products.length" style="width: 100%">
          <Table
            :titles="['Sno.', 'Product Name', 'Description', 'Price', 'Quantity', 'Actions']"
            :products="products"
            @deleteProduct="deleteProduct"
          />
        </div>
        <p class="mx-auto" v-else>No Products Found</p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Alert from "../Utils/Alert";
import Table from "../Utils/Table";
import AddModal from "../Utils/AddModal";
import Loader from "../Utils/Loader";

export default {
  components: {
    Alert,
    Table,
    Loader,
    AddModal
  },
  data() {
    return {
      price: null,
      name: "",
      description: "",
      qty: null
    };
  },
  computed: {
    ...mapGetters({
      notification: "Products/notification",
      products: "Products/products",
      loading: "Products/loading"
    })
  },
  methods: {
    ...mapActions({
      loadProducts: "Products/getProducts",
      addProduct: "Products/addProduct",
      deleteProduct: "Products/deleteProduct",
      editProduct: "Products/updatedProduct"
    }),
    submitHandler(data) {
      this.addProduct(data);
    }
  },
  created() {
    this.loadProducts();
  }
};
</script>
