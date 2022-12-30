function update() {
  const container = document.getElementById("banner");
  const elem = document.getElementById("leadimg");
  const rect = elem.getBoundingClientRect();
  const wrap = container.getBoundingClientRect();
  var opac = 100;
  if(86 > rect.bottom - wrap.top){
    opac = (rect.bottom - wrap.top)/2.5+37;
    if(opac<= 70){
      container.style.opacity = '70%';
    }
    else{
      container.style.opacity = opac.toString() + '%';
    }
  }
  else{
    opac = (rect.bottom - wrap.top)/2.5+37;
    if(opac>= 100){
      container.style.opacity = '100%';
    }
    else{
      container.style.opacity = opac.toString() + '%';
    }
  }

}

document.addEventListener("scroll", update);