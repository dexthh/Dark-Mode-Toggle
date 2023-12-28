function changeBackgroundColor() {
  let black = "#0d0d0d";
  let white = "#ffffff";
  let darkMode = document.getElementById("toggle");
  let darkModeButton = document.getElementById("darkModeButton");

  let bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;

  if (
    bodyBackgroundColor === "rgb(255, 255, 255)" ||
    bodyBackgroundColor === "#ffffff"
  ) {
    document.body.style.backgroundColor = black;
    document.body.style.color = white;

    darkMode.style.textAlign = "end";
    darkMode.style.borderColor = "#595959";

    darkModeButton.style.backgroundColor = "#737373";

    document.getElementById("lightModeIndicator").style.display = "none";

    document.getElementById("darkModeIndicator").style.display = "inline-block";
  } else if (
    bodyBackgroundColor === "rgb(13, 13, 13)" ||
    bodyBackgroundColor === "0d0d0d"
  ) {
    document.body.style.backgroundColor = white;
    document.body.style.color = "#000000";

    darkMode.style.textAlign = "start";
    darkMode.style.borderColor = "#737373";

    darkModeButton.style.backgroundColor = "#e6e6e6";

    document.getElementById("lightModeIndicator").style.display =
      "inline-block";

    document.getElementById("darkModeIndicator").style.display = "none";
  }
}
