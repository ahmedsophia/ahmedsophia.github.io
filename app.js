function update() {
  const container = document.getElementById("banner");
  const elem = document.getElementById("leadimg");
  const rect = elem.getBoundingClientRect();
  const wrap = container.getBoundingClientRect();
  var opac = 100;
  if (60 > rect.bottom - wrap.top) {
    opac = (rect.bottom - wrap.top) / 2.5 + 77;
    if (opac <= 70) {
      container.style.opacity = "70%";
    } else {
      container.style.opacity = opac.toString() + "%";
    }
  } else {
    opac = (rect.bottom - wrap.top) / 2.5 + 77;
    if (opac >= 100) {
      container.style.opacity = "100%";
    } else {
      container.style.opacity = opac.toString() + "%";
    }
  }
}

document.addEventListener("scroll", update);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  $('.vids').each(function(){this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')});
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

function currentSlide1(n) {
  showSlides1((slideIndex1 = n));
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("demo1");
  let captionText = document.getElementById("caption1");
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  $('.vids1').each(function(){this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')});
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
  captionText.innerHTML = dots[slideIndex1 - 1].alt;
}