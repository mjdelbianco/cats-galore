const initialState = {
  catList: [
    {name: 'Amy', breed: 'mixed', id: new Date(), age: 3},
    {name: 'Jim', breed: 'mixed', id: new Date(), age: 3},
  ],
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
    case 'VIEW_CAT':
      return {
        ...state,
        cat: action.payload,
      };
    case 'ADD_CAT':
      return {
        ...state,
        catList: [...state.catList, action.payload],
      };
    case 'EDIT_CAT':
      return {
        cat: {...state.cat, ...action.payload},
        catList: [
          ...state.catList.map((cat) => {
            if (cat.id !== action.payload.id) return cat;
            return {...state.catList, ...action.payload};
          }),
        ],
      };
    case 'DELETE_CAT':
      return {
        cat: {},
        catList: [
          ...state.catList.filter((cat) => cat.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
