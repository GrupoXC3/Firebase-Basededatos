// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "Obtener de la pagina de firebase",
    authDomain: "Obtener de la pagina de firebase",
    databaseURL: "Obtener de la pagina de firebase",
    projectId: "Obtener de la pagina de firebase",
    storageBucket: "Obtener de la pagina de firebase",
    messagingSenderId: "Obtener de la pagina de firebase",
    appId: "Obtener de la pagina de firebase",
    measurementId: "Obtener de la pagina de firebase"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
let i = 1;
let cat = 0;

const categorias = [
    "Libro Album",
    "Cuento",
    "Novela",
    "Novela grafica",
    "Leyenda y Mito",
    "Historieta",
    "Teatro",
    "Poesía"
]

try {
    for (cat=0;cat <= 6; cat++){
        for (let j=1; j<=5; j++){
            
            let nuevo_libro = doc(db, "libros", `libro ${i}`);
            
            let datos_libro =  {
                titulo: `Titulo Lorem Ipsum ${i}`,
                autor: `Autor Lorem Ipsum ${i}`,
                año: Math.floor(Math.random() * (2022 - 2010) + 2010),
                imagen: "https://picsum.photos/300/450",
                categoria: categorias[cat],
                puntaje: Math.floor(Math.random() * (20 - 10) + 10)
            }

            await setDoc(nuevo_libro, datos_libro).then(() => {console.log("Libro Escrito ", i);})
            i++;
        }
    }


    
    // console.log("Document written with ID: ", nuevo_libro.id);

} catch (e) {
    console.error("Error adding document: ", e);
}