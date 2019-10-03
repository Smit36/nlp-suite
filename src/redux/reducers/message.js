const messageReducerDefaultState = {
  successMessage: null,
  errorMessage: null,
};

export default (state = messageReducerDefaultState, action) => {
  switch (action.type) {
    case 'SUCCESS_MESSAGE':
      return { ...state, successMessage: action.successMessage };
    case 'ERROR_MESSAGE':
      return { ...state, errorMessage: action.errorMessage };
    case 'CLEAR_ALL':
      return { ...state, errorMessage: null, successMessage: null };
    default:
      return state;
  }
};
