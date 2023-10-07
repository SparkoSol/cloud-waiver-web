"use client";

import {Provider} from 'react-redux';
import store from "@/app/redux/store";
import ToasterProvider from "@/app/providers/ToastProvider";

export function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      <ToasterProvider/>
      {children}
    </Provider>
  );
}