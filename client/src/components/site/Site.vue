<template>
  <div @touchstart="touchStartMethod" @touchEndMethod="touchEndMethod">
    <v-sheet rounded="lg" class="pa-4 my-2 mx-4" >
      <v-row>
        <v-col class="d-flex align-center">
          <h2 class="flex">SITE INFO</h2>
          
          <v-btn
            :disabled="site.swipe_left_goto_site == null"
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="site.swipe_left_goto_site ? {
              name: 'site',
              params:{
                siteId: site.swipe_left_goto_site
              }
            } : undefined"
            @click="this.initialize"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn
            :disabled="site.swipe_right_goto_site == null"
            color="primary"
            fab
            x-small
            class="ml-1"
            :to=" site.swipe_right_goto_site ? {
              name: 'site',
              params:{
                siteId: site.swipe_right_goto_site
              }
            } : undefined"
            @click="this.initialize"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          
          <v-btn
            :disabled="site.swipe_down_goto_site == null || site.swipe_down_goto_site == site.id"
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="site.swipe_down_goto_site ? {
              name: 'site',
              params:{
                siteId: site.swipe_down_goto_site
              }
            } : undefined"
            @click="this.initialize"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>

          <v-btn
            :disabled="site.swipe_up_goto_site == null "
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="site.swipe_up_goto_site ? {
              name: 'site',
              params:{
                siteId: site.swipe_up_goto_site
              }
            } : undefined"
            @click="this.initialize"
          >
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>

          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="site.click_goto_object ? {
              name: 'object',
              params:{
                objectId: site.click_goto_object
              }
            }: undefined"
            @click="this.initialize"
            :disabled="site.click_goto_object == null"
          >
            <v-icon>mdi-arrow-down-bold-box-outline</v-icon>
          </v-btn>
        </v-col>
        
      </v-row>
    </v-sheet>
    
    <v-sheet v-if="showMap" rounded="lg" class="pa-4 ma-4">
      <v-row>

      <l-map
        ref="myMap"
        :bounds="bounds"
        :max-bounds="bounds"
        :center="LatLng"
        :options="options"
        style="height: 300px; z-index: 1;">
        <!-- 載入圖資 -->
        <l-tile-layer :url="url" :attribution="attribution" />
        
        <!-- 創建標記點 -->
        <l-marker :lat-lng="[item.lat,item.long]" v-for="item in sites" :key="item.id">
          <!-- 標記點樣式判斷 -->
          <l-icon
            :icon-url="icon.type.blue"
            :shadow-url="icon.shadowUrl"
            :icon-size="icon.iconSize"
            :icon-anchor="icon.iconAnchor"
            :popup-anchor="icon.popupAnchor"
            :shadow-size="icon.shadowSize"
          />

          <!-- 彈出視窗 -->
          <l-popup>
            <div class="d-flex align-center" >
            {{ item.name }}
            <v-btn
              class="ml-1"
              color="black"
              icon
              x-small
              :to="item.id? {
                name: 'site',
                params:{
                  siteId: item.id
                }
              }: undefined"
            >
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
          </l-popup>
        </l-marker>
      </l-map>
     
      </v-row>
    </v-sheet>

    <v-sheet rounded="lg" class="pa-4 my-2 mx-4">
      <v-row>
                
        <v-col md="8" cols="12" min-height="300px" max-height="600px">
          <v-img
            v-if="site.site_url"
            :src="`https://storage.googleapis.com/${site.site_url}`"
            aspect-ratio="1"
            height="400px"
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
            height="400px"
            aspect-ratio="1"
            class="grey lighten-2 d-flex align-center justify-center text-center">
            <p class="text-caption text-center">Have no image found</p>
          </v-img>
        </v-col>
        <v-col md="4" cols="12">
          <!-- <h4>id: {{site.id}}</h4>
          <h4>type: {{site.type}}</h4> -->
          <p class="mb-0">
            <span v-for="(value, name) in site" v-if="value">
              <div v-if="name!= 'swipe_left_goto_site' 
                      && name!= 'swipe_right_goto_site'
                      && name!= 'swipe_down_goto_site'
                      && name!= 'swipe_up_goto_site'
                      && name!= 'click_goto_object'
                      && name!= 'site_url'">
                <b>{{ name }}</b>: {{ value }} <br>
              </div>
            </span>
          </p>
        </v-col>
      </v-row>
    </v-sheet>
    

  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import SiteService from '@/services/SiteService'
// import { useRouter } from 'vue-router'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },

  data() {
    return {
      // map
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      // others
      countries:[],
      communities:[],
      country:'',
      community:'',
      sites:[],
      
      // zoom: 13,
      // center: [22.612961, 120.304167],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: false
      },
      icon: {
        type: {
          black:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
          blue:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
        },
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      },
      showMap: false,

      site:{},
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    };
  },

  computed:{
    LatLng(){
      let latitude = 0;
      let longitude = 0;
      let n = this.sites.length;
      
      if(n==0){
        return [0,0]
      }

      for (let site of this.sites) {
          latitude += site.lat
          longitude += site.long
      }
      return [latitude/n, longitude/n];
    },
    bounds(){
      let latlngs = this.sites.map(site => [site.lat, site.long])
      let latlngBounds = L.latLngBounds(latlngs)
      // console.log(latlngs)
      // console.log(latlngBounds)

      return [
        [latlngBounds._northEast.lat, latlngBounds._northEast.lng],
        [latlngBounds._southWest.lat, latlngBounds._southWest.lng]
      ]
    }

  },

  created () {
    this.$loading(true)
    this.initialize()
    this.$loading(false)
  },
  watch: {
   
  },
  methods: {

    // 
    async initialize () {
      const siteId = this.$store.state.route.params.siteId
      this.site = (await SiteService.getById(siteId)).data
      this.sites = (await SiteService.getByFId(siteId)).data

      if(this.sites.length!=0) this.showMap=true
      else this.showMap=false

      // console.log(this.site)

    },

    // scroll effect
    touchStartMethod (touchEvent) {
      if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      const posYStart = touchEvent.changedTouches[0].clientY;
      addEventListener('touchend', (touchEvent) => this.touchEndMethod(touchEvent, posXStart, posYStart), {once: true});
    },

    touchEndMethod (touchEvent, posXStart, posYStart) {
      if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      const posYEnd = touchEvent.changedTouches[0].clientY;
      const XGAP = 65
      const YGAP = 360

      // right and left
      if(Math.abs(posXStart-posXEnd) > Math.abs(posYStart-posYEnd)){
        if (posXStart+XGAP < posXEnd) {
          // console.log("right")
          this.$router.push({ name: 'site', params: { siteId: this.site.swipe_right_goto_site } })
        } else if (posXStart > posXEnd+XGAP) {
          // console.log("left")
          this.$router.push({ name: 'site', params: { siteId: this.site.swipe_left_goto_site } })
        }
      }
      else{
        if (posYStart+YGAP < posYEnd) {
          // console.log("down")
          this.$router.push({ name: 'site', params: { siteId: this.site.swipe_down_goto_site } })
        } else if (posYStart > posYEnd+YGAP) {
          // console.log("up")
          this.$router.push({ name: 'site', params: { siteId: this.site.swipe_up_goto_site } })
        }
      }
      
      this.initialize()
    }
    
  },
};
</script>
<style>
button.v-btn[disabled] {
  opacity: 0.6;
}
</style>