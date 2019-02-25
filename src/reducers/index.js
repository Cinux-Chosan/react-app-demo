export default {
  demo: (state = {}, action) => {
    if (action.type === 'demo') {
      return { name: action.type };
    }
    return state;
  }
};
