let nyancat = chrome.extension.getURL('nyancat.gif');
let imageTag = "<img id=\"nyancat\" src=\"" + nyancat + "\" //>";
$("body").append(imageTag);
const MAX_NYAN_HEIGHT = 168;
const MAX_NYAN_WIDTH = 272;
const NYAN_START = "-" + MAX_NYAN_WIDTH + "px";
const NYAN_STOP = (screen.width + MAX_NYAN_WIDTH) + "px";
const MIN_SECONDS = 5;
const MAX_SECONDS = 60;

setTimeout(runNyanCat, getRandomArbitrary(MIN_SECONDS * 1000, MAX_SECONDS * 1000));

// Recursively run a Nyan Cat across your screen at (pseudo)random intervals.
function runNyanCat() {
  let nyanTop = getNyanTop(MAX_NYAN_HEIGHT);
  let nyanWidth = getNyanWidth(MAX_NYAN_WIDTH);

  let nyanCSS = {
    "left": NYAN_START,
    "top": nyanTop + "px",
    "width": nyanWidth,
    "height": "auto"
  }

  $('#nyancat').css(nyanCSS);
  $('#nyancat').animate({ left: NYAN_STOP }, 3500, "linear");
  setTimeout(runNyanCat, getRandomArbitrary(MIN_SECONDS * 1000, MAX_SECONDS * 1000));
}

// Get a pseudorandom number between min and max.
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Get "distance" away from the screen that the kitty is running.
function getNyanWidth(maxWidth) {
  let nyanWidth;
  if (Math.random() > 0.5) {
    return getRandomArbitrary(0.4 * maxWidth, maxWidth);
  } else {
    return nyanWidth = maxWidth;
  }
}

// Get the height on the screen that kitty will run.
function getNyanTop(nyanHeight) {
  // Run in a line between half off the top to half off the bottom of the screen (at maximum size).
  return Math.floor(Math.random() *
                     ($(window).height() + nyanHeight) -
                     (.5 * nyanHeight));
}
