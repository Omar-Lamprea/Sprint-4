import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//métodos:
import { query, addDoc, setDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyC7WRbMMBb_w-eAOCxQRr-Dj3XTlS4Hmgs",
  authDomain: "cleancode-8bc7d.firebaseapp.com",
  projectId: "cleancode-8bc7d",
  storageBucket: "cleancode-8bc7d.appspot.com",
  messagingSenderId: "850754643948",
  appId: "1:850754643948:web:596d8d793cb3d4c78f02c9",
  measurementId: "G-97SC9T3N3N"
};

  // Initialize Firebase
initializeApp(firebaseConfig);

  // Create a root reference

  //initialize firestore database 
  const database = getFirestore()

  //initialize firebase Auth
  // const auth = getAuth()


  //agregar documento: recibe nombre, objeto data y id
  export const agregarDocumento = async(nombreColeccion, data, id) =>{
    try{
      const response = await setDoc(doc(database, nombreColeccion, id),data)
      // console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  //leer base de datos: recibe nombre
  export const consultarDb = async(nombreColeccion) =>{
    try{
      const response = await getDocs(query(collection(database, nombreColeccion)))
      const coleccionDatos = response.docs.map((documento) =>{

        const documentoTemporal = {
          id: documento.id,
          ...documento.data()
        }
        return documentoTemporal
      })
      return coleccionDatos
    }catch(error){
      console.log(error);
    }
  }


  //consultar un solo documento: recibe nombre y id de la colección
  export const consultarDocumentoDb = async(nombreColeccion, id) =>{
    try{
      const response = await getDoc(doc(database, nombreColeccion, id))
      const documentoTemporal = {
        id: response.id,
        ...response.data()
      }
      return documentoTemporal
    }catch(error){
      console.log(error);
    }
  }

  //actualizar un documento: recibe nombre, id colección y objeto data
  export const actualizarDocumentoDb = async(nombreColeccion, id, data) =>{
    try{
      const response = await updateDoc(doc(database, nombreColeccion, id), data)
      return response
    }catch(error){
      console.log(error);
    }
  }


  //eliminar documento: recibe nombre y id a eliminar
  export const eliminarDocumentoDb = async(nombreColeccion, id) =>{
    try{
      const response = await deleteDoc(doc(database, nombreColeccion, id))
      return response
    }catch(error){
      console.log(error);
    }
  }