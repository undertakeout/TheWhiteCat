import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration, Button } from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

// function Thing() {
//   const [bg, changebg] = useState("#FF3EFF");

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: `${bg}`,
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     text: {
//       fontSize: 24,
//       color: bg === "#FF3EFF" ? "white" : "black"
//     }
//   });

//   const handleHover = (color) => {
//     changebg(color);
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>there is a button here.</Text>
//       <button
//         onClick={aClick}
//         onMouseEnter={() => handleHover("#00FF00")}
//         onMouseLeave={() => handleHover("#FF3EFF")}
//       >
//         you could click here.
//       </button>
//     </View>
//   );
// }

class Thing2 extends React.Component {
  render() {
    const { colorChange, styles } = this.props;
    const aClick = () => alert("ouch");
    return (
      <View style={styles.container}>
        <Text style={styles.text}>here is a button.</Text>
        <button
          onMouseEnter={() => colorChange(true)}
          onMouseLeave={() => colorChange(false)}
          onClick={aClick}
        >
          you could click this.
        </button>
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
    colorChanges: StyleSheet.create({
      container: {
        flex: 2,
        backgroundColor: "#FF3EFF",
        alignItems: "center",
        justifyContent: "center"
      },

      text: {
        fontSize: 24,
        color: "white"
      }
    }),
    pictures: {}
  };

  colorChange = (color) => {
    let bgO = "#FF3EFF";
    let bgN = "#00FF00";
    let bg = !color ? bgO : bgN;
    let text = !color ? "white" : "black";
    this.setState({
      colorChanges: StyleSheet.create({
        container: {
          flex: 2,
          backgroundColor: bg,
          alignItems: "center",
          justifyContent: "center"
        },
        text: {
          fontSize: 24,
          color: text
        }
      }),

      pictures: {}
    });
  };

  render() {
    return (
      <Thing2 colorChange={this.colorChange} styles={this.state.colorChanges} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink" ,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "white"
  }
});
