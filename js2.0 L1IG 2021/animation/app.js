execute = function() {
  imgshow = document.querySelector(".contenu");
  image = Array.from(document.querySelectorAll(".img"));

  i = -1;

  play();
};
play = function() {
  setTimeout(function() {
    imgshow.style.animation = "fadeIn 2s";
    imgshow.style.background = "url(" + image[i].src + ") center";
    imgshow.style.backgroundSize = "cover";
  }, 2000);

  i++;

  if (i == image.length) {
    i = 0;
  }

  setTimeout(play, 4000);
  imgshow.style.animation = "fadeOut 2s";
};
execute();
