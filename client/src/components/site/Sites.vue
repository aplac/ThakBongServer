<template>
  <div >
    <v-sheet rounded="lg" class="pa-4 ma-4">
      <h3>Search:</h3>
      <v-row>
        <v-col  cols="6" md="3">
          <v-autocomplete
          v-model="country"
          :items="countries"
          outlined
          dense
          label="Country"
          hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="6" md="3" class="pl-0">
          <v-autocomplete
            v-model="community"
            :items="communities"
            label="Community"
            outlined
            dense
            hide-details
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row v-if="sites.length == 0">
        <v-col  cols="12">
          <p class="caption text-center">There is no sites...</p>
          </v-col>
      </v-row>
    </v-sheet>

    <div v-if="this.showMap">
      <v-sheet rounded="lg" class="pa-4 ma-4">
          <TMap ref="MapSample" :sites="sites"></TMap>
          
      </v-sheet>
    </div>


    <v-row class="pa-2 mx-2">
      <v-col
        v-for="(item, index) in sites"
        :key="index"
        class="child-flex pa-1 d-inline-flex"
        cols="6"
        xs="6"
        sm="4"
        md="3">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            :to="{
              name: 'site',
              params:{
                siteId: item.id
              }
            }" >
            <v-card-text class="font-weight-medium ">
                <p class=" mb-0 font-weight-black subtitle-1 headerClass" >{{item.name? item.name: item.id}}</p>
                <p class="mb-2">Plus Code: {{item.pluscode}}</p>
                <v-img
                  v-if="item.site_url"
                  :src="`https://storage.googleapis.com/${item.site_url}`"
                  aspect-ratio="1"
                  class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center">
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img> 
                <v-img
                  v-else
                  aspect-ratio="1"
                  class="grey lighten-2 d-flex align-center">
                  <p class="text-caption text-xs text-center">Have no image found</p>
                </v-img>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SiteService from '@/services/SiteService'
import TMap from '@/components/TMap.vue'

export default {
  
  components: {
    TMap
  },
  data() {
    return {
      countries:[],
      communities:[],
      country:'',
      community:'',
      sites:[],
      showMap: false,

    };
  },
  computed:{
    

  },
  created () {
    this.$loading(true)
    this.initialize()
    this.$loading(false)
  },
  watch: {
    async country(val){
      this.communities = []
      val = val.split(' ')
      const communities = (await SiteService.communities(val[2])).data
      // console.log(communities)
      communities.forEach(e => this.communities.push(e.community));
    },
    async community(val){
      this.sites = (await SiteService.getByCommunityName(val)).data 
      // console.log(this.sites)
      // const sites = (await SiteService.getByCommunityName(val)).data .slice(1, 2)
      // communities.forEach(element => this.sites.push(element.name));
    }
  },
  methods: {
    async initialize () {

      const countries = (await SiteService.countries()).data
      // console.log(countries)
      countries.forEach(e => this.countries.push(e.country_name+' - '+e.country_code));
      // console.log(this.countries)

      const searchStr = this.$store.state.route.params.searchStr

      if(searchStr == undefined){
        this.sites = (await SiteService.all()).data
      }else{
        this.sites = (await SiteService.searchByName(searchStr)).data
      }
      // console.log(this.sites)

      if(this.sites.length!=0) {
        this.showMap=true
        this.$refs.MapSample.$forceUpdate();
      }else this.showMap=false


      
    },
  },
};
</script>

<style>
.headerClass{
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
}
</style>