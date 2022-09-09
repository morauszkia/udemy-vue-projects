const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      lastName: "",
    };
  },
  // methods, but called and executed differently
  // methods: executed for every re-evaluation of anything (except event bound)
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    // name and use like data properties
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
