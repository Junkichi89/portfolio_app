<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <!-- //TODO:あとで消す→新規作成ボタンで開けるように設定する -->
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-row>
            <v-col>
              <v-card color="primary">
                <v-card-title>格言が入ります。格言が入ります。</v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card color="primary">
                <v-card-subtitle>格言を言った人</v-card-subtitle>
                <v-card-title>アプリ開発者</v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card color="primary">
                <v-card-title>格言の説明や意味</v-card-title>
                <v-card-subtitle
                  >この格言は、とてもいろんな人に影響を与えました。
                  これからの時代を生き抜く人には必要になる言葉でしょう。
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DetailSaying',
  data: () => ({
    dialog: false,
  }),
}
</script>
