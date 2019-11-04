<template>
  <div>
    <button class="btn btn-primary" @click="openModal1 = true">Modal 1</button>
    <button class="btn btn-primary" @click="openModal2 = true">Modal 2</button>
    <TextBox
      v-model="name"
      placeholder="Name"
      inputClass="form-control"
      label="Name"
      icon="fa-box"
      lableId="name"
    />
    <TextBox
      v-model="address"
      placeholder="Address"
      inputClass="form-control"
      label="Address"
      icon="fa-address-card"
      lableId="address"
    />
    <SelectBox id="select-box" label="City" :options="options" v-model="city" />
    <TextArea
      v-model="description"
      placeholder="Description"
      inputClass="form-control"
      label="Description"
      icon="pencil-alt"
      lableId="description"
    />
    <Radio />
    <br />
    {{ name }}
    <br />
    {{ address }}
    <br />
    {{ city }}
    <br />
    {{ description }}
  </div>
</template>

<script>
import TextBox from "../Utils/FormComponents/TextBox";
import SelectBox from "../Utils/FormComponents/SelectBox";
import TextArea from "../Utils/FormComponents/TextArea";
import Radio from "../Utils/FormComponents/RadioButtons";

export default {
  data() {
    return {
      name: "",
      address: "",
      city: "",
      description: "",
      options: [
        { value: "Hyderabad", text: "Hyderabad" },
        { value: "Delhi", text: "Delhi" },
        { value: "Chennai", text: "Chennai" },
        { value: "Mumbai", text: "Mumbai" },
        { value: "Bangalore", text: "Bangalore" },
        { value: "Gurugram", text: "Gurugram" },
        { value: "Pune", text: "Pune" },
        { value: "Bhopal", text: "Bhopal" },
        { value: "Jaipur", text: "Jaipur" },
        { value: "Kolkata", text: "Kolkata" }
      ]
    };
  },
  components: {
    TextBox,
    SelectBox,
    TextArea,
    Radio
  }
};
</script>