import Cookies, { type CookieSetOptions } from "universal-cookie";

export const setCookie = (
  key: string,
  val: string,
  options?: CookieSetOptions
) => {
  const cookie = new Cookies();

  cookie.set(key, val, { path: "/", ...options });
};

export const getCookie = (key: string) => {
  const cookie = new Cookies();

  return cookie.get(key);
};

export const removeCookie = (key: string) => {
  const cookie = new Cookies();

  cookie.remove(key, {
    path: "/",
  });
};

export const clearCookies = () => {
  const cookies = new Cookies();

  Object.keys(cookies.getAll()).forEach((cookie) => {
    if (!["theme.mode", "theme", "cookie_consent"].includes(cookie)) {
      cookies.remove(cookie, {
        path: "/",
      });
    }
  });
};
