let flag = 0;
let lifes = 5;
let speed = 0;
let musicTime = 0;
let currScore = 0;
let finalScore = 0;
let trackSpeed = 1;
let isStart = false;
let gameOver = false;

let isCrash1 = false;
let isCrash2 = false;
let isCrash3 = false;

let bgMusic = new Audio();
bgMusic.src = "./src/music/bg.mp3";

let gameOverMusic = new Audio();
gameOverMusic.src = "./src/music/gameOver.mp3";

setInterval(runningGame, 20);
setInterval(checkLifes, 200);

let life = document.getElementById("lifes");
let score = document.getElementById("score");
let black = document.getElementById("black");
let start = document.getElementById("startBtn");
let info = document.getElementById("info");
let highScoreVal = document.getElementById("highScore");
let highScoreContainer = document.getElementById("highScoreContainer");

let track1 = document.getElementById("track1");
let track2 = document.getElementById("track2");
let s_track = document.getElementById("start-track");
let road = document.getElementById("road");

let car1 = document.getElementById("car1");
let car2 = document.getElementById("car2");
let car3 = document.getElementById("car3");
let raceCar = document.getElementById("car");
start.addEventListener("click", startTheGame);

// highScore Setting
let tempHighScore = 0;
try {
  tempHighScore = localStorage.getItem("highScore");
} catch (e) {
  tempHighScore = 0;
}
highScoreVal.innerHTML = tempHighScore;

function startTheGame() {
  flag = 1;
  lifes = 5;
  checkLifes();
  currScore = 0;
  finalScore = 0;
  isStart = true;
  gameOver = false;
  score.innerHTML = 0;

  isCrash1 = false;
  isCrash2 = false;
  isCrash3 = false;

  var btnMusic = new Audio();
  btnMusic.src = "./src/music/btn.mp3";
  btnMusic.play();

  bgMusic = new Audio();
  bgMusic.src = "./src/music/bg.mp3";
  bgMusic.play();

  start.classList.add("removeBtn");
  info.classList.add("gameOverScore");
  black.style.visibility = "hidden";
  highScoreContainer.style.top = 130 + "vh";

  // track
  trackSpeed = 5.0;
  let currSpeedTrack = trackSpeed + "s";
  track1.style.animationDuration = currSpeedTrack;
  track2.style.animationDuration = currSpeedTrack;
  track2.style.animationDelay = trackSpeed / 2 + "s";

  track1.classList.add("track1Anime");
  track2.classList.add("track2Anime");
  s_track.classList.add("startTrackAnime");

  // cars
  let carSpeed = trackSpeed / 2;
  let currSpeedCar = carSpeed + "s";
  car1.style.animationDuration = currSpeedCar;
  car2.style.animationDuration = currSpeedCar;
  car3.style.animationDuration = currSpeedCar;

  car1.classList.add("carRunningAnime");
  car2.classList.add("carRunningAnime");
  car3.classList.add("carRunningAnime");

  car1.src = "./src/image/car1.png";
  car2.src = "./src/image/car2.png";
  car3.src = "./src/image/car3.png";

  car1.style.transform = "rotateX(180deg) scale(1)";
  car2.style.transform = "rotateX(180deg) scale(1)";
  car3.style.transform = "rotateX(180deg) scale(1)";

  // car position
  var randNum = Math.floor(Math.random() * 9.9) * 10;
  car1.style.left = randNum + "%";
  car2.style.left = ((randNum + 3) % 10) + "%";
  car3.style.left = ((randNum + 8) % 10) + "%";
}

// check functions
function checkCar1() {
  var raceCarL = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("left")
  );
  var raceCarT = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("top")
  );
  var car1L = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  var car1T = parseInt(window.getComputedStyle(car1).getPropertyValue("top"));

  if (
    raceCarL <= car1L + 40 &&
    car1L <= raceCarL + 40 &&
    raceCarT <= car1T + 90 &&
    car1T <= raceCarT + 90
  ) {
    let carCrashMusic = new Audio();
    carCrashMusic.src = "./src/music/crash.mp3";
    carCrashMusic.play();

    car1.classList.add("carCrash");
    if (--lifes <= 0) return true;

    isCrash1 = true;
    car1.src = "./src/image/fire.gif";
    car1.style.transform = "scale(1.5)";

    return true;
  }
  return false;
}

