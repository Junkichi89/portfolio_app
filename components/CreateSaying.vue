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
        <v-card-title>
          <span>新しい格言の作成</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="content"
                  label="新しい格言*"
                  hint="文章を入力してください"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="author"
                  label="格言に関する人物の名前*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="description"
                  label="詳細な内容*"
                  type="content"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="newSaying"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'CreateSaying',
  data() {
    return {
      author: '',
      content: '',
      description: '',
      dialog: false,
    }
  },
  methods: {
    newSaying() {
      console.log('hello')
      this.dialog = false
    },
  },
}
</script>
