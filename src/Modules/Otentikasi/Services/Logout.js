
export const getLogout = () => {
  sessionStorage.removeItem("currentToken");
  sessionStorage.removeItem("isAuthenticated");
  sessionStorage.setItem('isAuthenticated', false);
  sessionStorage.clear();
  window.location.reload();
}
