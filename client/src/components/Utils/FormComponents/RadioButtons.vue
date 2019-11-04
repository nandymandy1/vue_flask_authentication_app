<template>
  <div class="container">
    <div>
      <input type="radio" name="radio" id="opt1" />
      <label for="opt1" class="label1">
        <span>Yes</span>
      </label>
    </div>
    <div>
      <input type="radio" name="radio" id="opt2" />
      <label for="opt2" class="label2">
        <span>No</span>
      </label>
    </div>
    <div>
      <input type="radio" name="radio" id="opt3" />
      <label for="opt3" class="label3">
        <span>Not Sure</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #fff;
  height: 80px;
  /* width: 260px; */
  box-shadow: 0 0 30px 0 #d1d1d1;
  position: absolute;
  overflow: hidden;
  margin: 0;
}
input[type="radio"] {
  display: none;
}
.label1,
.label2,
.label3 {
  display: block;
  height: 180px;
  width: 130px;
  background-size: 130px 180px;
  background: linear-gradient(
    to bottom,
    white 0,
    white 90px,
    #2c2c2c 90px,
    #2c2c2c 180px
  );
  position: absolute;
  top: 0;
  transition: 0.5s;
  color: #2c2c2c;
}

.label2 {
  right: auto;
}
.label3 {
  right: 0;
}
span {
  display: flex;
  height: 90px;
  width: 130px;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 22px;
}

input:checked + label {
  background-position: 0 -90px;
  color: white;
}
</style>