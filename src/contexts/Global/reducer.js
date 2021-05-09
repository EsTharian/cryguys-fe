export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        ...action.payload
      }
  }
}

export const initialState = {
  jwt: null,
  userData: null,
  theme: 'light'
}
