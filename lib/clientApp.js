import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {useCollection} from "react-firebase-hooks/firestore";

export const VERSION = "1.0"

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    experimentalForceLongPolling: true, // this line
    useFetchStreams: false, // and this line
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export const getAllProducts = reloadAllProducts()

export function reloadAllProducts() {
    let device = []
    db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const obj = {
                "id": doc.id,
                "name": doc.data()['name'],
                "points": doc.data()['points']
            };
            device.push(obj);
        });
    })
    return device
}

export const getProduct = async id => {
    const product = await db.collection('products').doc(id).get()
    return product.exists
        ? product.data()
        : null
}

export const getProductPoints = async (id) => {
    const product = await getProduct(id)

    return product['points']
}

export const getProductViews = async (id) => {
    const product = await getProduct(id)

    return product['views']
}

export const updateProductViews = async (id) => {
    const product = await db.collection('products').doc(id)
    await getProduct(id).then(result => {
        product.update({
            views: result['views'] + 1
        })
    });

}

export default db;

