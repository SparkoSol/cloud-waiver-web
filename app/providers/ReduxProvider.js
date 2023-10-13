"use client";

import {Provider} from 'react-redux';
import store from "@/app/redux/store";
import ToasterProvider from "@/app/providers/ToastProvider";
import {AuthProvider} from "@/app/Provider";

export function ReduxProvider({children}) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ToasterProvider/>
        {children}
      </Provider>
    </AuthProvider>
  );
}