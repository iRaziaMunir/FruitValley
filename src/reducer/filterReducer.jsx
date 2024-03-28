
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const filterProducts = Array.isArray(action.payload) ? [...action.payload] : [];
      return{
        ...state,
        filter_products: filterProducts,
        all_products: filterProducts,
        isLoading: true,
      }
      case "SET_API_DATA":
      const featureData = action.payLoad. filter((currentElem) => {
        return currentElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    default:
      return state;
  }
}

export default filterReducer;
