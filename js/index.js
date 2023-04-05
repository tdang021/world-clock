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
