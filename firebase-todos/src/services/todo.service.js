import { db } from "../lib/firebase"
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"

export const getTodos = async (uid) => {
  const q = query(collection(db, "todos"), where("uid", "==", uid))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const addTodo = (uid, title) =>
  addDoc(collection(db, "todos"), {
    title,
    completed: false,
    uid,
  })

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data)

export const deleteTodo = id =>
  deleteDoc(doc(db, "todos", id))
