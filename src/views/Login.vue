<template>
    <button @click="signin">Sign In</button>

</template>

<script>

export default {
  methods: {
    signin() {
      this.signIn(); 
      console.log(this.$router.push('/inicio'))
    }
  }
};


</script>

<style></style>
