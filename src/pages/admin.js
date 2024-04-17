import React from 'react';
import styles from "@styles/admin.module.css";
import deleteIcon from "@assets/icons/others/delete.svg";
import editIcon from "@assets/icons/others/edit.svg";
import Image from 'next/image';
import AdminOptions from '@components/AdminOptions';

const Admin = () => {
    const users = [
        {
            image:"blue",
            name:"Felipe",
            id:"2982838"
        },
        {   
            image:"blue",
            name:"Felipe",
            id:"28723823099"
        }
    ]
    return (
        <div className={styles["panel-background"]} >
            <div className={styles["panel"]}>
                <div className={styles["options"]} >
                    <div className={styles["options-header"]}>
                        <h3 className={styles["subtitle"]}>SELECT A USER</h3>
                        <span>Add</span>
                    </div>
                    <AdminOptions users={users}/>
                </div>
                <div className={styles["options"]} >
                    <div className={styles["options-header"]}>
                        <h3 className={styles["subtitle"]}>RECOMENDATIONS</h3>
                        <span>Add</span>
                    </div>
                    <AdminOptions users={users}/>
                </div>
              
            </div>
        </div>
    );
}

export default Admin;
