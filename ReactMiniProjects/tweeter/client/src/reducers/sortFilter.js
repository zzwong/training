const SET_SORT_KEY = 'SET_SORT_KEY';

const SortKeys = {
  CREATE_TIME: 'CREATE_TIME',
  LIKE_COUNT: 'LIKE_COUNT'
};

const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

const defaultSortKey = SortKeys['CREATE_TIME'];
const defaultSortOrder = SORT_DESC;
const initialState = {
  sortBy: defaultSortKey,
  sortOrder: defaultSortOrder
};

const sortFilter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sortFilter;
