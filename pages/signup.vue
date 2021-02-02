<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="5">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスで登録
        </h2>
        <v-row justify="center">
          <v-col sm="8">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="blue accent-2"
              grow
              class="mb-3"
            >
              <v-tab to="/signin">ログイン</v-tab>
              <v-tab to="/signup">アカウント登録</v-tab>
            </v-tabs>
            <v-row>
              <v-col sm="12">
                <v-card flat>
                  <v-card-text class="pa-0">
                    <v-form lazy-validation>
                      <v-text-field
                        label="メールアドレス"
                        required
                        validate-on-blur
                      />
                      <v-text-field
                        ref="register_password"
                        label="パスワード"
                        required
                        validate-on-blur
                      >
                      </v-text-field>
                      <v-text-field label="パスワード（確認）" required />
                      <v-alert v-if="registerErrorMsg" dense text type="error">
                        {{ registerErrorMsg }}
                      </v-alert>
                      <v-btn color="blue darken-3" class="mr-4 white--text">
                        登録
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-divider class="my-8" />
            <v-row>
              <v-col sm="12">
                <h2 class="text-center subtitle-1 font-weight-bold mb-2">
                  その他のアカウントでログイン
                </h2>
              </v-col>
            </v-row>
            <!-- <SocialLogin /> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
    }
  },
}
</script>
