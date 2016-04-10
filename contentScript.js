let nyancat = chrome.extension.getURL('nyancat.gif');
let imageTag = "<img id=\"nyancat\" src=\"" + nyancat + "\" //>";
$("body").append(imageTag);
const NYAN_HEIGHT = 168;
const NYAN_WIDTH = 272;
const NYAN_START = "-" + NYAN_WIDTH + "px";
const NYAN_STOP = String(screen.width + NYAN_WIDTH) + "px";

let timer = setInterval(runNyanCat, 5000);

function runNyanCat() {
  let numNyans = $(window).height() / NYAN_HEIGHT;
  let nyanHeight = Math.floor((Math.random() * numNyans)) * NYAN_HEIGHT;
  let startPosition = {
    "left": NYAN_START,
    "top": "" + nyanHeight + "px"
  }
  $('#nyancat').css(startPosition);
  $('#nyancat').animate({ left: NYAN_STOP }, 3000, "linear");
}