function checkCar2() {
  var raceCarL = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("left")
  );
  var raceCarT = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("top")
  );
  var car2L = parseInt(window.getComputedStyle(car2).getPropertyValue("left"));
  var car2T = parseInt(window.getComputedStyle(car2).getPropertyValue("top"));

  if (
    raceCarL <= car2L + 40 &&
    car2L <= raceCarL + 40 &&
    raceCarT <= car2T + 90 &&
    car2T <= raceCarT + 90
  ) {
    let carCrashMusic = new Audio();
    carCrashMusic.src = "./src/music/crash.mp3";
    carCrashMusic.play();

    car2.classList.add("carCrash");
    if (--lifes <= 0) return true;
    isCrash2 = true;
    car2.src = "./src/image/fire.gif";
    car2.style.transform = "scale(1.5)";

    return true;
  }
  return false;
}

function checkCar3() {
  var raceCarL = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("left")
  );
  var raceCarT = parseInt(
    window.getComputedStyle(raceCar).getPropertyValue("top")
  );
  var car3L = parseInt(window.getComputedStyle(car3).getPropertyValue("left"));
  var car3T = parseInt(window.getComputedStyle(car3).getPropertyValue("top"));

  if (
    raceCarL <= car3L + 40 &&
    car3L <= raceCarL + 40 &&
    raceCarT <= car3T + 90 &&
    car3T <= raceCarT + 90
  ) {
    let carCrashMusic = new Audio();
    carCrashMusic.src = "./src/music/crash.mp3";
    carCrashMusic.play();

    if (--lifes <= 0) return true;
    isCrash3 = true;
    car3.src = "./src/image/fire.gif";
    car3.style.transform = "scale(1.5)";

    return true;
  }
  return false;
}

// lifes
function checkLifes() {
  if (lifes <= 0 || !isStart) {
    life.innerHTML = "*****";
  } else {
    let l = "";
    for (let i = 0; i < lifes; i++) l += "*";
    life.innerHTML = l;
  }

  let lifeColor = "";
  switch (lifes) {
    case 5:
      lifeColor = "rgba(25, 255, 0)";
      break;
    case 4:
      lifeColor = "rgba(155, 255, 0)";
      break;
    case 3:
      lifeColor = "rgba(255, 251, 0)";
      break;
    case 2:
      lifeColor = "rgba(255, 155, 0)";
      break;
    case 1:
      lifeColor = "rgba(255, 0, 0)";
      break;
    default:
      lifeColor = "rgba(140, 5, 245)";
  }

  life.style.color = lifeColor;
  scoreCount();
}

// score count
function scoreCount() {
  currScore =
    (Math.floor(6 - trackSpeed) + parseInt(score.innerText)) * flag +
    finalScore;
  score.innerHTML = currScore;
}

// game Over
function isGameOver() {
  if (lifes <= 0) {
    bgMusic.pause();
    gameOverMusic.play();

    black.style.visibility = "visible";
    info.classList.remove("gameOverScore");
    finalScore = parseInt(score.innerText);
    start.classList.remove("removeBtn");
    highScoreContainer.style.top = 80 + "%";
    gameOver = true;
    isStart = false;
    flag = 0;

    track1.classList.remove("track1Anime");
    track2.classList.remove("track2Anime");
    s_track.classList.remove("startTrackAnime");

    car1.classList.remove("carRunningAnime");
    car2.classList.remove("carRunningAnime");
    car3.classList.remove("carRunningAnime");

    // setting highScore
    tempHighScore = 0;
    try {
      tempHighScore = localStorage.getItem("highScore");
    } catch (e) {
      tempHighScore = 0;
    }

    if (finalScore > tempHighScore) {
      highScoreVal.innerHTML = finalScore;
      localStorage.setItem("highScore", finalScore);
    }
  }
}

