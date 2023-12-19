<template>
  <div>
    

    <v-sheet rounded="lg" class="pa-4 my-2 mx-4" >
      <div v-html=project.description></div>

      <v-row>
                
        <v-col cols="12" xs="8" md="8" lg="6" xl="4">
          <v-img
            :src=project.img_url
            aspect-ratio="1.4"
            max-height="300px"
          >
          </v-img>
        </v-col>
        <v-col md="4" cols="12">
          <!-- <h4>id: {{site.id}}</h4>
          <h4>type: {{site.type}}</h4> -->
          <p class="mb-0">
            <!-- <span v-for="(value, name) in project" v-if="value">
              <div v-if="name!= 'swipe_left_goto_site' 
                      && name!= 'swipe_right_goto_site'">
                <b>{{ name }}</b>: {{ value }} <br>
              </div>
            </span> -->
          </p>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet v-if="project.sql_map" rounded="lg" class="pa-4 ma-4">
        <TMap ref="projectMap" :sites="sites"></TMap>
    </v-sheet>
    
    <!-- :dense="$vuetify.breakpoint.smAndDown" -->
      <v-sheet v-if="project.sql_timeline" rounded="lg" class="pa-4 my-2 mx-4 overflow-auto" height="480">
        <h2 class="my-2">Timeline</h2>
        <v-timeline dense="1">
          <v-timeline-item
            v-for="(item, index) in objects"
            :key="index"
            color="blue lighten-2"
          >
            <v-card class="elevation-2" width="240px">
              <v-card-title class="text-h5">
                object{{item.id}}{{item.name}} 
                <v-btn
                  icon
                  text
                  :to="{
                    name: 'object',
                    params:{
                      objectId: item.id
                    }
                  }"
                >
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <v-row >
                  <!-- <v-col cols="12" xs="12" md="4" lg="4" xl="4"> -->
                  <v-col cols="12">
                    <v-img
                      v-if="item.url"
                      :src="`https://storage.googleapis.com/${item.url[0]}`"
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
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-sheet>

    
    

  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService'
// import { useRouter } from 'vue-router'
import TMap from '@/components/TMap.vue'

export default {
  components: {
    TMap
  },
  data() {
    return {
      project:{},
      sites:[],
      objects:[],
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
      const projectId = this.$store.state.route.params.projectId
      this.project = (await ProjectService.getById(projectId)).data
      

      if(this.project.sql_map){
        this.sites = (await ProjectService.getByAPI(this.project.sql_map)).data
        if(this.sites.length!=0) {
          this.$refs.projectMap.$forceUpdate();
        }
      }
      // console.log(this.sites)
      if(this.project.sql_timeline){
        this.objects = (await ProjectService.getByAPI(this.project.sql_timeline)).data
        console.log(this.objects)
      }

      
    },
  },
};
</script>
<style>
button.v-btn[disabled] {
  opacity: 0.6;
}
</style>