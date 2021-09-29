// 학습데이터 조작과 관련 된 CRUD API 함수
import { posts } from './index';

/**
 * 학습 데이터 목록 조회 API
 */
function fetchPosts() {
  return posts.get('/');
}

/**
 * 특정 학습 데이터 조회 API
 */
function fetchPost(postId) {
  return posts.get(postId);
}

/**
 * 학습 데이터 생성 API
 * @param {Object} postData title, contents 값
 */
function createPost(postData) {
  return posts.post('/', postData);
}

/**
 * 학습 데이터 삭제 API
 * @param {Object} postData title, contents 값
 */
function deletePost(postId) {
  return posts.delete(postId);
}
/**
 * 학습 데이터 수정 API
 */
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
