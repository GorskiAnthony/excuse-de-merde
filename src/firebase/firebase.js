import app from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./config";

// init firebase and firestore
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
    const settings = { timestampsInSnapshots: true };
    this.db.settings(settings);
  }
}

const firebase = new Firebase();
export default firebase;
