function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  if (string.toUpperCase() === string) {
    console.log(string);
  }else {
    console.log(string.toUpperCase());
  }
}
