import firebase from '~/plugins/firebase'

// const db = firebase.firestore()
const auth = firebase.auth()
// const usersRef = db.collection('users')

// ログイン情報の保持
// 新規登録
/**
 * signupからデータを受け取り、firebaseでユーザー登録
 * 登録データを反映させる。
 */

export const state = () => ({
  users: [],
})

export const actions = {
  async signUp(context, newUser) {
    console.log(newUser)
    await auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((user) => {
        console.log('signed in')
      })
      .catch((error) => {
        console.log(error)
        // var errorCode = error.code
        // var errorMessage = error.message
      })
  },
}
