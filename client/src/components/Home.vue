<template>
  <div>
    <v-sheet rounded="lg" class="pa-4 ma-4">

    <div class="white--text primary text-center rounded pa-4">
      <h1>DRGPA2023</h1>
      <h2>
        The 6th International Conference on Documenting and Researching
        Gravesites in Pacific Asia: Academia and citizen science, theory and
        practice, publication and conservation
      </h2>
      <h2>
        第六屆研究記錄亞太墓地研討會: 學術界和公民科學、理論和實踐、出版和保護
      </h2>
      <h2>
        第6回研究文書に関するアジア太平洋墓地シンポジウム：
        学術と市民科学、理論と実践、出版と保存
      </h2>
    </div>

    <div class="ma-4">
      <v-row>
        <v-col 
          cols="12"
          xs="8"
          sm="8"
          md="8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7359.624525543156!2d120.2815671!3d22.7352183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0f10de5eb52d%3A0x2ca6f9f624c1249a!2z5Lq65paH56S-5pyD56eR5a246Zmi!5e0!3m2!1szh-TW!2stw!4v1682172075351!5m2!1szh-TW!2stw"
            width="100%"
            height="400"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
        <v-col 
          cols="12"
          xs="4"
          sm="4"
          md="4" 
          class="primary--text">
          <div class="ma-2">
            <h2>National University of Kaohsiung</h2>
            <h3>College of Humanities and Social Sciences</h3>
            <h4>2023, November 10th and 11th</h4>
          </div>
          <div class="ma-2">
            <h2>國立高雄大學</h2>
            <h3>人文社會科學院</h3>
            <h4>日期: 2023年11月10日至11日</h4>
          </div>
          <div class="ma-2">
            <h2>国立高雄大学</h2>
            <h3>人文社会科学部</h3>
            <h4>日付: 2023年11月10日至11日</h4>
          </div>
          <div class="my-2">
          </div>
        </v-col>
      </v-row>
    </div>

    <v-tabs
      v-model="tab"
      align-with-title
    >
      <v-tabs-slider color="primary"></v-tabs-slider>
      <v-tab>Chinese</v-tab>
      <v-tab>English</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="mx-3">
      <v-tab-item key="Chinese">
        <v-card flat>
          <v-card-text class="font-weight-black" > 
            <div class="my-4">
              <h3 class="my-2">
                繼前五屆研究記錄台灣/亞太墓地研討會(DRGT2011、DRGT2015、DRGT2017、DRGPA2019 和 DRPGA2021)的成果累積，亞太語言文化研究中心 (APLAC) 將於 2023 年11 月 10 -11日假國立高雄大學舉辦第六屆研究記錄亞太墓地研討會。
              </h3>
            </div>

            <div class="my-4">
              <h2 class="my-2 primary--text">
                徵稿主題
              </h2>
              本會議敬邀徵集以下題目之論文：
              <ul>
                <li>
                  地方歷史 (台澎金馬，華南及東南亞，東亞，南亞等)
                  <ul>
                    <li>地方及其風俗的起源與轉變</li>
                    <li>地景和空間的轉變</li>
                    <li>家譜研究</li>
                    <li>海內外華人社群網絡</li>
                    <li>本土人物，藝術家、工匠與學者</li>
                  </ul>
                </li>
                <li>
                  宗教、宇宙觀與喪葬習俗
                  <ul>
                    <li>生死與來世之概念</li>
                    <li>從信仰角度與宇宙觀理解空間的概念</li>
                    <li>信仰及宇宙觀與現實地景的互動互塑</li>
                    <li>風水地理</li>
                    <li>碑銘與喪葬習俗</li>
                    <li>地方神祉，地方建築，地方材料及工藝</li>
                    <li>民間傳統藝術美學</li>
                    <li>文學與電影裡的地方風俗</li>
                    <li>信仰與死亡相關知識及記錄的數位化</li>
                  </ul>
                </li>
                <li>
                  地方政治與墓葬地景管理
                  <ul>
                    <li>國家與民族</li>
                    <li>國家或文化身份認同</li>
                    <li>
                      政府政策引導的宗教/墓葬風俗易變；政府墓葬用地規劃及地景管理
                    </li>
                    <li>墓地管理與保存</li>
                  </ul>
                </li>

                <li>
                  文化遺產場域
                  <ul>
                    <li>功能與重要性</li>
                    <li>消逝的危機</li>
                    <li>保存與管理</li>
                    <li>地方文化遺產的原地保存</li>
                    <li>地景管理</li>
                  </ul>
                </li>
                <li>
                  理論發展研究
                  <ul>
                    <li>文化理論</li>
                    <li>詮釋理論</li>
                    <li>構連局內觀(emic)與局外觀(etic)</li>
                  </ul>
                </li>
                <li>
                  研究方法
                  <ul>
                    <li>地理資訊系統</li>
                    <li>分析技術與工具</li>
                    <li>檔案典藏</li>
                    <li>研究網絡</li>
                    <li>田野調查的技術</li>
                    <li>紀錄與保存文化遺產的科技</li>
                    <li>數位資源的保存</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="my-4">
              <h2 class="my-2 primary--text">
                論文提交
              </h2>
              <ul>
                <li><b>投稿: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-RqJGXV2CmjJ3zEpwOIOkbRRmLGFTINACnHa2hjRPu06xvA/viewform?pli=1&fbclid=IwAR1MfPVBPK-JLIbra3pPmEG_Fug6d1ln7Acd4UjZNetiQZjTXjKg196OqH0">投稿連結</a></b></li>
                <li><b>論文提交截止日期：9月9日</b></li>
                <li><b>最終論文提交截止日期：10月10日</b></li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="English">
        <v-card flat>
          <v-card-text class="font-weight-black" >
            <div class="my-4">
              <h3 class="my-3">
                After the successful conferences on tombs and burial sites, DRGT2011,
                DRGT2015, DRGT2017, DRGPA2019 and DRPGA2021, APLAC, the Research
                Center for Asia-Pacific Languages and Cultures, will organize the 6th
                Internation Conference on Documenting and Researching Graveysites in
                Pacific Asia on November 10th and 11th in Kaohsiung at National
                University of Kaohsiung.
              </h3>
            </div>
            <div class="my-4">
              <h2 class="my-3 primary--text">
                Topic of Insterest
              </h2>
              Papers can address, but are not necessarily limited to, one of the
              following topics:
              
              <ul>
                <li>
                  Local history (Taiwan, Penghu, Kinmen, Mazu, East Asia, South
                  China coasts, Southeast Asia, South Asia)
                  <ul>
                    <li>the genesis and transformation of sites and practices</li>
                    <li>the transformation of landscapes and space</li>
                    <li>genealogical research</li>
                    <li>Chinese diaspora and networks</li>
                    <li>local residents, artists, artisans and scholars</li>
                  </ul>
                </li>
                <li>
                  Studies of local religious, cosmological and funerary practices
                  <ul>
                    <li>concepts of life, death and afterlife</li>
                    <li>spiritual and cosmological conceptions of space</li>
                    <li>
                      interactions between spiritual and cosmological beliefs and
                      landscapes
                    </li>
                    <li>Feng Shui; geomancy</li>
                    <li>epigraphic and funerary practices</li>
                    <li>
                      local deities, architecture, materials, and craftsmanship
                    </li>
                    <li>the arts and aesthetics of folk traditions</li>
                    <li>local practices in literature and movies</li>
                    <li>digitalization of religion and death</li>
                  </ul>
                </li>
                <li>
                  Local politics and burial landscape management
                  <ul>
                    <li>nation, state and ethnicity</li>
                    <li>national or cultural identity recognition</li>
                    <li>
                      governmental induced transformation of burial and religious
                      practices
                    </li>
                    <li>management and preservation of burial sites</li>
                  </ul>
                </li>
                <li>
                  Heritage sites
                  <ul>
                    <li>function and importance</li>
                    <li>endangerment</li>
                    <li>preservation and management</li>
                    <li>in situ preservation of cultural heritage</li>
                    <li>local landscape management</li>
                  </ul>
                </li>
                <li>
                  Theoretical studies
                  <ul>
                    <li>theories of culture</li>
                    <li>theories of interpretation</li>
                    <li>bridging the emic and the etic</li>
                  </ul>
                </li>
                <li>
                  Methodological studies
                  <ul>
                    <li>GPS and geography</li>
                    <li>analysis techniques and tools</li>
                    <li>archiving</li>
                    <li>research networking</li>
                    <li>fieldwork techniques</li>
                    <li>
                      technologies for cultural heritage documentation and
                      preservation
                    </li>
                    <li>the preservation of digital resources</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="my-4">
              <h2 class="my-3 primary--text">
                Paper Submission
              </h2>
              <ul>
                <li><b>Submission: <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-RqJGXV2CmjJ3zEpwOIOkbRRmLGFTINACnHa2hjRPu06xvA/viewform?pli=1&fbclid=IwAR1MfPVBPK-JLIbra3pPmEG_Fug6d1ln7Acd4UjZNetiQZjTXjKg196OqH0">Submission Link</a></b></li>
                <li><b>Paper Submission Due: September 9th</b></li>
                <li><b>Final Paper Submission: Oktober 10th</b></li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <div class="pa-4">
      <h2 class="my-3 primary--text">
        Reviewing Process, Program Committee
      </h2>
      <div>
        <h4>The Reviewing Process</h4>
        <h4>The Program Committee</h4>
        <ul>
          <li><a target="academiaSinica" href="https://www.iis.sinica.edu.tw/pages/trc/index_en.html">莊庭瑞 Tyng-Ruey Chuang, Academia Sinica</a></li>
          <li><router-link :to="{name: 'YoannGoudin'}">顧友友 Yoann Goudin, Research Center for Asia-Pacific Languages and Cultures</router-link></li>
          <li><a href="https://www.facebook.com/profile.php?id=100057301725286">李燕萍 Li Yen-Ping 「地上台南」南山公墓保存團體召集人 Coordinator of Above-Ground Tainan </a></li>
          <li><a href="https://research.flw.ugent.be/en/massimiliano.portoghese">潘德啟  Massimiliano Portoghese, Ghent Centre for Buddhist Studies</a></li>
          <li><a href="https://research.flw.ugent.be/nl/anna.sokolova">Anna Sokolova, Ghent Centre for Buddhist Studies</a></li>
          <li><router-link :to="{name: 'OliverStreiter'}">奧利華 Oliver Streiter, Research Center for Asia-Pacific Languages and Cultures</router-link></li>
          <li><router-link :to="{name: 'YaQingZhan'}">詹雅晴 Ya-Qing Zhan, Research Center for Asia-Pacific Languages and Cultures</router-link></li>
        </ul>
        <h4 class="inv">The Organization Committee</h4>
        <ul>
          <li><a>奧利華 Oliver Streiter, Research Center for Asia-Pacific Languages and Cultures</a></li>
          <li><a>傅鈺雯 Fu Yu-wen, Research Center for Asia-Pacific Languages and Cultures</a></li>
          <li><a>王清棟 Wang Qingdong, Research Center for Asia-Pacific Languages and Cultures</a></li>
        </ul>
      </div>
    </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
