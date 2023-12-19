<template>
  <v-app id="inspire">
    
    <v-app-bar
      app
      color="white"
      flat
    >
    
      <v-container class="py-0 fill-height">
        <!-- <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar> -->
        

        <div class="d-flex align-center fill-height" >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <b>ThakBong - 讀墓</b>

          <div
            class="mx-2"
          >
            <v-btn
              text
              icon
              small
              href="https://www.facebook.com/APLACTaiwan/" target="_blank"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
              text
              icon
              small
              href="https://www.nuk.edu.tw/" target="_blank"
            >
              <v-icon>mdi-school</v-icon>
            </v-btn>

            <v-btn
              text
              icon
              small
              href="https://data.depositar.io/en/organization/thakbong" target="_blank"
            >
              <v-icon>mdi-book-multiple</v-icon>
            </v-btn>
          </div>
        </div>
        <v-spacer></v-spacer>


  <div class="text-center searchColBtn">
    <v-menu 
      :close-on-click="false"
      :close-on-content-click="false"  
      offset-x
      nudge-left="320px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="mx-2"
          fab
          dark
          x-small
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-responsive max-width="260" class="w-25 ">
          <div class="d-flex align-center">
            <v-text-field
              rounded
              hide-details
              dense
              flat
              solo-inverted
              v-model="search"
              append-outer-icon="mdi-magnify"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Search"
              @click:append-outer="searchSite"
              @click:clear="clearSearch"
          ></v-text-field>
            <!-- <v-btn
                color="secondary"
                fab
                x-small
                dark
                class="ml-1"
              >
              <v-icon>fas fa-search</v-icon>
            </v-btn> -->
          </div>
          
        </v-responsive>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
        
        <v-responsive max-width="260" class="w-25 searchCol" >
      
          <div class="d-flex align-center" color="white">
            <v-text-field
              rounded
              hide-details
              dense
              flat
              solo-inverted
              v-model="search"
              append-outer-icon="mdi-magnify"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Search"
              @click:append-outer="searchSite"
              @click:clear="clearSearch"
          ></v-text-field>
            <!-- <v-btn
                color="secondary"
                fab
                x-small
                dark
                class="ml-1"
              >
              <v-icon>fas fa-search</v-icon>
            </v-btn> -->
          </div>
          
        </v-responsive>
        
      </v-container>
    </v-app-bar>

    

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="position:fixed; top:0; left:0; overflow-y:scroll;"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
            <v-list-item link 
              :to="{
                name: 'drgpa2023',
              }">
              <v-list-item-content>
                <v-list-item-title>drgpa2023</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link 
              :to="{
                name: 'history',
              }">
              <v-list-item-content>
                <v-list-item-title>History</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          <!-- <v-list-item>
            <v-list-item link 
              :to="{
                name: 'reascher',
              }">
              <v-list-item-content>
                <v-list-item-title>Reascher</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item> -->

          <v-list-item link 
            :to="{
              name: 'projects',
            }">
            <v-list-item-content>
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link 
            :to="{
              name: 'sites',
            }">
            <v-list-item-content>
              <v-list-item-title>Sites</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-item link
            :to="{
              name: 'help',
            }">
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          <v-divider class="my-2"></v-divider>

          <!-- <v-list-item link color="grey lighten-4">
            <v-list-item-content>
              <v-list-item-title> Logout </v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-main class="grey lighten-3">
      <v-alert
            :value="alert"
            type="error"
            transition="slide-y-transition"
            position="absolute"
            class="ma-2"
            >
            There is no {{search}} site!
        </v-alert>
        <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import SiteService from '@/services/SiteService'

export default {
  name: 'app',
  data: () => ({
    drawer: false,
    group: null,
    show: false,
    search: '',
    alert: false,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
  mounted: function () {
    if(alert){
      this.hide_alert();
    }
  },
  methods: {
     
      clearSearch () {
        this.search = ''
      },

      hide_alert: function (event) {
        window.setInterval(() => {
          this.alert = false;
        }, 3000)   
      },

      // async searchSite () {
      //   let site = (await SiteService.searchByName(this.search)).data
      //   console.log(site)
      //   if(site==''){
      //     this.alert = true;
      //   }else{
      //     const routeData = this.$router.resolve({name: 'site', params: {siteId: site.id}});
      //     window.open(routeData.href, '_blank');
      //   }
      // },

      async searchSite () {
        this.$router.push({name: 'sitesSearch', params: {searchStr: this.search}}).catch(err => {console.log(err)});
        // this.$forceUpdate();
        this.$router.go(0)
         // const routeData = this.$router.resolve({name: 'sites', params: {searchStr: this.search}});
          // window.open(routeData.href, '_blank');
      }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.v-alert {
  position: absolute;
  right: 0px;
}


.searchColBtn {
    display: none;
}


@media (min-width: 960px){
  .container {
      max-width: none !important;
  }
}

@media (max-width: 590px){
  .searchCol {
      display: none;
  }
  .searchColBtn {
      display: inline-block;
  }
}

@media (min-width: 590px){
  .searchColBtn {
      display: none;
  }
  .searchCol {
      display: inline-block;
  }
}
</style>