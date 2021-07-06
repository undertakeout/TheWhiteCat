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
    const { colorChange, styles, theWords } = this.props;
    const aClick = () => alert("ouch");
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{theWords.above}</Text>
        <button
          onMouseEnter={() => colorChange(true)}
          onMouseLeave={() => colorChange(false)}
          onClick={aClick}
        >
          {theWords.button}
        </button>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      words: { above: "you could click here.", button: "you could click this." }
    };
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange = (color) => {
    let bg = !color ? "#FF3EFF" : "#00FF00";
    let text = !color ? "white" : "black";
    let textStyle = color ? "italic" : "";
    let word1 = !color ? "you could click here." : "are you sure?";
    let word2 = !color ? "you could click this." : "hmmm";
    this.setState({
      colorChanges: StyleSheet.create({
        container: {
          flex: 2,
          backgroundColor: bg,
          alignItems: "center",
          justifyContent: "center"
        },
        text: {
          fontStyle: textStyle,
          fontSize: 24,
          color: text
        }
      }),

      words: { above: word1, button: word2 }
    });
  };

  render() {
    return (
      <Thing2
        colorChange={this.colorChange}
        styles={this.state.colorChanges}
        theWords={this.state.words}
      />
    );
  }
}
