
var slideIndex = 0; // Diashow kode i java
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
  setTimeout(showSlides, 2000); // Change image every 4 seconds
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

// start audio/lyd fra hiphopeleverne på skolen


    //Naja
    document.getElementById('play1').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio1');
        if (audio1.paused) {
            audio1.play();
        } else {
            audio1.pause();
        }

    });



    //Mia

    document.getElementById('play2').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio2');
        if (audio2.paused) {
            audio2.play();
        } else {
            audio2.pause();
        }

    });


    //Martin

    document.getElementById('play3').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio3');
        if (audio3.paused) {
            audio3.play();
        } else {
            audio3.pause();
        }

    });


    //slut audio/lyd fra eleverne på hiphoplinjen

    // start hide/show <p> when clicked on
    $('h2').click(function () {
        $('p').toggle(0);
    });

    // slut hide/show <p> when clicked on

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

