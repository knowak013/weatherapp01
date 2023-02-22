import { getWeatherByCity } from "./apiService.js";
const viewElems = {};

const getDomElem = (id) => {
  return document.getElementById(id);
};

const conectHTMLElems = () => {
  viewElems.mainContainer = getDomElem("mainContainer");
  viewElems.weatherInfo = getDomElem("weatherInfo");
  viewElems.searchInput = getDomElem("searchInput");
  viewElems.searchButton = getDomElem("searchButton");
  viewElems.weatherSearchView = getDomElem("weatherSearchView");
  viewElems.weatherForecastView = getDomElem("weatherForecastView");
  viewElems.returnToSearchBtn = getDomElem("returnToSearchBtn");
  viewElems.weatherIcon = getDomElem("weatherIcon");
  viewElems.weatherCurrentTemp = getDomElem("weatherCurrentTemp");
  viewElems.weatherMaxTemp = getDomElem("weatherMaxTemp");
  viewElems.weatherMinTemp = getDomElem("weatherMinTemp");
};

const setupListeners = () => {
  viewElems.searchInput.addEventListener("keydown", onEnterSubmit);
  viewElems.searchButton.addEventListener("click", onClickSubmit);
  viewElems.returnToSearchBtn.addEventListener(
    "click",
    onClickrReturnToSearchBtn
  );
};

const initializeApp = () => {
  conectHTMLElems();
  setupListeners();
};

const onEnterSubmit = (event) => {
  if (event.key === "Enter") {
    fadeInOut();
    viewElems.mainContainer.style.opacity = "0";
    let city = viewElems.searchInput.value;
    getWeatherByCity(city).then((data) => console.log(data));
    setTimeout(() => {
      switchView();
      fadeInOut();
    }, 500);
  }
};
const onClickSubmit = () => {
  fadeInOut();
  let city = viewElems.searchInput.value;
  getWeatherByCity(city).then((data) => console.log(data));
  setTimeout(() => {
    switchView();
    fadeInOut();
  }, 500);
};

const onClickrReturnToSearchBtn = () => {
  fadeInOut();
  setTimeout(() => {
    switchView();
    fadeInOut();
  }, 500);
};

const fadeInOut = () => {
  if (
    viewElems.mainContainer.style.opacity === "1" ||
    viewElems.mainContainer.style.opacity === ""
  ) {
    viewElems.mainContainer.style.opacity = "0";
  } else {
    viewElems.mainContainer.style.opacity = "1";
  }
};

const switchView = () => {
  if (viewElems.weatherSearchView.style.display !== "none") {
    viewElems.weatherSearchView.style.display = "none";
    viewElems.weatherForecastView.style.display = "flex";
  } else {
    viewElems.weatherSearchView.style.display = "flex";
    viewElems.weatherForecastView.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", initializeApp);
