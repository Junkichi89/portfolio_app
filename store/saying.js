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
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      usersRef.add({
        name: '',
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
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
