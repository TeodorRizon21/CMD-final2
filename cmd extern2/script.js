function openInfoBox() {
    document.getElementById("info-box").classList.remove("hidden");
  }
  
  function closeInfoBox() {
    document.getElementById("info-box").classList.add("hidden");
  }

  const scrollers = document.querySelectorAll('.scroller');
  if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation();
  }

  function addAnimation(){
    scrollers.forEach(scroller => {
      scroller.setAttribute('data-animated', true);
    })
  }

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  