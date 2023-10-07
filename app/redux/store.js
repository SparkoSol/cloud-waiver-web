import {configureStore} from '@reduxjs/toolkit';
import userReducer from "@/app/redux/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store