import {configureStore} from '@reduxjs/toolkit';
import userReducer from "@/app/redux/user/userSlice";
import modalReducer from "@/app/redux/modal/modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store