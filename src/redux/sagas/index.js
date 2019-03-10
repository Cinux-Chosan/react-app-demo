import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SAVE_CATEGORIES,
  FETCH_CATEGORIES,
  FETCH_POSTS_BY_CATEGORY,
  SAVE_POSTS_BY_CATEGORY,
  FETCH_POST_BY_ID,
  SAVE_POST
} from '@localActions';
import fetch from '@fetch';

function* fetchCategories() {
  const { data: categories } = yield call(
    fetch,
    'https://chosan.cn/api/categories'
  );
  yield put({ type: SAVE_CATEGORIES, categories });
}

function* fetchPostsByCategory(action) {
  const { payloads: cate } = action;
  const { data: posts } = yield call(fetch, 'https://chosan.cn/api/posts', {
    cate
  });
  yield put({ type: SAVE_POSTS_BY_CATEGORY, posts, cate });
}

function fetchPostById() {
  const postsCache = {};
  return function*(action) {
    const { payloads: postId } = action;
    const cachedPost = postsCache[postId];
    if (cachedPost) {
      yield put({ type: SAVE_POST, post: cachedPost });
    } else {
      const { data: post } = yield call(
        fetch,
        `https://chosan.cn/api/posts/${postId}`
      );
      postsCache[postId] = post;
      yield put({ type: SAVE_POST, post });
    }
  };
}

export default function* rootSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(FETCH_POSTS_BY_CATEGORY, fetchPostsByCategory);
  yield takeLatest(FETCH_POST_BY_ID, fetchPostById());
}
