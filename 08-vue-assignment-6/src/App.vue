<template>
  <div class="container">
    <active-user :name="userName" :age="userAge"></active-user>
    <user-data @change-user-data="changeUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "Peter",
      userAge: 25,
    };
  },
  methods: {
    changeUserData(userData) {
      this.userName = userData.name;
      this.userAge = userData.age;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #1c7ed6, #1864ab);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background-color: rgba(255, 255, 255, 0.9);
  /* width: 1000px;
  max-width: 90vw; */
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 50px;
}
</style>
