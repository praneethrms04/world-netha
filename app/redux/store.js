const { configureStore } = require("@reduxjs/toolkit");

import userReducer from  "./features/auth/authSlice"

const store = configureStore({
   reducer: {
      user : userReducer
   },
   middleware: (gDM) => gDM().concat()
})

export default store