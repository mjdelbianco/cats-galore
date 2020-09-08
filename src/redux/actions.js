export const setCatList = (cats) => ({
  type: 'LIST_ALL_CATS',
  payload: cats,
});

export const viewCat = (cat) => ({
  type: 'VIEW_CAT',
  payload: cat,
});

export const addCat = (cat) => ({
  type: 'ADD_CAT',
  payload: cat,
});

export const deleteCat = (cat) => ({
  type: 'DELETE_CAT',
  payload: cat,
});

export const editCat = (cat) => ({
  type: 'EDIT_CAT',
  payload: cat,
});