// run ---------------------------------------------------------------------------------------------------------------
function runningGame() {
  if (!gameOver) {
    // check for crash
    if (!isCrash1) checkCar1();
    if (!isCrash2) checkCar2();
    if (!isCrash3) checkCar3();

    // track speed
    if (trackSpeed > 1) trackSpeed = trackSpeed - 0.0001;
    speed = 35 + 35 * (1 - trackSpeed / 5);

    let currSpeedTrack = trackSpeed + "s";
    track1.style.animationDuration = currSpeedTrack;
    track2.style.animationDuration = currSpeedTrack;
    track2.style.animationDelay = trackSpeed / 2 + "s";

    // cars speed
    let carSpeed = trackSpeed / 2;
    let currSpeedCar = carSpeed + "s";
    car1.style.animationDuration = currSpeedCar;
    car2.style.animationDuration = currSpeedCar;
    car3.style.animationDuration = currSpeedCar;

    // game over
    isGameOver();
  }
}

// randomly car position
car1.addEventListener("animationiteration", function () {
  var randNum = Math.floor(Math.random() * 9.9);
  car1.style.left = randNum * 10 + "%";
  car1.style.transform = "rotateX(180deg) scale(1)";
  car1.src = "./src/image/car1.png";
  isCrash1 = false;
});

car2.addEventListener("animationiteration", function () {
  var randNum = Math.floor(Math.random() * 9.9);
  car2.style.left = randNum * 10 + "%";
  car2.style.transform = "rotateX(180deg) scale(1)";
  car2.src = "./src/image/car2.png";
  isCrash2 = false;
});

car3.addEventListener("animationiteration", function () {
  var randNum = Math.floor(Math.random() * 9.9);
  car3.style.left = randNum * 10 + "%";
  car3.style.transform = "rotateX(180deg) scale(1)";
  car3.src = "./src/image/car3.png";
  isCrash3 = false;
});

bgMusic.addEventListener("ended", () => {
  if (isStart) {
    bgMusic.play();
  }
});

// race car movement
window.addEventListener("keydown", function (e) {
  if (isStart) {
    var btnMusic = new Audio();
    btnMusic.src = "./src/music/btn.mp3";
    let speed = Math.floor(35 + 35 * (1 - trackSpeed / 5));

    // right arrow
    if (e.keyCode == "39" || e.keyCode == "68") {
      var raceCarLeft = parseInt(
        window.getComputedStyle(raceCar).getPropertyValue("left")
      );
      if (raceCarLeft + speed < 346)
        raceCar.style.left = raceCarLeft + speed + "px";
      else if (raceCarLeft + speed >= 346) raceCar.style.left = 346 + "px";
      btnMusic.play();
    }

    // left arrow
    if (e.keyCode == "37" || e.keyCode == "65") {
      var raceCarRight = parseInt(
        window.getComputedStyle(raceCar).getPropertyValue("left")
      );
      if (raceCarRight - speed > 4)
        raceCar.style.left = raceCarRight - speed + "px";
      else if (raceCarRight - speed <= 4) raceCar.style.left = 4 + "px";
      btnMusic.play();
    }

    // up arrow
    if (e.keyCode == "38" || e.keyCode == "87") {
      var raceCarUp = parseInt(
        window.getComputedStyle(raceCar).getPropertyValue("top")
      );
      if (raceCarUp - speed > 10) raceCar.style.top = raceCarUp - speed + "px";
      else if (raceCarUp - speed <= 10) raceCar.style.top = 10 + "px";
      btnMusic.play();
    }

    // down arrow
    if (e.keyCode == "40" || e.keyCode == "83") {
      var raceCarDown = parseInt(
        window.getComputedStyle(raceCar).getPropertyValue("top")
      );
      if (raceCarDown + speed < 620)
        raceCar.style.top = raceCarDown + speed + "px";
      else raceCar.style.top = 620 + "px";
      btnMusic.play();
    }
  }
});

// loading... ---------------------------------------------------------

setTimeout(() => {
  let loadingPage = document.getElementById("lodingPage");
  loadingPage.style.zIndex = -5;
  loadingPage.style.opacity = 0;

  let loadingMusic = new Audio();
  loadingMusic.src = "./src/music/loading.mp3";
  loadingMusic.play();

  alert(
    "Racing Moto:\n\tDouble click to full screen mode!\n\nPress OK to continue :)"
  );
  document.addEventListener("dblclick", () => {
    document.documentElement.requestFullscreen().catch(console.log);
  });
}, 15000);
