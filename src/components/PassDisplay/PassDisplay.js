import React from "react";
import styles from "./passdisplay.module.css";

const PassDisplay = (props) => {
    return (
        <div className={styles.password}>
            <p>{props.pass}</p>
        </div>
    );
};

export default PassDisplay;
