const app = Vue.createApp({
  data() {
    return {
      textInput: "",
      confirmedTextInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert!");
    },
    registerInput(event) {
      this.textInput = event.target.value;
    },
    registerConfirmedInput(event) {
      this.confirmedTextInput = event.target.value;
    },
  },
});

app.mount("#assignment");
