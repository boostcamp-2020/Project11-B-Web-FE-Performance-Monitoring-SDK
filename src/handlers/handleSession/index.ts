import { ISessionPayload } from '../type';
import { getCookie, setCookie } from '../../utils/cookieUtils';

const handleSession = (
  sendSession: (payload: ISessionPayload) => Promise<Response | undefined>,
): void => {
  window.onload = () => {
    const postCookie = getCookie('pan');
    const sessionBase = Number(sessionStorage.getItem('pan'));
    const presentTime = new Date().getTime();
    if (!sessionBase) {
      sessionStorage.setItem('pan', presentTime.toString());
    }

    if (postCookie && sessionBase) {
      // 이전 Page path
      const prevLocation = document.referrer.replace(/^[^:]+:\/\/[^/]+/, '').replace(/#.*/, '');
      const presentLocation = window.location.pathname;

      // Cookie에 저장된 시간
      const time = postCookie;
      const parsedTime = new Date(time);
      const prevTime = parsedTime.getTime();

      // 현재 시간 - Cookie에 저장된 시간(이전페이지 진입시간)
      const duration = presentTime - prevTime;

      const payload: ISessionPayload = {
        sessionBase,
        prevLocation,
        presentLocation,
        prevTime,
        presentTime,
        duration,
      };
      sendSession(payload);
    }
    setCookie('pan', `${new Date()}`, 1);
  };
};
export default handleSession;
