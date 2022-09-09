<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- To make it reusable: using slots -->
      <!-- Used in App.vue -->
      <slot :item="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn vue"],
    };
  },
};
</script>
