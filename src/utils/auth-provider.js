import jwtDecode from "jwt-decode";
import { useAuth } from "../Context/auth-context";
import { client } from "./api-client";
import MySwal from "../Components/Swal";

const localStorageKey = "x-auth-token";

const getTokenFromLocalStorage = async () => {
  return window.localStorage.getItem(localStorageKey);
};

// const getUserDetailsFromLocalStorage = async () => {
//   const token = window.localStorage.getItem(localStorageKey);
//   return jwtDecode(token);
// };

const setTokenToLocalStorage = (token) =>
  window.localStorage.setItem(localStorageKey, token);

const signup = ({ data, setDisplay }) => {
  try {
    setDisplay("loading");
    client("signup", { data }).then(({ response: d }) => {
      MySwal.fire(
        "Registration Successful",
        `A verification email has been sent to ${data.email}`,
        "success"
      ).then(() => window.location.assign("/login"));
    });
  } catch (error) {
    setDisplay("idle");
    MySwal.fire("Error.", error, "error");
  }
};

const login = async ({ data, setDisplay, setUser }) => {
  setDisplay("loading");
  try {
    const { data: apiRes, response } = await client("login", { data });
    if (apiRes.success) {
      setTokenToLocalStorage(response.headers.get("x-auth-token"));

      setUser({
        userDetails: jwtDecode(response.headers.get("x-auth-token")),
        token: response.headers.get("x-auth-token"),
      });
      window.location.assign("/dashboard");
      // setDisplay("success");
    }
  } catch (error) {
    setDisplay("idle");
    MySwal.fire("Error.", error.message, "error");
  }
};

async function logout() {
  window.localStorage.removeItem(localStorageKey);
  window.location.assign("/login");
}

export {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  // getUserDetailsFromLocalStorage,
  logout,
  login,
  signup,
};
