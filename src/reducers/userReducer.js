export const users = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return [...state, action.payload];
    default:
      return [];
  }
};
