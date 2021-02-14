<template>
  <v-container>
    <v-row id="top-page" justify="center" align="center">
      <v-col>
        <v-btn class="ma-2 mb-5" outlined color="indigo"> ユーザー名 </v-btn>
        <!-- //Todo:clickでユーザー情報を確認できるページ移動を追加 -->
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn class="ma-2 black--text" color="yellow"> 戻る </v-btn>
        <!-- //Todo:clickでユーザー情報を確認できるページ移動を追加 -->
      </v-col>
    </v-row>
    <v-card elevation="10" shaped class="mb-10">
      <v-card-subtitle class="text-right mr-5">格言を言った人</v-card-subtitle>
      <v-card-title class="justify-center text-h5 pt-10">
        格言が表示される
      </v-card-title>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn class="mx-5" color="blue-grey"
            >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto pa-6 text-h4 text-center" elevation="10">
          格言の意味や説明
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text class="text-h5 px-10 py-15">
            この格言は、アスリートに向けたメッセージです。
            特に、若手アスリートに大きな影響を与えてきた格言です。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn class="ma-2 black--text" color="red"> 編集 </v-btn>
        <!-- //TODO:clickでユーザー情報を確認できるページ移動を追加 -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
