import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  console.log(token);
if(token) {
  return jwtDecode(token);
}
};
