// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, get, ref} from "firebase/database";
import {useEffect, useState} from "react";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useChaptersFromFirebase = () => {
    const [chapters, setChapters] = useState(null);

    useEffect(() => {
        get(ref(database, 'chapters')).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setChapters(data);
            }
        });
    }, []);
    return chapters;
};