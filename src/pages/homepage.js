import React, { Component } from "react";
import { getTodayWeather } from "../controller/api";
import { toast, ToastContainer } from "react-toastify";
import MainPage from "../components/homepage/MainPage";

export default class homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {}
    };
  }

  componentWillMount() {
    getTodayWeather("Tanjung pinang")
      .then(res => {
        toast.success("Retrieved weather data");
      })
      .catch(() => {
        toast.error("Failed to retrieve weather data");
      });
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <MainPage />
      </div>
    );
  }
}
