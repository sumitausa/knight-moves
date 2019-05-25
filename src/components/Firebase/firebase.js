import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => {
    return this.auth.signOut();
  };

  doPasswordReset = email => {
    return this.auth.sendPasswordResetEmail(email);
  };

  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password);
  };

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Cafe API ***

  brookline = () => this.db.ref('brookline');

  brooklineContact = () => this.db.ref('brookline/contact');
  brooklineHours = () => this.db.ref('brookline/hours');
  brooklineHowItWorks = () => this.db.ref('brookline/howItWorks');
  brooklineMenu = () => this.db.ref('brookline/menu');
  brooklineSocialLinks = () => this.db.ref('brookline/socialLinks');
  brooklineStory = () => this.db.ref('brookline/story');

  somerville = () => this.db.ref('somerville');
  somervilleContact = () => this.db.ref('somerville/contact');
  somervilleHours = () => this.db.ref('somerville/hours');
  somervilleHowItWorks = () => this.db.ref('somerville/howItWorks');
  somervilleMenu = () => this.db.ref('somerville/menu');
  somervilleSocialLinks = () => this.db.ref('somerville/socialLinks');
  somervilleStory = () => this.db.ref('somerville/story');
}

export default Firebase;
