const app = Vue.createApp({
  data() {
    return {
      styleClass: "",
      paragraphIsVisible: true,
      colorInput: "",
    };
  },
  methods: {
    toggleVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    getColor(event) {
      this.colorInput = event.target.value;
    },
  },
  computed: {
    visibilityClass: this.paragraphIsVisible ? "visible" : "hidden",
  },
});

app.mount("#assignment");
