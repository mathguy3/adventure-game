import React, { Component } from "react";
import ButtonCore from "./components/ButtonCore";
import styles from "./styles.js";

class App extends Component {
  handleButtonTap = () => {
    alert("A pikachu appeared nearby !");
  };
  render() {
    return (
      <div style={styles.container}>
        <ButtonCore onClick={this.handleButtonTap} title={"hi there"} />
      </div>
    );
  }
}

export default App;
