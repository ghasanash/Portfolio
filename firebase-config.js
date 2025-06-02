const firebaseConfig = {
  apiKey: "AIzaSyAJQ7NWKaDuJnJ_fBDeyrllv3RmzsRCm0k",
  authDomain: "ghasan-portfolio.firebaseapp.com",
  databaseURL: "https://ghasan-portfolio-default-rtdb.firebaseio.com",
  projectId: "ghasan-portfolio",
  storageBucket: "ghasan-portfolio.firebasestorage.app",
  messagingSenderId: "276513302346",
  appId: "1:276513302346:web:70a46e0c9951a6f7bec3b3",
  measurementId: "G-HX0LXFM3LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);