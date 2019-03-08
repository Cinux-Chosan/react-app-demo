/*
 * @Author: Chosan.Zhangjianjun
 * @Date: 2019-03-05 17:33:54
 * @Last Modified by: Chosan.Zhangjianjun
 * @Last Modified time: 2019-03-06 10:21:01
 */

import { SAVE_USER_INFO } from '@localActions';

export const userInfo = (state = { userName: '' }, action) => {
  if (action.type === SAVE_USER_INFO) {
    const {
      userInfo: { userName }
    } = action;
    return { ...state, userName };
  }
  return state;
};
