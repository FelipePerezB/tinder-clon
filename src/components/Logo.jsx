import React from "react";
import styles from "@styles/logo.module.css";
import Image from "next/image";
import logo from "@assets/icons/nav-icons/logo-active.svg"


const Logo = () => {
  return (
    <div className={styles["logo-container"]}>
      <span className={styles["account"]}></span>
      <span className={styles["logo"]}>
        <Image src={logo}/>
        <span>tinder</span>
      </span>
    </div>
  );
};

export default Logo;
