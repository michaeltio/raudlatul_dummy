export const isUserSignedIn = () => {
  const token = localStorage.getItem("token");
  return token;
};
