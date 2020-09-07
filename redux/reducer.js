const initialState = {
  catList: [{name: 'jo'}, {name: 'ji'}],
  cat: {},
};

export default catReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case 'LIST_ALL_CATS':
      return {
        ...state,
        catList: action.payload,
      };
    default:
      return state;
  }
};
