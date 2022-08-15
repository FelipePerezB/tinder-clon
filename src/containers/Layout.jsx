import React from "react";
import styles from "@styles/layout.module.css";
import Navar from "./Navar";
import Logo from "@components/Logo";

const Layout = ({ children }) => {
  return (
    <div className={styles["layout"]}>
      <Logo />
      {children}
      <Navar />
    </div>
  );
};

export default Layout;
