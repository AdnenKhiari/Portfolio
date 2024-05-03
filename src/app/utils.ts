import { collection, doc,getDoc, getDocs,orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import "./config"
import { db, storage } from "./config";

const img_cache : {[key: string]: any} = {}

export const getFromFirestore = async (path: string,ord : string | null = null) => {
  const collectionRef = collection(db, path)
  const qr =  ord ? query(collectionRef,orderBy(ord)) : query(collectionRef)
  const querySnapshot = await getDocs(qr)
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  } as any))
  return data
};

export const getDocFromFirestore = async (path: string) => {
  const docRef = doc(db, path)
  const querySnapshot = await getDoc(docRef)
  return {
    ...querySnapshot.data(),
    id: querySnapshot.id
  } as any
};

export const getPicUrl = async (path: string)=>{
  if(img_cache[path]) return img_cache[path]
  const rr = ref(storage,path)
  const res  = await getDownloadURL(rr)
  img_cache[path] = res
  return res
}