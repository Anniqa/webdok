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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  //Videoer og mute ikoner gemt i array
  let ourVideos = [
    document.getElementById('tekstVideo'),
    document.getElementById('pictureVideo')
];

let muteIcon = [
    '<img src="img/soundOn.svg" alt="sound icon">',
    '<img src="img/soundOff.svg" alt="sound icon">'
]

//Knap function til at pause og spille stemnings videoen med tekst og lyd
$('#topPauseButton').click(function(){
    if (ourVideos[0].paused) {
        ourVideos[0].play();
        $('#topPauseButton').html(muteIcon[0]);
    } else {
        ourVideos[0].pause();
        $('#topPauseButton').html(muteIcon[1]);
    }
});

//Function til at afspille lydinterview når man hover over billederne, og pause dem når man ikke gør
let student = [
    '#naja',
    '#mia',
    '#martin'
];

let soundInterview = [
    document.getElementById('arthurSound'),
    document.getElementById('amySound'),
    document.getElementById('sofusSound')
];

let studentPic = [
    $('#naja'),
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