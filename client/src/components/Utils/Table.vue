<template>
  <table class="table table-sm table-hover text-center">
    <thead>
      <tr>
        <th scope="col" v-for="title in titles" :key="title">{{ title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="product.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.name }}</td>
        <td>{{ product.description.substring(0, 50) }}...</td>
        <td>{{product.price}}</td>
        <td>{{product.qty}}</td>
        <td>
          <button class="btn btn-info btn-sm">Edit</button>
          <button class="btn btn-danger btn-sm" @click="$emit('deleteProduct', product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    products: Array,
    titles: Array
  },
  methods: {
    editProduct(data) {
      console.log(data);
    }
  }
};
</script>