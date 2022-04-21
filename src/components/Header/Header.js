import "./Header.scss";
import React, { Component } from "react";
import headshot from "../../assets/images/andrew.JPG";
import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import FormModal from "../FormModal/FormModal";
import { View, FlatList, TouchableOpacity } from "react-native";
const FontAwesome = require("react-fontawesome");

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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData: Data,
      submitted: false,
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
            <FormModal submitted={this.state.submitted} />
          </div>

          <div className="header_section">
            <ul className="header_section-links">
              <View>
                <FlatList
                  data={this.state.renderData}
                  keyExtractor={(item) => item.id.toString()}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => this.onPressHandler(item.id)}>
                      <li
                        className="header_section-links-item"
                        style={
                          item.selected === true
                            ? {
                                padding: 5,
                                borderRadius: 5,
                                backgroundColor: "white",
                              }
                            : {
                                padding: 5,
                                borderRadius: 5,
                                backgroundColor: "cadetblue",
                              }
                        }>
                        <FontAwesome
                          id="icon"
                          name="icon"
                          className={item.className}
                          size="lg"
                          value={item.icon}
                          style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                        />
                        {item.item}
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
