import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const usersRef = db.collection('users')

// 新規登録
/**
 * signupからデータを受け取り、firebaseでユーザー登録
 * 登録データを反映させる。
 * データの更新はできている
 */

export const state = () => ({
  users: [],
})

export const mutations = {}

export const actions = {
  async signUp({ commit, dispatch }, newUser) {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
      const user = await firebase.auth().currentUser
      await user.updateProfile({
        displayName: newUser.nickname,
      })
      await usersRef.doc(user.uid).set({
        nickname: user.displayName,
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
    // var errorCode = error.code
    // var errorMessage = error.message
  },
  async signInWithEmail(context, signInUser) {
    console.log(signInUser)
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(signInUser.email, signInUser.password)
      console.log('signed in', user)
      this.$router.push('/')
    } catch (error) {
      console.log(error)
    }
    // var errorCode = error.code
    // var errorMessage = error.message
  },

  getUser(commit, user) {
    console.log(user)
  },
}

export const getters = {}
