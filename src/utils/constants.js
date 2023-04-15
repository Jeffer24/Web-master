const SERVER_IP = "localhost:3001";

export const ENV = {
  BASE_PATH: `http://${SERVER_IP}`,
  BASE_API: `http://${SERVER_IP}/api/feign/v1`,
  API_ROUTES: {
    REGISTER: "users",
    LOGIN: "login",
    REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    USER_ME: "user/me",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
