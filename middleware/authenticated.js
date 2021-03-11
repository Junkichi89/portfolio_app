import firebase from '~/plugins/firebase'

const auth = firebase.auth()
export default ({ store }) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      store.dispatch('auth/getUser', user)
    } else {
      console.log('No one Loggied in!')
    }
  })
}

/*
 *ログインしているか、どうか確認して、ログインしていたら、
 ユーザー情報をmutationへ飛ばして、stateに入れるようにする。
 */
