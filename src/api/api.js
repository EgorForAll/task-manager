import axios from 'axios';

const BACKEND_URL = `https://api.jsonbin.io/v3/b/`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false
  });

  api.defaults.headers.put['Content-Type'] = 'application/json';
  api.defaults.headers.put['X-Master-Key'] =
    '$2a$10$Gk358XMi3.iIMqWP/xnDpOpz4jeAda/tGoGOgTjpubYEy5NLTsvBO';

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response.status > 400) {
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
