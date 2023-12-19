<template>
  <div>
    <h1 class="primary--text text-center">ThakBong Help Page</h1>
    <p class="ma-1">You can search the following patterns:</p>

    <h3 class="primary white--text text-center rounded">People Names:</h3>
    <div class="mx-4 my-2">
      <ol>
        <b> 
        <li v-for="n in 5" :key="n" link>
          People {{ n }}
        </li>
      </b> 
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
