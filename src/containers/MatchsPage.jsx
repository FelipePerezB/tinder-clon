import React, { useState } from "react";
import styles from "@styles/matchsPages.module.css";
const MatchsPage = () => {
  let removedUser;
  let lastRemovedUser;
  const [removedUsersList, setRemovedUsersList] = useState([]);
  const [userState, setUserState] = useState("static");
  const [users, setUsers] = useState([
    {
      id: "JUAN",
      color: "HotPink",
    },
    {
      id: "MARCELA",
      color: "Lavender",
    },
  ]);
  let action = userState;
  const changeUser = (type) => {
    if (type === "like" || type === "nope") {
      setUserState(type);
      setTimeout(() => {
        removedUser = {
          user: users.find((user) => users[0] === user),
          reason: type,
        };
        setUsers(users.filter((user) => user !== removedUser.user));
        removedUsersList.unshift(removedUser);
        setUserState("static");
      }, 200);
    } else if (type === "retry" && removedUsersList.length > 0) {
      setUserState(type);
      setUsers([removedUsersList[0].user, ...users]);
      setTimeout(()=>{
        setRemovedUsersList(
          removedUsersList.filter(
            (user) => user.user !== removedUsersList[0].user
          )
        );

        setUserState("static");
      },200)
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        {users.map((user) => {
          action = "static";
          let userIndex = users.indexOf(user);
          if (userIndex === 0 && userState !== "static") {
            switch (userState) {
              case "like":
                action = "like";
                break;
              case "nope":
                action = "nope";
                break;
              case "retry":
                action = "nope";
                break;
              default:
                action = "static";
                break;
            }
          }
          return (
            <div
              key={user.id}
              style={{ background: user.color, zIndex: 50 - userIndex }}
              className={styles[action]}
            >
              <div className={styles["description"]}></div>
              <div className={styles["buttons-background"]}></div>
            </div>
          );
        })}
        {/* </div> */}
        <div className={styles["buttons"]}>
          <span id={styles["retry"]} onClick={() => changeUser("retry")}></span>
          <span id={styles["like"]} onClick={() => changeUser("like")}></span>
          <span id={styles["star"]}></span>
          <span id={styles["nope"]} onClick={() => changeUser("nope")}></span>
          <span id={styles["boost"]}></span>
        </div>
      </div>
    </div>
  );
};

export default MatchsPage;
