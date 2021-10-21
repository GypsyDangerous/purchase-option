import app from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyD9TavRei1DUnc5LSDoyXsrMGYRestSDY8",
    authDomain: "purchase-option.firebaseapp.com",
    projectId: "purchase-option",
    storageBucket: "purchase-option.appspot.com",
    messagingSenderId: "358103907450",
    appId: "1:358103907450:web:f27b43735c095384668fc3",
    measurementId: "G-23H0B2LNQ3",
};

class Firebase {
    private db: app.firestore.Firestore;
    private _auth: app.auth.Auth;
    private _app: typeof app;

    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        if (typeof window !== "undefined") {
            app.analytics();
        }
        this._auth = app.auth();
        this.db = app.firestore();
        this._app = app;
    }

    get documentId() {
        return app.firestore.FieldPath.documentId();
    }

    get firestore() {
        return this.db;
    }

    get auth() {
        return this._auth;
    }

    get app() {
        return this._app;
    }

    logout() {
        return this.auth.signOut();
    }

    isInitialized() {
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    getCurrentUsername() {
        return this.auth.currentUser?.displayName;
    }

    delete() {
        return this.app.firestore.FieldValue.delete();
    }

    updateDoc(path: string, data: any) {
        return this.db.doc(path).update(data);
    }
}

export default new Firebase();
