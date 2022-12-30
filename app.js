function update() {
  const container = document.getElementById("banner");
  const elem = document.getElementById("leadimg");
  const rect = elem.getBoundingClientRect();
  const wrap = container.getBoundingClientRect();
  var opac = 100;
  if (86 > rect.bottom - wrap.top) {
    opac = (rect.bottom - wrap.top) / 2.5 + 37;
    if (opac <= 70) {
      container.style.opacity = "70%";
    } else {
      container.style.opacity = opac.toString() + "%";
    }
  } else {
    opac = (rect.bottom - wrap.top) / 2.5 + 37;
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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}