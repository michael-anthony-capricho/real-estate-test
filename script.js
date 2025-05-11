const carousel = document.getElementById('carouselExampleIndicators');

  carousel.addEventListener('slide.bs.carousel', function (event) {
    const currentIndex = event.to; 

    if (currentIndex == 0) {
        document.getElementById("first-slide").style.display="inline";
        document.getElementById("second-slide").style.display="none";
        document.getElementById("third-slide").style.display="none";
    } 
    else if (currentIndex == 1) {
        document.getElementById("first-slide").style.display="none";
        document.getElementById("second-slide").style.display="inline";
        document.getElementById("third-slide").style.display="none";
    }
    else if (currentIndex == 2) {
        document.getElementById("first-slide").style.display="none";
        document.getElementById("second-slide").style.display="none";
        document.getElementById("third-slide").style.display="inline";

    }
  
  });


  