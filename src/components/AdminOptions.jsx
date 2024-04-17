import React from 'react';
import styles from "@styles/admin.module.css";

const AdminOptions = ({users}) => {
    return (
        users.map((user)=>{
            return(
            <div>
                <input className={styles["select-user"]} name={"user"} type={"radio"}/>
                <div key={user.id} className={styles["user"]}>
                    <div className={styles["user-image"]}></div>
                    <span>{user.name}</span>
                    <span className={styles["edit"]}>
                        {/* <input className={styles["edit-button"]} type={"checkbox"}/> */}
                        Edit
                    </span>
                </div>
            </div>
            )
        })
    );
}

export default AdminOptions;
