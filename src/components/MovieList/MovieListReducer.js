export const initialState = {
    loading: true,
    movies: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES_SUCCESS":
        return {
          loading: false,
          movies: action.payload,
        }
      default:
        return state
    }
}