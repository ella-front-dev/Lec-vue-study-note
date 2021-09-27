import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axiox 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

/**
 * 회원가입 API
 * @param {Object} userData username, password, nickname 값
 */
function registerUser(userData) {
  return instance.post('/signup', userData);
}

/**
 * 로그인 API
 * @param {Object} userData username, password 값
 */
function loginUser(userData) {
  return instance.post('/login', userData);
}

export { registerUser, loginUser };
