import React, { useState } from "react";
import avatar1 from "@assets/images/avatar1.webp"
import avatar2 from "@assets/images/avatar2.jpg"
import styles from "@styles/matchsPages.module.css";
import Image from "next/image";
const MatchsPage = () => {
  
  let removedUser;
  const [removedUsersList, setRemovedUsersList] = useState([]);
  const [matchUsers, setMatchUsers] = useState([]);
  const [userState, setUserState] = useState("static");
  const [users, setUsers] = useState([
    {
      id: "Juan",
      age: 19,
      recentlyActive: true,
      color: "HotPink",
      description: "Me gusta pescar",
      avatar: avatar1
    },
    {
      id: "MARCELA",
      age: 19,
      recentlyActive: true,
      color: "Lavender",
      description: "UWUWUWU",
      avatar: avatar2
    },
    {
      id: "CARLOS",
      age: 19,
      recentlyActive: true,
      color: "#77dd77",
      description: "UWUWUWU",
      avatar: avatar1
    },
    {
      id: "PAMELA",
      age: 19,
      recentlyActive: true,
      color: "#fdcae1",
      description: "UWUWUWU",
      avatar: avatar2
    },
  ]);
  let action = userState;
  const changeUser = (type) => {
    if ((type === "like" || type === "nope") && users.length > 0) {
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
      setTimeout(() => {
        setRemovedUsersList(
          removedUsersList.filter(
            (user) => user.user !== removedUsersList[0].user
          )
        );

        setUserState("static");
      }, 250);
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
                action = "retry";
                break;
              default:
                action = "static";
                break;
            }
          }
          return (
            <div
              key={user.id}
              style={{zIndex: 50 - userIndex }}
              className={styles[action]}
            >
              <div className={styles["avatar"]}>
                <Image layout={"responsive"} width={9} height={16} src={user.avatar}/>
              </div>
              <div className={styles["message"]}></div>
              <div className={styles["description"]}>
                <div className={styles["info"]}>
                  <div className={styles["main-info"]}>
                    <span className={styles["name"]}>{user.id}</span>
                    <span className={styles["age"]}>{user.age}</span>
                  </div>
                  {user.recentlyActive ? (
                    <div className={styles["recendly-active"]}>
                      <span className={styles["dot"]}></span>
                      <span>Recendly active</span>
                    </div>
                  ) : null}
                  <p>{user.description}</p>
                </div>
                <span className={styles["more-info-icon"]}></span>
              </div>
              <div className={styles["buttons-background"]}></div>
            </div>
          );
        })}
        {/* </div> */}
        <div className={styles["buttons"]}>
          <span id={styles["retry"]} onClick={() => changeUser("retry")}></span>
          <span id={styles["nope"]} onClick={() => changeUser("nope")}></span>
          <span id={styles["star"]}></span>
          <span id={styles["like"]} onClick={() => changeUser("like")}></span>
          <span id={styles["boost"]}></span>
        </div>
      </div>
    </div>
  );
};

export default MatchsPage;
