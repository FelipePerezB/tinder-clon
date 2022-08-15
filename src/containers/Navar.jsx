import React from "react";
import styles from "@styles/navar.module.css";

const Navar = () => {
  return (
    <nav className={styles["nav-container"]}>
      <ul>
        <li id={styles["tinder-icon"]}>
          <input defaultChecked={true} name={"nav"} type={"radio"} />
          <span></span>
        </li>
        <li id={styles["magic-icon"]} >
          <input name={"nav"} type={"radio"} />
          <span></span>
        </li>
        <li id={styles["search-icon"]} >
          <input name={"nav"} type={"radio"} />
          <span></span>
        </li>
        <li id={styles["chat-icon"]} >
          <input name={"nav"} type={"radio"} />
          <span></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navar;
