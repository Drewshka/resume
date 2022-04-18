import "./Header.scss";
import React, { Component } from "react";
import headshot from "../../assets/images/andrew.JPG";
// import { useState } from "react";
import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import {
  Text,
  View,
  StyleSheet,
  //   Card,
  //   Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import Constants from "expo-constants";
var FontAwesome = require("react-fontawesome");

const Data = [
  {
    id: 1,
    item: "andrew.jos.stevenson@gmail.com",
    icon: email,
    className: "fa fa-envelope",
  },
  {
    id: 2,
    item: "+1 (519) 217-4032",
    icon: phone,
    className: "fa-solid fa-phone",
  },
  {
    id: 3,
    item: "Toronto",
    icon: location,
    className: "fa-solid fa-location-arrow",
  },
  {
    id: 4,
    item: "linkedin.com/in/andrew-jos-stevenson",
    icon: linkedin,
    className: "fa-brands fa-linkedin",
  },
  {
    id: 5,
    item: "github.com/Drewshka",
    icon: github,
    className: "fa-brands fa-github",
  },
];

// function Header() {
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData: Data,
    };
  }

  onPressHandler(id) {
    let renderData = [...this.state.renderData];
    for (let data of renderData) {
      if (data.id === id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({ renderData });
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header_section">
            <img
              src={headshot}
              alt="headshot"
              className="header_section-headshot"
            />
            <h1 className="header_section-name">Andrew Stevenson</h1>
            <h3 className="header_section-title">Full Stack Developer</h3>
          </div>
          <div className="header_section">
            <ul className="header_section-links">
              <View>
                <FlatList
                  //   horizontal={true}
                  data={this.state.renderData}
                  keyExtractor={(item) => item.id.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => this.onPressHandler(item.id)}>
                      <li
                        style={
                          item.selected === true
                            ? {
                                padding: 10,
                                borderRadius: 5,
                                // backgroundColor: "#000000",
                                backgroundColor: "white",
                              }
                            : {
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: "cadetblue",
                              }
                        }>
                        <Text>
                          {" "}
                          <FontAwesome
                            id="icon"
                            className={item.className}
                            size="1x"
                            style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                          />
                          {item.item}
                        </Text>
                      </li>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

// import React, { useState } from "react";

// const Header = () => {
//   const [selectedDistricts, setSelectedDistricts] = useState([]);

//   const addDistrictToList = (id) => {
//     setSelectedDistricts([...selectedDistricts, id]);
//   };

//   const isDistrictSelected = (id) => {
//     return selectedDistricts.indexOf(id) !== -1;
//   };

//   return (
//     <div className="list-group">
//       <button
//         type="button"
//         // className={isDistrictSelected(1) ? "active" : ""}
//         className={isDistrictSelected(1) && "active"}
//         onClick={() => addDistrictToList(1)}>
//         {" "}
//         1. bezirk{" "}
//       </button>
//       <button
//         type="button"
//         // className={isDistrictSelected(2) ? "active" : ""}
//         className={isDistrictSelected(2) && "active"}
//         onClick={() => addDistrictToList(2)}>
//         {" "}
//         2. bezirk{" "}
//       </button>
//       <button
//         type="button"
//         className={isDistrictSelected(3) && "active"}
//         onClick={() => addDistrictToList(3)}>
//         {" "}
//         3. bezirk{" "}
//       </button>
//     </div>
//   );
// };

// export default Header;
