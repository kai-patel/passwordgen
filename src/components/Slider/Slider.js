import React from "react";
import styles from "./slider.module.css";

const Slider = (props) => {
    return (
        <div className={styles.slider}>
            <input
                type="range"
                min="1"
                max="50"
                step="1"
                onInput={props.handleChange}
            />
            <p className={styles.value}>{props.value}</p>
        </div>
    );
};

export default Slider;
