import { getWeatherByCity } from "./apiService.js";
import { mapListToDomElements } from "./DOMActions.js";
const viewElems = {};

class weatherApp {
  constructor() {
    this.viewElems = {};
    this.conncectDOMElements();
    this.setupListeners();
  }
  conncectDOMElements = () => {
    const listOfId = Array.from(document.querySelectorAll("[id]")).map(
      (elem) => elem.id
    );
    this.viewElems = mapListToDomElements(listOfId);
  };
  setupListeners = () => {
    this.viewElems.searchInput.addEventListener("keydown", this.onEnterSubmit);
    this.viewElems.searchButton.addEventListener("click", this.onClickSubmit);
    this.viewElems.returnToSearchBtn.addEventListener(
      "click",
      this.onClickrReturnToSearchBtn
    );
  };
  onEnterSubmit = (event) => {
    if (event.key === "Enter") {
      this.fadeInOut();
      this.viewElems.mainContainer.style.opacity = "0";
      let city = this.viewElems.searchInput.value;
      getWeatherByCity(city).then((data) => displayWeatherData(data));
      setTimeout(() => {
        this.switchView();
        this.fadeInOut();
      }, 500);
    }
  };
  onClickSubmit = () => {
    this.fadeInOut();
    let city = this.viewElems.searchInput.value;
    getWeatherByCity(city).then((data) => this.displayWeatherData(data));
    setTimeout(() => {
      this.switchView();
      this.fadeInOut();
    }, 500);
  };

  onClickrReturnToSearchBtn = () => {
    this.fadeInOut();
    setTimeout(() => {
      this.switchView();
      this.fadeInOut();
    }, 500);
  };

  fadeInOut = () => {
    if (
      this.viewElems.mainContainer.style.opacity === "1" ||
      this.viewElems.mainContainer.style.opacity === ""
    ) {
      this.viewElems.mainContainer.style.opacity = "0";
    } else {
      this.viewElems.mainContainer.style.opacity = "1";
    }
  };

  switchView = () => {
    if (this.viewElems.weatherSearchView.style.display !== "none") {
      this.viewElems.weatherSearchView.style.display = "none";
      this.viewElems.weatherForecastView.style.display = "flex";
    } else {
      this.viewElems.weatherSearchView.style.display = "flex";
      this.viewElems.weatherForecastView.style.display = "none";
    }
  };

  displayWeatherData = (data) => {
    console.log(data);
    this.viewElems.weatherCity.innerText = data.location.name;
    this.viewElems.weatherCurrentTemp.innerText = `Temperature: ${data.current.temp_c}°C`;
    this.viewElems.fellsLike.innerText = `Sensed temperature: ${data.current.feelslike_c}°C`;
    this.viewElems.wind.innerText = `Wind: ${data.current.wind_kph} kph`;
    this.viewElems.cloud.innerText = `Cloudiness: ${data.current.cloud} %`;
  };
}
document.addEventListener("DOMContentLoaded", new weatherApp());
