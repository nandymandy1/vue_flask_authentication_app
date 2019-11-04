<template>
  <div class="modal-container">
    <div class="modal fade" id="modalProductForm" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">{{ modalTitle }}</h4>
            <button type="button" class="close" @click="closeModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form mb-5">
              <i class="fas fa-box prefix grey-text"></i>
              <input type="text" id="form34" class="form-control" v-model="name" />
              <label for="form34">Name</label>
            </div>
            <div class="md-form">
              <i class="fas fa-pencil-alt prefix grey-text"></i>
              <textarea
                type="text"
                id="form8"
                class="md-textarea form-control"
                rows="4"
                v-model="description"
              ></textarea>
              <label for="form8">Description</label>
            </div>
            <div class="md-form mb-5">
              <i class="fas fa-money-bill-wave prefix grey-text"></i>
              <input type="number" id="form29" class="form-control" v-model="price" />
              <label for="form29">Price</label>
            </div>
            <div class="md-form mb-5">
              <i class="fas fa-tag prefix grey-text"></i>
              <input type="number" id="form32" class="form-control" v-model="qty" />
              <label for="form32">Quantity</label>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-primary" @click="submitHandler()">
              <i class="fas fa-plus ml-1"></i>
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <button :class="`btn btn-${buttonClass}`" @click="openModal()">{{ buttonTitle }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      price: null,
      qty: null,
      description: ""
    };
  },
  props: {
    modalTitle: String,
    buttonTitle: String,
    buttonClass: String,
    buttonText: String
  },
  methods: {
    openModal() {
      $("#modalProductForm").modal("show");
    },
    closeModal() {
      $("#modalProductForm").modal("hide");
    },
    submitHandler() {
      let { name, price, qty, description } = this;
      price = Number(price);
      qty = parseInt(Number(qty));
      this.$emit("submitHandler", { name, price, qty, description });
      this.name = "";
      this.price = "";
      this.qty = null;
      this.description = null;
      this.closeModal();
    }
  }
};
</script>

<style scoped>
.modal-container {
  margin: 0;
  padding: 0;
}
</style>