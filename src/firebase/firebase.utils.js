import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-aHCEKy5rEVl_TmFX0rA85iPh629auSQ",
    authDomain: "crwn-store-db.firebaseapp.com",
    databaseURL: "https://crwn-store-db.firebaseio.com",
    projectId: "crwn-store-db",
    storageBucket: "crwn-store-db.appspot.com",
    messagingSenderId: "751570330671",
    appId: "1:751570330671:web:c97ea360b9cd2b255cd2da",
    measurementId: "G-7NX59FP20R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userReference = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userReference.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userReference.set(
                {
                    displayName,
                    email, 
                    createdAt,
                    ...additionalData
                }
            );
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userReference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;