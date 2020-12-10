export const setCookie = (name: string, value: string, day: number) => {
  const date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
};

export const getCookie = (cookieName: string) => {
  let cookieValue = null;
  if (document.cookie) {
    const array = document.cookie.split(`${escape(cookieName)}=`);
    if (array.length >= 2) {
      const arraySub = array[1].split(';');
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
};
