<template>
  <div>
    <v-sheet rounded="lg" class="pa-4 mt-2 mb-2">
      <v-row>
                
        <!-- <v-col md="8" cols="12" max-height="600px">
          <v-carousel 
            height="100%" 
            v-if="this.site.document.length != 0"
            v-model="model">
            <v-carousel-item
              v-for="(item, i) in this.site.document"
              :key="item.id"
            >
              <v-img
                :src="`https://storage.googleapis.com/thakbong/fieldwork/thumbnails/${item.url}`"
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
        </v-col> -->
        <v-col md="4" cols="12">
          <h1>SITE INFORMATION</h1>
          <h4>id: {{site.id}}</h4>
          <h4>type: {{site.type}}</h4>
          <!-- <h4>supersite_id: {{site.supersited}}</h4> -->
          <!-- <h4>geo: </h4>
          <p class="mb-0">
            <span v-for="(value, name)  in this.site.geo">&emsp;<b>{{ name }}</b>: {{ value }} <br></span>
          </p>
          <h4>proc_use_for_print: {{this.site.proc_use_for_print}}</h4>
          <h4>proc_modified: {{this.site.proc_modified}}</h4> -->
          <!-- <p> event:[eventSchema]</p>
          <p>object: [objectSchema]</p> -->
        </v-col>
      </v-row>
    </v-sheet>
    
    <!-- <v-sheet rounded="lg" class="pa-4 mt-2 mb-2 ">
      <h1>OBJECTS</h1>
    </v-sheet> -->

    <!-- <v-row class="pa-2">
      <v-col  v-for="(item, i) in site.object"
        v-if="item!=null"
        :key="item._id"
        class="child-flex pa-1"
        cols="6"
        xs="6"
        sm="4"
        md="3">
        <v-card >
          <v-card-text>
            <v-img
            v-if="item.document.length != 0"
            :src="`https://storage.googleapis.com/thakbong/fieldwork/${item.document[0].url}`"
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
              class="grey lighten-2">
            </v-img>
            <h4>_id: {{item._id}}</h4>
            <h4>type: {{item.type}}</h4>
            <h4>geo: </h4>
            <p class="mb-0">
              <span v-for="(value, name) in item.geo">&emsp;<b>{{ name }}</b>: {{ value }} <br></span>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    
      <!-- <v-sheet 
      v-for="(item, i) in this.site.event"
      :key="item._id"
      rounded="lg" 
      class="pa-4 mt-2 mb-2">
      <v-row>
        <v-col md="9" cols="12">
          <v-carousel  xs="12"
            v-if="item.length != 0"
            height="100%" >
            <v-carousel-item
              v-for="(img, i) in item.document"
              :key="img._id"
            >
              <v-img
                :src="`https://storage.googleapis.com/thakbong/fieldwork/${img.url}`"
                aspect-ratio="1"
                max-height="300px"
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
        <v-col md="3" cols="12" >
          <h1>EVENT</h1>
          <h4>_id: {{item._id}}</h4>
          <h4>type: {{item.type}}</h4>
          <h4>time: </h4>
          <p class="mb-0">
            <span v-for="(value, name) in item.time">&emsp;<b>{{ name }}</b>: {{ value }} <br></span>
          </p>
          <h4>agent: </h4>
          <p class="mb-0">
            <span v-for="agent in item.agent">&emsp;{{ agent.agent_id }}: {{ agent.alias }}<br></span>
          </p>
        </v-col>
      </v-row>
      </v-sheet> -->
    

  </div>
</template>

<script>
import SiteService from '@/services/SiteService'

export default {
  data() {
    return {
      site:{},
      event:{},
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
  created () {
    this.$loading(true)
    this.initialize()
    this.$loading(false)
  },
  watch: {
   
  },
  methods: {
    async initialize () {
      const siteId = this.$store.state.route.params.siteId
      this.site = (await SiteService.getById(siteId)).data
      console.log(this.site)
    },
  },
};
</script>