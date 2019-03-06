const logout = () => {
  localStorage.removeItem("token");
  localStorage.setItem("logout", "show");
  window.location.href = "/";
};
export default logout;
