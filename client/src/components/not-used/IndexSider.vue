<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item link 
              :to="{
                name: 'root',
              }">
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link 
              :to="{
                name: 'site',
              }">
              <v-list-item-content>
                <v-list-item-title>Site</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link
              :to="{
                name: 'help',
              }">
              <v-list-item-content>
                <v-list-item-title>Help</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4">
              <v-list-item-content>
                <v-list-item-title> Logout </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-sheet>
      </v-col>

      <v-col class="pa-1">
          <slot>no content</slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: inherit;
}
.t1 {
  margin-top: 50px;
}

.btn_top {
  color: #ffee58;
  font-size: 22px;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
}

.btn_top:hover {
  font-weight: bold;
  color: rgb(255, 250, 210);
}
</style>
