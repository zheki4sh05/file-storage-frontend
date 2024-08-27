import { useState, useEffect } from "react";

export const useCookie = (cookieName) => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieName}=`));

    setCookieValue(cookie ? cookie.split("=")[1] : "");
  }, [cookieName]);

  const setCookie = (value, expirationDate) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate}; path=/`;
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return [cookieValue, setCookie, deleteCookie];
};

export const getCookie = (name) => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));
   
    return cookies ? cookies.split("=")[1] : null;
   };

// Usage in a React component
//const [cookieValue, setCookie, deleteCookie] = useCookie("cookieName");