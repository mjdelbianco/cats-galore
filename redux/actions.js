export const setCatList = (cats) => ({
  type: 'LIST_ALL_CATS',
  payload: cats,
});

export const addCat = (cat) => ({
  type: 'ADD_CAT',
  payload: cat,
});

export const deleteCat = (cat) => ({
  type: 'DELETE_CAT',
});

export const modifyCat = (cat) => ({
  type: 'MODIFY_CAT',
  payload: cat,
});
