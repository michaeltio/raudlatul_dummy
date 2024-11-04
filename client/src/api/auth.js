export const isUserSignedIn = () => {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  }
  return null;
};
