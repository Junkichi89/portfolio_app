<template>
  <v-container>
    <v-row id="top-page" justify="space-between">
      <v-col cols="8">
        <v-btn class="ma-2 black--text" color="blue"> ユーザー名 </v-btn>
        <!-- //TODO:clickでユーザー情報を確認できるページ移動を追加 -->
      </v-col>
      <v-col cols="3" class="">
        <v-btn class="ma-2 black--text" color="yellow"> 戻る </v-btn>
        <!-- //TODO:clickでユーザー情報を確認できるページ移動を追加 -->
      </v-col>
    </v-row>

    <v-row>
      <!-- //TODO:最終的には、v-forでリストで表示するようにする -->
      <!-- <v-col v-for="card in cards" :key="card.title" :cols="card.flex"> -->
      <v-col cols="6" rounded>
        <v-card class="pa-5">
          <v-title class="ml-10">ここに格言が表示される</v-title>
          <v-row class="mt-10">
            <v-col class="d-flex justify-end">
              <v-btn class="mx-3" color="blue-grey"
                >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn class="mx-3"
                ><v-icon>mdi-information-variant</v-icon>詳細</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" rounded>
        <v-card class="pa-5">
          <v-title class="ml-10">ここに格言が表示される</v-title>
          <v-row class="mt-10">
            <v-col class="d-flex justify-end">
              <v-btn class="mx-3" color="blue-grey"
                >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn class="mx-3"
                ><v-icon>mdi-information-variant</v-icon>詳細</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" rounded>
        <v-card class="pa-5">
          <v-title class="ml-10">ここに格言が表示される</v-title>
          <v-row class="mt-10">
            <v-col class="d-flex justify-end">
              <v-btn class="mx-3" color="blue-grey"
                >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn class="mx-3"
                ><v-icon>mdi-information-variant</v-icon>詳細</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" rounded>
        <v-card class="pa-5">
          <v-title class="ml-10">ここに格言が表示される</v-title>
          <v-row class="mt-10">
            <v-col class="d-flex justify-end">
              <v-btn class="mx-3" color="blue-grey"
                >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn class="mx-3"
                ><v-icon>mdi-information-variant</v-icon>詳細</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" rounded>
        <v-card class="pa-5">
          <v-title class="ml-10">ここに格言が表示される</v-title>
          <v-row class="mt-10">
            <v-col class="d-flex justify-end">
              <v-btn class="mx-3" color="blue-grey"
                >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn class="mx-3"
                ><v-icon>mdi-information-variant</v-icon>詳細</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" rounded>
        <v-card class="pa-5">
          <v-title class="ml-10">ここに格言が表示される</v-title>
          <v-row class="mt-10">
            <v-col class="d-flex justify-end">
              <v-btn class="mx-3" color="blue-grey"
                >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
              >
              <v-btn class="mx-3"
                ><v-icon>mdi-information-variant</v-icon>詳細</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
