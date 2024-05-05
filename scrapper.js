// Import the functions needed from the Firebase SDKs
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const fs = require('fs');
require('dotenv').config();

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to fetch data from a Firestore collection and save to a file
const fetchDataAndSave = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const filePath = `./pages_scrapped/${collectionName}.txt`;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Data from ${collectionName} saved to ${filePath}`);
    } catch (error) {
        console.error(`Error fetching data from ${collectionName} or writing to file:`, error);
    }
};

// Function to fetch data from multiple collections and save
const fetchAllDataAndSave = async () => {
    const collections = ['certifications', 'education', 'experiences', 'info', 'projects'];
    for (const collection of collections) {
        await fetchDataAndSave(collection);
    }
};

fetchAllDataAndSave();
