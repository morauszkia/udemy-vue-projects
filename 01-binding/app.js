const app = Vue.createApp({
  // Takes a function and returns an object
  // will be properties of Vue global object
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoalHtml: "<h3>Learn a lot of important features</h3>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

// What do we want to control by app?
app.mount("#user-goal");
