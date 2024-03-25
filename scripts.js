document.addEventListener("DOMContentLoaded", function() {
    var aboutLink = document.getElementById("about-link");
    var visionSection = document.getElementById("vision");
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Sayfa yenilenmesini engellemek için
  
      // Vizyon bölümüne kaydırma işlemi
      visionSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  