import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather"

//import axios from "axios" // npm install axios -g 
const API_KEY = "38b70137b6894817ace922aefacf4089";
export default class extends React.Component {
  state ={
     isLoading = true
  };

  getWeather = async (latitude, longitude) => {
    // const { data } = await axios.get(
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(data);
    // this.setState({ isLoading: false, temp: data.main.temp })
    this.setState({
      isLoading: false;
      condition: weather[0].main,
      temp
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you. That's true", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    // return <Loading />
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}
