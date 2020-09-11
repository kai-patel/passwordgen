import React from "react";
import Slider from "./components/Slider/Slider";
import PassDisplay from "./components/PassDisplay/PassDisplay";
import styles from "./app.module.css";

const crypto = require("crypto");

class App extends React.Component {
    state = { value: 0 };

    setValue = (e) => {
        let newValue = e.target.value;
        this.setState({ value: newValue });
    };

    genPass = (n) => {
        return crypto.randomBytes(parseInt(n)).toString("hex");
    };

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.header}>
                    <p>Password Generator</p>
                </div>
                <div className={styles.pass}>
                    <Slider
                        value={this.state.value}
                        handleChange={this.setValue}
                    />
                    <PassDisplay pass={this.genPass(this.state.value)} />
                </div>
            </div>
        );
    }
}

export default App;
