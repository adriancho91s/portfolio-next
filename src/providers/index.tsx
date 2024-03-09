"use client";
import { useEffect, ReactNode } from "react";
import {Toaster, toast} from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/store";
import {useTranslations} from "next-intl";

const Providers = ({ children }: {
  children: ReactNode;
}) => {
  const t = useTranslations("toast");
  useEffect(() => {
    toast(t("welcome"), {
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