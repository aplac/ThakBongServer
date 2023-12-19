<template>
  <div >
    <v-row class="pa-2 my-2 mx-2">
      <v-col
        v-for="(item, index) in projects"
        :key="index"
        class="child-flex pa-1"
        cols="12">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            :to="{
              name: 'project',
              params:{
                projectId: item.id
              }
            }
            "
            max-height="400px"

            target="_blank">
            <v-card-text class="">

              <v-row no-gutters>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-img
                  :src="`${item.img_url}`"
                  aspect-ratio="1.7"
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

              </v-col>

              <v-col
                cols="6"
                md="8"
              >
              <div class="ml-2">
                <h2 class="font-weight-black mb-2">{{item.title}}</h2>
                <p class="mb-0">Type:{{item.type}}</p>
                <p class="mb-0">Mod_attributes:{{item.mod_attributes}}</p>
                <!-- <div v-html=item.description></div> -->
              </div>

              </v-col>
              </v-row>

              
              <!-- <v-img
                v-else
                aspect-ratio="1"
                class="grey lighten-2">
              </v-img> -->
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService'

export default {
  data() {
    return {
      countries:[],
      communities:[],
      country:'',
      community:'',
      projects:[],
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
      this.projects = (await ProjectService.all()).data
      // console.log(this.projects)
    },
  },
};
</script>
