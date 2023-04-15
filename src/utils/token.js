export const hasExpiredToken = (token) => {
  //const { exp } = jwtDecode(token);
  const exp2 = new Date("2023-12-19");
  const currentData = new Date().getTime();

  if (exp2 <= currentData) {
    return true;
  }

  return false;
};
