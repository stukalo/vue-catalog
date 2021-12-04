<template>
  <div id='toggle'>
    <div><span></span></div>
    <div><span></span></div>
  </div>
</template>

<script>
export default {
  name: 'Toggle',

  methods: {
    onChange() {
      this.$emit('change');
    },
  },
};
</script>

<style scoped>
  #toggle {
    color: white;
    background-color: blue;
  }
</style>
