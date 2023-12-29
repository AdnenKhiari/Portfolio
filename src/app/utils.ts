import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import "./config"
import { db, storage } from "./config";
export const getFromFirestore = async (path: string) => {

  const collectionRef = collection(db, path)
  const querySnapshot = await getDocs(collectionRef)
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
}))
  return data
};

export const getPicUrl = async (path: string)=>{
 
    const rr = ref(storage,path)
    const res  = await getDownloadURL(rr)
    return res

}