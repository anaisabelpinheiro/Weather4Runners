function refresh() {
  document.getElementById("tempmax2a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 20) + "</strong>";
    document.getElementById("tempmax3a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 20) + "</strong>";
    document.getElementById("tempmax4a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 20) + "</strong>";
    document.getElementById("tempmax5a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 20) + "</strong>";
    document.getElementById("tempmax6a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 20) + "</strong>";

    document.getElementById("tempmin2a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 0) + "</strong>";
    document.getElementById("tempmin3a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 0) + "</strong>";
    document.getElementById("tempmin4a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 0) + "</strong>";
    document.getElementById("tempmin5a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 0) + "</strong>";
    document.getElementById("tempmin6a")
    .innerHTML = "<strong>" + Math.floor((Math.random() * 10) + 0) + "</strong>";
}
