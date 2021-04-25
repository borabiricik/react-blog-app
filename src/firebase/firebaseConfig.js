import firebase from "firebase/app"
import "firebase/database"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCW7w23dt5xUz4wRzZ2I9CY5moL--DLfnY",
    authDomain: "blog-app-18f47.firebaseapp.com",
    projectId: "blog-app-18f47",
    storageBucket: "blog-app-18f47.appspot.com",
    messagingSenderId: "54183032753",
    appId: "1:54183032753:web:b084e7151115bc84f56f90"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database();


database.ref("products").on("child_removed",(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
})



// database.ref("products").on("value", (snapshot) => {
//     const products = [];

//     snapshot.forEach((product) => {
//         products.push({
//             id: product.key,
//             ...product.val()
//         })
//     })

//     console.log(products);
// })









// database.ref("products")
//     .once("value")
//     .then((snapshot) => {
//         const products = [];

//         snapshot.forEach((product) => {
//             products.push({
//                 id: product.key,
//                 ...product.val()
//             })


//         });
//         console.log(products);
//     })





// database.ref("products").push({
//     name: "Samsung s9",
//     price: 8000,
//     isActive: true
// })

// database.ref("products").push({
//     name:"Samsung s9+",
//     price:8500,
//     isActive:true
// })

// database.ref("products").push({
//     name:"Samsung s10+",
//     price:9000,
//     isActive:true
// })









// const database = firebase.database();

// const blogs = {
//     101:{
//         id:1,
//         title:"blog title 1"
//     },
//     102:{
//         id:2,
//         title:"blog title 2"
//     },
// }

// const users = {
//     "borabiricik" : {
//         name:"bora",
//         surname:"biricik"
//     },
//     "ecebiricik" : {
//         name:"ece",
//         surname:"biricik"
//     },
// }

// database.ref().set({
//     blogs,
//     users
// })

// database.ref().once("value").then((snapshot)=>{
//     console.log(snapshot.val());
// })

// database.ref("blogs/-MZ7wxRPJrllVA_0XT9z")
// .set({
//     id:4,
//     title:"updated title"
// })

// database.ref("blogs").push({
//     id:3,
//     title:"blog title 3",

// })










































// database.ref("author")
//     .update({name:"Bora"})
//     .then(()=>{
//         console.log("update successful");
//     })
//     .catch(()=>{
//         console.log("update failed");
//     })

// tagRef.remove()
// .then(()=>{
//     alert("tüm tagler başarıyla kaldırıldı")
// })
// .catch((e)=>{
//     alert("Tag'e erişirken hata ",e)
// })

// database.ref().set({
//     title: "blog title",
//     description: "description ",
//     author: {
//         name: "Bora",
//         surname: "Biricik"
//     }
// })
//     .then(() => {
//         console.log("kayıt başarılı");
//     })
//     .catch((e) => {
//         alert(`hata: ${e}`);
//     })


// database.ref()
//     .on("value", (snapshot) => {
//         const blog = snapshot.val()
//         console.log(blog);
//     })








// database.ref("author/name")
//     .once("value")
//     .then((snapshot) => {
//         const blog = snapshot.val()
//         console.log(blog);
//     })
//     .catch((e) => {
//         console.log(e);
//     })


















//     console.log("uygulama çalıştı");

// database.ref().set("yeni kayit")

// database.ref().set({
//     title: "blog title 1",

// })

// database.ref("title").set("new title")
// database.ref("description").set("new desc")
// database.ref("author").set({
//     name:"Esra",
//     surname: "Mülkpınar"
// })

// database.ref("author/name").set("Esra")
// database.ref("tags").set(["react","javascript","angular"])