const viewElems = {};

const getDomElem = (id) => {
  return document.getElementById(id);
};

const conectHTMLElems = () => {
  viewElems.weatherInfo = getDomElem("weatherInfo");
  viewElems.searchInput = getDomElem("searchInput");
  viewElems.searchButton = getDomElem("searchButton");
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
};

const initializeApp = () => {
  conectHTMLElems();
  setupListeners();
};

const onEnterSubmit = () => {};
const onClickSubmit = () => {};

document.addEventListener("DOMContentLoaded", initializeApp);
