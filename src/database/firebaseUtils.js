import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app);

export const getFirebaseData = () => {
    const starCountRef = ref(db, "categories");

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                resolve(data); // 
            }, 
            (error) => {
                reject(error); 
            });
        } catch (error) {
            reject(error); 
        }
    });
};
