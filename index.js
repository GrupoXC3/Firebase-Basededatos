// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { LoremIpsum } from "lorem-ipsum";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAe9sTBKnteMKoujVO47wyaHHoyF6g69w",
    authDomain: "biblioteca-filandia.firebaseapp.com",
    databaseURL: "https://biblioteca-filandia-default-rtdb.firebaseio.com",
    projectId: "biblioteca-filandia",
    storageBucket: "biblioteca-filandia.appspot.com",
    messagingSenderId: "844976667413",
    appId: "1:844976667413:web:c87c58f0f82647d625c71c",
    measurementId: "G-SW7K1B0PVY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});



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

            let nuevo_libro = doc(db, "libros", `${i}`);
            let titulo = `Titulo libro lorem ${i}`;

            let datos_libro =  {
                id: i,
                descripcion: lorem.generateParagraphs(3),
                titulo: titulo,
                autor: `Autor Lorem Ipsum ${i}`,
                año: Math.floor(Math.random() * (2022 - 2010) + 2010),
                imagen: `https://via.placeholder.com/245x360/000000/FFFFFF/?text=${titulo.split(" ").join("%20")}`,
                categoria: categorias[cat],
                puntaje: Math.floor(Math.random() * (20 - 1) + 1)
            }

            await setDoc(nuevo_libro, datos_libro).then(() => {console.log("Libro Escrito ", i);})
            i++;
        }
    }



    // console.log("Document written with ID: ", nuevo_libro.id);

} catch (e) {
    console.error("Error adding document: ", e);
}