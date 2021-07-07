import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration, Button } from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { Clock } from "./clock.js";

const rand = (n) => {
  return Math.floor(Math.random() * n);
};

const Thing = () => {
  const [bg, changebg] = useState("#FF3EFF");
  const [txt, changetxt] = useState("white");
  const [numClicks, setClicks] = useState(0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `${bg}`,
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontStyle: bg === "#FF3EFF" ? "" : "italic",
      fontSize: 24,
      color: `${txt}`
    }
  });

  const handleHover = (color) => {
    changebg(color);
  };

  const handleCount = () => {
    setClicks((prev) => prev + 1);
  };

  const aClick = () => {
    handleCount();
    alert("ouch");
  };
  console.log(numClicks);
  const changeWords = (color) => {
    let top = color === "#00FF00" ? "are you sure?" : "there is a button here.";
    let button = color !== "#00FF00" ? "you could click here." : "hmmm";
    return [top, button];
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{changeWords(bg)[0]}</Text>
      <button
        onClick={aClick}
        onMouseEnter={() => handleHover("#00FF00")}
        onMouseLeave={() => handleHover("#FF3EFF")}
      >
        {changeWords(bg)[1]}
      </button>
      <Text style={styles.text}>number of clicks: {numClicks}</Text>
      <Clock />
    </View>
  );
};
export default Thing;

// class Thing2 extends React.Component {
//   render() {
//     const { colorChange, styles, theWords, aClick, timesClicked } = this.props;
//     // const aClick = () => alert("ouch");
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>{theWords.above}</Text>
//         <button
//           onMouseEnter={() => colorChange(true)}
//           onMouseLeave={() => colorChange(false)}
//           onClick={aClick}
//         >
//           {theWords.button}
//         </button>
//         <Text style={styles.text}>times clicked: {timesClicked} </Text>
//         <Clock />
//       </View>
//     );
//   }
// }

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       colorChanges: StyleSheet.create({
//         container: {
//           flex: 1,
//           backgroundColor: "#FF3EFF",
//           alignItems: "center",
//           justifyContent: "center"
//         },

//         text: {
//           fontSize: 24,
//           color: "white"
//         }
//       }),
//       words: {
//         above: "you could click here.",
//         button: "you could click this."
//       },
//       clicks: 0
//     };
//     this.colorChange = this.colorChange.bind(this);
//     this.clickChange = this.clickChange.bind(this);
//   }

//   colorChange = (color) => {
//     let bg = !color ? "#FF3EFF" : "#00FF00";
//     let text = !color ? "white" : "black";
//     let textStyle = color ? "italic" : "";
//     let word1 = !color ? "you could click here." : "are you sure?";
//     let word2 = !color ? "you could click this." : "hmmm";

//     this.setState({
//       colorChanges: StyleSheet.create({
//         container: {
//           flex: 1,
//           backgroundColor: bg,
//           alignItems: "center",
//           justifyContent: "center"
//         },
//         text: {
//           fontStyle: textStyle,
//           fontSize: 24,
//           color: text
//         }
//       }),

//       words: { above: word1, button: word2 }
//     });
//   };

//   clickChange = () => {
//     alert("ouch");
//     let numClicks = this.state.clicks + 1;
//     this.setState({ clicks: numClicks });
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Thing2
//           colorChange={this.colorChange}
//           styles={this.state.colorChanges}
//           theWords={this.state.words}
//           aClick={this.clickChange}
//           timesClicked={this.state.clicks}
//         />
//       </View>
//     );
//   }
// }
