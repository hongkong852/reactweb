// auth.js
// 註冊新用戶
function registerUser(companyName, email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 註冊成功後創建用戶資料
      return db.collection('vendors').doc(userCredential.user.uid).set({
        companyName: companyName,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
        orderCount: 0,
        pendingOrders: 0,
        monthlyRevenue: 0
      });
    });
}

// 用戶登入
function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 更新最後登入時間
      return db.collection('vendors').doc(userCredential.user.uid).update({
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      });
    });
}

// 用戶登出
function logoutUser() {
  return auth.signOut();
}

// 重置密碼
function resetPassword(email) {
  return auth.sendPasswordResetEmail(email);
}

// 檢查用戶登入狀態
function checkAuthState(callback) {
  return auth.onAuthStateChanged(callback);
}
