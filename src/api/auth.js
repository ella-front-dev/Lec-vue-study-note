// 로그인, 회원가입, 회원 탈퇴 - 인증 관련 함수
import { instance } from './index';

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
