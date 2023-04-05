let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
function losAngelesDisplayTime() {
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do[,] YYYY");

  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h[:]mm[:]ss [<small>]A[</small>]");
}
losAngelesDisplayTime();
setInterval(losAngelesDisplayTime, 1000);

let seoulElement = document.querySelector("#seoul");
let seoulDateElement = seoulElement.querySelector(".date");

seoulDateElement.innerHTML = moment()
  .tz("Asia/Seoul")
  .format("MMMM Do[,] YYYY");

function seoulDisplayTime() {
  let seoulTimeElement = seoulElement.querySelector(".time");
  seoulTimeElement.innerHTML = moment()
    .tz("Asia/Seoul")
    .format("h[:]mm[:]ss [<small>]A[</small]");
}
seoulDisplayTime();
setInterval(seoulDisplayTime, 1000);

function showSelectCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do[,] YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h[:]mm[:]ss [<small>]A[</small>]");

  let selectNewCity = document.querySelector("#cities");
  let newCity = cityTimeZone.replace("_", " ").replace("_", " ").split("/");
  changeCity = selectNewCity.querySelector(".city");
  selectNewCity.innerHTML = `  
  <div class="city">
          <div>
            <h2>${newCity[1]}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`;
}

let selectCity = document.querySelector("#select-city");
selectCity.addEventListener("change", showSelectCity);
