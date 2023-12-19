<template>
  <div @touchstart="touchStartMethod" @touchEndMethod="touchEndMethod">
    <v-sheet rounded="lg" class="pa-4 my-2 mx-4">
      <v-row>
        <v-col class="d-flex align-center">
          <h2 class="flex">OBJ INFO</h2>
          
          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'object',
              params:{
                objectId: object.swipe_left_goto_object
              }
            }"
            @click="this.initialize"
            :disabled="object.swipe_left_goto_object == null"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>

          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'object',
              params:{
                objectId: object.swipe_right_goto_object
              }
            }"
            @click="this.initialize"
            :disabled="object.swipe_right_goto_object == null"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>

          <v-btn
            color="primary"
            fab
            x-small
            class="ml-1"
            :to="{
              name: 'site',
              params:{
                siteId: object.swipe_down_goto_site
              }
            }"
            @click="this.initialize"
            :disabled="object.swipe_down_goto_site == null"
          >
            <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
          </v-btn>
        </v-col>
        
      </v-row>
    </v-sheet>
    <v-sheet rounded="lg" class="pa-4 my-2 mx-4">
      <v-row>

        <v-col md="8" cols="12" max-height="600px">
          <v-carousel 
            height="100%" 
            v-if="this.object.url != 0"
            v-model="model">
            <v-carousel-item
              v-for="(item, i) in this.object.url"
              :key="item.id"
            >
              <v-img
                :src="`https://storage.googleapis.com/${item}`"
                aspect-ratio="1"
                max-height="600px"
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>
          <v-img
            v-else
            aspect-ratio="1"
            class="grey lighten-2">
          </v-img> 
        </v-col>
                
        <!-- <v-col md="8" cols="12" max-height="600px">
          <v-img
            :src="`https://storage.googleapis.com/${object.object_url}`"
            aspect-ratio="1"
            max-height="600px"
          >
          </v-img>
        </v-col> -->


        <v-col md="4" cols="12">
          <p class="mb-0">
            <span v-for="(value, name) in object" v-if="value">
              <div v-if="name!= 'swipe_left_goto_object' 
                      && name!= 'swipe_right_goto_object'
                      && name!= 'swipe_down_goto_site'
                      && name!= 'url'
                      " >
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
import ObjectService from '@/services/ObjectService'
// import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      object:{},
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    };
  },
  created () {
    this.$loading(true)
    this.initialize()
    this.$loading(false)
  },
  watch: {
   
  },
  methods: {
    async initialize () {
      const objectId = this.$store.state.route.params.objectId
      this.object = (await ObjectService.getById(objectId)).data
      // console.log(objectId)
      // console.log(this.object)
    },

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
          this.$router.push({ name: 'object', params: { objectId: this.object.swipe_right_goto_object } })
        } else if (posXStart > posXEnd+XGAP) {
          // console.log("left")
          this.$router.push({ name: 'object', params: { objectId: this.object.swipe_left_goto_object } })
        }
      }
      else{
        if (posYStart+YGAP < posYEnd) {
          // console.log("down")
          this.$router.push({ name: 'site', params: { siteId: this.object.swipe_down_goto_site } })
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

