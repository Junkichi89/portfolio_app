<template>
  <v-container>
    <v-row id="top-page" justify="center" align="center">
      <v-col>
        <!-- //TODO:リンクの変更 -->
        <v-btn class="ma-2" outlined color="indigo" nuxt to="/users/_id">
          ユーザー名
        </v-btn>
        <!-- //TODO:clickでユーザー情報を確認できるページ移動を追加 -->
      </v-col>
      <v-col>
        <v-card-text>
          <v-autocomplete
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="white"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="API"
            label="Public APIs"
            placeholder="Start typing to Search"
            prepend-icon="mdi-database-search"
            return-object
          ></v-autocomplete>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card elevation="10" shaped>
      <v-card-title class="text-h4 ma-5">＜今日の格言＞</v-card-title>
      <v-card-subtitle class="text-center text-h5 my-10"
        >今日の格言が表示される</v-card-subtitle
      >
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn class="mx-5" color="blue-grey"
            >いいね！<v-icon>mdi-thumb-up</v-icon></v-btn
          >
          <v-btn class="mx-5"><v-icon>mdi-information-variant</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-card>
    <div class="d-flex">
      <v-btn class="my-12 text-h5 mx-auto" width="250" height="50"
        >格言一覧</v-btn
      >
    </div>

    <v-row>
      <!-- //Todo:最終的には、v-forでリストで表示するようにする -->
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
                ><v-icon>mdi-information-variant</v-icon></v-btn
              >
              <v-btn class="mx-3 d-flex justify-space-between" width="130"
                ><v-icon>mdi-cog-outline</v-icon>設定する</v-btn
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
                ><v-icon>mdi-information-variant</v-icon></v-btn
              >
              <v-btn class="mx-3 d-flex justify-space-between" width="130"
                ><v-icon>mdi-cog-outline</v-icon>設定する</v-btn
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
                ><v-icon>mdi-information-variant</v-icon></v-btn
              >
              <v-btn class="mx-3 d-flex justify-space-between" width="130"
                ><v-icon>mdi-cog-outline</v-icon>設定する</v-btn
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
                ><v-icon>mdi-information-variant</v-icon></v-btn
              >
              <v-btn class="mx-3 d-flex justify-space-between" width="130"
                ><v-icon>mdi-cog-outline</v-icon>設定する</v-btn
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
                ><v-icon>mdi-information-variant</v-icon></v-btn
              >
              <v-btn class="mx-3 d-flex justify-space-between" width="130"
                ><v-icon>mdi-cog-outline</v-icon>設定する</v-btn
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
                ><v-icon>mdi-information-variant</v-icon></v-btn
              >
              <v-btn class="mx-3 d-flex justify-space-between" width="130"
                ><v-icon>mdi-cog-outline</v-icon>設定する</v-btn
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
