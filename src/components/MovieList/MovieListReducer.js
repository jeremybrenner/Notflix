export const initialState = {
    movies: [],
}

export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_MOVIES_SUCCESS":
        return {
          movies: action.payload,
        }
      default:
        return state
    }
}