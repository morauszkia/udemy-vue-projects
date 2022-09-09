const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: "",
      listIsShowing: true,
    };
  },
  computed: {
    buttonText() {
      return `${this.listIsShowing ? "Hide" : "Show"} List`;
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
    toggleListShowing() {
      this.listIsShowing = !this.listIsShowing;
    },
  },
});

app.mount("#assignment");
