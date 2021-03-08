<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="8" md="8">
        <h2 class="text-center subtitle-1 font-weight-bold mb-2">
          メールアドレスで登録
        </h2>
        <v-row justify="center">
          <v-col>
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
                    <v-form lazy-validation v-model="register_valid">
                      <v-text-field
                        v-model="email"
                        label="メールアドレス"
                        :rules="emailRules"
                        required
                        validate-on-blur
                      />
                      <v-text-field
                        ref="register_password"
                        v-model="register_password"
                        label="パスワード"
                        :append-icon="
                          show_registerPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="show_registerPassword ? 'text' : 'password'"
                        :rules="register_passwordRules"
                        required
                        validate-on-blur
                        @click:append="
                          show_registerPassword = !show_registerPassword
                        "
                      >
                        <template #progress>
                          <v-progress-linear
                            :value="score.value"
                            :color="score.color"
                            absolute
                            height="2"
                          />
                        </template>
                      </v-text-field>
                      <v-text-field
                        v-model="register_password_again"
                        label="パスワード（確認）"
                        required
                        :append-icon="
                          show_registerPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="show_registerPassword ? 'text' : 'password'"
                        validate-on-blur
                        :rules="register_passwordAgainRules"
                        @click:append="
                          show_registerPassword = !show_registerPassword
                        "
                      />
                      <v-alert v-if="registerErrorMsg" dense text type="error">
                        {{ registerErrorMsg }}
                      </v-alert>
                      <v-btn
                        color="blue darken-3"
                        class="mr-4 white--text"
                        @click="signUp"
                      >
                        登録
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-divider class="my-8" />
            <v-row>
              <v-col>
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
import zxcvbn from 'zxcvbn'
export default {
  data() {
    return {
      register_valid: true,
      tab: null,
      register_password: '',
      register_password_again: '',
      email: '',
      emailRules: [
        (v) => {
          if (v) {
            return (
              /.+@.+\..+/.test(v) || '有効なメールアドレスを入力してください'
            )
          } else {
            return true
          }
        },
      ],
      register_passwordRules: [
        (v) => !!v || 'パスワードを入力してください',
        (v) =>
          zxcvbn(v).score >= 3 ||
          '大文字・小文字・数字・記号を混ぜた強いパスワードにしてください',
      ],
      register_passwordAgainRules: [
        (v) => {
          if (v) {
            return (
              this.$refs.register_password.value === v ||
              'パスワードと一致しません'
            )
          } else {
            return true
          }
        },
      ],
      show_registerPassword: false,
      registerErrorMsg: 'Sorry',
    }
  },
  computed: {
    progress() {
      return this.score.value
    },
    score() {
      const result = zxcvbn(this.register_password)
      switch (result.score) {
        case 4:
          return {
            color: 'green',
            value: 100,
          }
        case 3:
          return {
            color: 'light-green lighten-1',
            value: 75,
          }
        case 2:
          return {
            color: 'amber accent-2',
            value: 50,
          }
        case 1:
          return {
            color: 'deep-orange lighten-1',
            value: 25,
          }
        default:
          return {
            color: 'red darken-3',
            value: 0,
          }
      }
    },
  },
  methods: {
    signUp() {
      const newUser = {
        email: this.email,
        password: this.register_password,
      }

      this.$store.dispatch('auth/signUp', newUser)
      console.log('successfully signed in', newUser)
    },
  },
}
</script>
