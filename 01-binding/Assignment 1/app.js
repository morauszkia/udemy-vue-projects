const app = Vue.createApp({
  data() {
    return {
      name: "András",
      age: 35,
      imgUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random().toFixed(2);
    },
  },
});

app.mount("#assignment");
