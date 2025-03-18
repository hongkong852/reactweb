// firebase-config.js
// Firebase 配置
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

// 導出方便使用的 Firebase 服務
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// 設定 Firestore 語言
db.settings({ timestampsInSnapshots: true });
