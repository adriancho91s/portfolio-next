"use client";
import { useEffect } from "react";
import {Toaster, toast} from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/store";

const Providers = ({ children }) => {
  useEffect(() => {
    toast("I'm still working on my portfolio!", {
      id: "main-notification",
      icon: "👨🏻‍💻",
      style: {
        borderRadius: "10px",
        background: "#332",
        color: "#fff",
      },
      duration: 4200,
    });
  }, []);

  return (
    <Provider store={store}>
      <Toaster position="top-right" />
        {children}
    </Provider>
  );
}

export default Providers;