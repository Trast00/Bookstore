const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({ type: CHECK_STATUS });

// should be used only in the next project but need to be used to fix linter errors
checkStatus(null);
