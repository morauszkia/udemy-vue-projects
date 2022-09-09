<template>
  <form
    @submit.prevent="
      $emit('change-user-data', { name: userName, age: userAge })
    "
  >
    <div>
      <label for="user-name">Name</label>
      <input type="text" name="user-name" id="user-name" v-model="userName" />
    </div>
    <div>
      <label for="user-age">Age</label>
      <input type="number" name="user-age" id="user-age" v-model="userAge" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  emits: ["change-user-data"],
};
</script>

<style></style>
