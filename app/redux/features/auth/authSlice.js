const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
   loading: false,
   error: null
}

const userSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setLoading(state, action) {
         state.loading = action.payload
      },
      setError(state, action) {
         state.error = action.payload
      },
      resetError(state, action) {
         state.error = action.payload
      }
   }

})

export const { setLoading, setError, resetError } = userSlice.actions
export default userSlice.reducer