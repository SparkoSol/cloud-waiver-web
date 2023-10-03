"use client";

import {Provider} from 'react-redux';
import store from "@/app/redux/store";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToastProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import RentModal from "@/app/components/modals/RentModal";

export function ReduxProvider({children}) {
  return (
      <Provider store={store}>
        <LoginModal/>
        <RegisterModal/>
        <RentModal/>
        <ToasterProvider/>
        {children}
      </Provider>
  );
}