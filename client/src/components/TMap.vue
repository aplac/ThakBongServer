<template>
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
</template>
  

  <script>
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  // import SiteService from '@/services/SiteService'
  // import { useRouter } from 'vue-router'
  
  export default {
    props: ['sites'],
    components: {
      LMap,
      LTileLayer,
      LMarker,
    },
  
    data() {
      return {
        sites:[],


        // map
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',        
        // zoom: 13,
        // center: [22.612961, 120.304167],
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
    beforeCreate	(){

    },
    created () {
      this.$loading(true)
      this.initialize()
      this.$loading(false)
    },
    watch: {
     
    },
    methods: {
      initialize(){
        // filter site.lat == null and site.long == null
        this.sites = this.sites.filter(site => site.lat || site.long)
        // console.log(this.sites)
      }
    },
  };
  </script>
  <style>
  button.v-btn[disabled] {
    opacity: 0.6;
  }
  </style>