/*
 * @Author: Chosan.Zhangjianjun
 * @Date: 2019-03-05 17:33:54
 * @Last Modified by: Chosan.Zhangjianjun
 * @Last Modified time: 2019-03-06 10:21:01
 */

// root reducers

// class RootReducers {
//   registeReducer (reducers) {
//     Object.entries(reducers).forEach(([key, reducer]) => {
//       this[key] = reducer;
//     })
//   }
// }

export const demo = (state = {}, action) => {
  if (action.type === 'demo') {
    return { ...state, name: action.type };
  }
  return state;
};
