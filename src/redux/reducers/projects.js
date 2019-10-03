const projectReducerDefaultState = [];

export default (state = projectReducerDefaultState, action) => {
  switch (action.type) {
    case 'PUSH':
      return [...action.projects];
    case 'ADD':
      return [...[].concat(action.project, state)];
    case 'UPDATE':
      return state.filter(item => item.name !== action.name);
    case 'DELETE':
      return [...state, action.projects];
    default:
      return state;
  }
};
