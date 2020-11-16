"use strict";

var view = {
  imagesLength: 3,
  displayImage: function displayImage(image) {
    var changeableImage = document.getElementById("changeable-image");
    var backgroundOverlay = document.getElementById("background-overlay");
    changeableImage.src = "./images/" + image;
    backgroundOverlay.style.background = "url(" + "./images/" + image + ")";
    backgroundOverlay.style.backgroundAttachment = "fixed";
    backgroundOverlay.style.backgroundPosition = "center";
    backgroundOverlay.style.backgroundRepeat = "no-repeat";
    backgroundOverlay.style.backgroundSize = "cover";
  }
};

window.onload = function () {
  // Get the modal
  var nextButton = document.getElementById("next");
  var prevButton = document.getElementById("prev");
  var index = 0;
  var modal = document.getElementById('id01');

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  nextButton.onclick = function () {
    index++;

    if (index > view.imagesLength) {
      index = 0;
    }

    setTimeout(function () {
      view.displayImage(index + ".jpg");
    }, 250);
  };

  prevButton.onclick = function () {
    index--;

    if (index < 0) {
      index = view.imagesLength;
    }

    setTimeout(function () {
      view.displayImage(index + ".jpg");
    }, 250);
  };
};