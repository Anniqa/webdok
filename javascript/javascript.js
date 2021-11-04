var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
  //Videoer og mute ikoner gemt i array
  let ourVideos = [
    document.getElementById('tekstVideo'),
    document.getElementById('pictureVideo')
];

let studentPic = [
    $('#arthurPic'),
    $('#amyPic'),
    $('#sofusPic')
];

function picAnimation (picToAnimate) {
    picToAnimate.css({
        "width": "100%",
        "transform": "rotate(5deg)",
        "transition-duration": "1s"
    });
}

function resetPic (picToReset) {
    picToReset.css({
        "width": "90%",
        "transform": "rotate(0deg)",
        "transition-duration": "1s"
    });
}

//Arthur interview
$(student[0]).mouseover(function(){
    soundInterview[0].play();
    picAnimation(studentPic[0]);
});
$(student[0]).mouseout(function(){
    soundInterview[0].pause();
    resetPic(studentPic[0]);
});

//Amy interview
$(student[1]).mouseover(function(){
    soundInterview[1].play();
    picAnimation(studentPic[1]);
});
$(student[1]).mouseout(function(){
    soundInterview[1].pause();
    resetPic(studentPic[1]);
});

//Sofus interview
$(student[2]).mouseover(function(){
    soundInterview[2].play();
    picAnimation(studentPic[2]);
});
$(student[2]).mouseout(function(){
    soundInterview[2].pause();
    resetPic(studentPic[2]);
});



// ... din kode slut ...

// denne line må ikke slettes

 // Array slideshow
 var arr = ['Mangfoldighed', 'Fællesskab', 'Personlig udvikling', 'Respekt', 'Personlig integritet', 'Tryghed'];
 var i = 0;
 var heading = document.querySelector('#heading');

 function slide() {
     // rækker efter class i HTML
     heading.innerHTML = arr[i];
     // opacity til 1
     heading.style.opacity = 1;

     // efter 2 sekunder kalder næste element i array
     setTimeout(next, 2000);
 }

 function next() {
     // formindske index for næste element i array
     i++;

     if (i > arr.length - 1) {
         i = 0;
     }

     // opacity til 0
     heading.style.opacity = 0;

     // efter 1 sekund kalder slide fn igen
     setTimeout(slide, 1000);
 }

 slide();

 // Footer
 let runAnimation = function () {
    animation.classList.add("animate");
    // Starter funktionen efter et delay på 4000 millisekunder
    setTimeout(clearClass, 4000);
}
// Start animationen ved scroll
window.addEventListener("scroll", runAnimation);