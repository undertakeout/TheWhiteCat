import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration, Button } from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { Clock } from "./clock.js";

const rand = (n) => {
  return Math.floor(Math.random() * n);
};

const Thing = () => {
  const [bg, changebg] = useState("#FF3EFF");
  const [numClicks, setClicks] = useState(0);
  // const[top,changeTop] = useState('there is a button here.')
  let backs = ["#8A71FF", "#007FFF", "#FF0000", "#FF9700", "#000000"];
  let backs2 = ["#008900", "#9EFFFF", "#DCFF00", "#FFFFFF", "#47597C"];
  let match = {
    "#FF3EFF": "white",
    "#8A71FF": "white",
    "#007FFF": "white",
    "#FF0000": "white",
    "#FF9700": "black",
    "#000000": "white",
    "#008900": "white",
    "#9EFFFF": "black",
    "#DCFF00": "black",
    "#FFFFFF": "black",
    "#47597C": "white"
  };

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
      color: match[bg]
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
  let top = backs2.includes(bg) ? "there is a button here." : "are you sure?";
  let button = backs2.includes(bg) ? "you could click this." : "hmmm";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{top}</Text>
      <button
        onClick={aClick}
        onMouseEnter={() => handleHover(backs[rand(5)])}
        onMouseLeave={() => handleHover(backs2[rand(5)])}
      >
        {button}
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
