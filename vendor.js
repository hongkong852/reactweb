// vendor.js
// 獲取當前登入用戶資料
function getCurrentVendorData() {
  const user = auth.currentUser;
  if (!user) return Promise.reject(new Error('用戶未登入'));
  
  return db.collection('vendors').doc(user.uid).get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        throw new Error('找不到用戶資料');
      }
    });
}

// 更新用戶資料
function updateVendorProfile(profileData) {
  const user = auth.currentUser;
  if (!user) return Promise.reject(new Error('用戶未登入'));
  
  return db.collection('vendors').doc(user.uid).update(profileData);
}

// 獲取儀表板數據
function getDashboardData() {
  const user = auth.currentUser;
  if (!user) return Promise.reject(new Error('用戶未登入'));
  
  return db.collection('vendors').doc(user.uid).get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        return {
          companyName: data.companyName,
          lastLogin: data.lastLogin,
          orderCount: data.orderCount,
          pendingOrders: data.pendingOrders,
          monthlyRevenue: data.monthlyRevenue
        };
      } else {
        throw new Error('找不到用戶資料');
      }
    });
}
