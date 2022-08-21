const actions = [
  "oneOnLeetcode",
  "oneChapterInKindle",
  "writeAboutOneThing",
  "implementOneDataStructure",
  "implementOneAlgorithm",
  "implementOneCssProject",
  "oneVideo50Projects50Days",
  "oneVideoJS30",
  "oneHourForPortfolio",
  "30MinExercise",
  "30MinArijitSong",
  "30MinOneNewMusicGenere",
  "30MinPracticeEnglishSpeaking",
  "buildOneAppByYourself",
  "oneUntoolsTool",
  "noTwitterToday",
  "oneKdramaEpisode",
  "30MinVSCodeVimPractice",
  "30MinVSCodeFMCourse",
  "30MinTyping",
];

const showTime = [];
let how = 3;
while (how > 0) {
  const heroTime = Math.floor(Math.random() * actions.length);
  showTime.push(actions[heroTime]);
  how--;
}
console.log(showTime);
const root = document.getElementById("root");
root.innerHTML = showTime
  .map((item) => {
    return `<div class="task">${item}</div>`;
  })
  .join("");
function refreshPage() {
  window.location.reload();
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", refreshPage);
