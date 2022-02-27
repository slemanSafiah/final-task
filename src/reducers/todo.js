const todos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "Delete_TODO": {
      return {};
    }

    default:
      return null;
  }
};

export default todos;

/*
{
  idx,
  desc,
  type
}
*/
