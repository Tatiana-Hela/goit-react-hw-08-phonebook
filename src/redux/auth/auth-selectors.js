// export const selectIsUserLogin = ({ auth }) => auth.isLogin;
// export const selectAuth = ({ auth }) => {
//   const { isLogin, token } = auth;
//   return { isLogin, token };
// };
// export const selectUser = ({ auth }) => auth.user;

export const selectIsLogin = state => state.auth.isLogin;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
