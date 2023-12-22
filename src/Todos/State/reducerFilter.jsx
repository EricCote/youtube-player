export function reducerFilter(filter, action) {
  switch (action.type) {
    case 'newFilter':
      return action.payload;
    default:
      return filter;
  }
}
