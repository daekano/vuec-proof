<template>
  <div class="hello">
    <p class="greeting">{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      greeting: 'false',
    };
  },
  created(Service) {
    this.Service = Service;
  },
  beforeMount() {
    this.greeting = this.Service.fetch();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
