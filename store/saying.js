import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
// const auth = firebase.auth()
const usersRef = db.collection('users')

export const state = () => ({
  users: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', usersRef)
  }),
  add: firestoreAction((context, title) => {
    if (title.trim()) {
      usersRef.add({
        name: title,
        done: false,
      })
    }
    console.log('successfully added')
    console.log(title)
  }),
  remove: firestoreAction((context, id) => {
    usersRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, user) => {
    usersRef.doc(user.id).update({
      done: !user.done,
    })
  }),
}
