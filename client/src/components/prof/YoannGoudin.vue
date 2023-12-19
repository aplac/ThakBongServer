<template>
  <v-sheet rounded="lg" class="pa-4 mt-2 mb-2">
    <v-row>
      <v-col
        cols="12"
        xs="3"
        sm="3"
        md="3">
        <img width=100% alt="Yoann Goudin" src="../../assets/prof/yoann.jpg">
        <p>Photo: Yoann Goudin</p>
      </v-col>

      <v-col>
        <h2 style="text-align:right">Yoann Goudin</h2>
        <div style="text-align:right">Orchid ID: <a href="https://orcid.org/0000-0002-0522-8261">0000-0002-0522-8261</a></div>
        <div>&nbsp;</div>

        <h3>Background</h3>
        <div>&nbsp;</div>

        <p>Didactician and anthropologist, Yoann GOUDIN 顧友友 got his MA in Taiwanese Literature at the National Chengkung University and his PhD in language science at the "Institut National des Langues et Civilisations Orientales" in Paris. He is currently an invited researcher at the "Research Center for Asia-Pacific Languages and Cultures" at National University of Kaohsiung. In didactics, his research is on multimodality and plurilingualism. He taught Oriental languages in Paris, Grenoble and Lyon, as well as French, linguistics, anthropology and research methodology in social sciences in Xiamen. He regularly gives workshops to foreign languages teachers on general didactics and the "Silent Way" approach initiated by Caleb GATTEGNO.</p>

        <p>Together with <router-link :to="{name: 'OliverStreiter'}">Oliver Streiter</router-link>, he is
        the co-founder of the <router-link :to="{name: 'history'}">ThakBong Project</router-link>.
        In addition to his extensive <a href="http://thakbong.dyndns.tv/search/entity:anthropology:fieldwork">fieldwork</a> in Taiwan conducted in the
        framework of this project, Yoann Goudin has enriched the ThakBong archive
        with material from China, and Chinese migrants in the US, England, Italy and 
        <a href="/search/paris">France</a>.</p>

        <p>The Thakbong project is an open-ended project, which in its current stage can best be described as a digital endeavor to document, <a href="https://data.depositar.io/en/organization/thakbong" title="ThakBong data in the [depositar] archive">archive</a> and research <a href="/search/entity:epigraphy">epigraphy</a> in the Taiwan Strait and beyond. <router-link :to="{name: 'history'}" title="A short history of the ThakBong project">Read more ...</router-link></p>
        <div>&nbsp;</div>

      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped></style>
