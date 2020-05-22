window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("menu").style.backgroundColor = "#293540";
  } else {
    document.getElementById("menu").style.backgroundColor = "transparent";
  }
}