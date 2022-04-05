// Henter elementer fra HTML-filen 
let stars = document.getElementById('stars');
let text = document.getElementById('text');
let mountains_front = document.getElementById('mountains_front');
let dream = document.getElementById('dream');
let video = document.getElementById('video');
let video2 = document.getElementById('video2');
let lyd = document.getElementById('lyd');
let lyd2 = document.getElementById('lyd2');


// Her bruges de forskellige listede elemtenter fra før til at lave et animeret grafisk element på siden 
window.addEventListener('scroll', function(){
    // Her sætten værdien "value" til placeringen på sidens y-akse, hvorefter man trækker alt over dream-elementets top fra
    let value = window.scrollY - dream.offsetTop;
    // Her bruges elementerne i forbindelse med y-værdien på siden og en bevægelse målt i px så elementerne bevæger sig over skærmen når man scroller
    stars.style.left = value * 0.25 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.paddingBottom = value * 7 + 'px';
    text.style.paddingRight = value * 7 + 'px';

   
})




// Her ses en funktion til videoen, hvor lyden kan startes og slukkes
// Ydermere ses det, hvordan ikonet, hvorpå man tænder og slukker lyden, ændres alt efter om man trykker for at tænde eller slukke efor lyden
  function toggleSound(){
    console.log(video)
    video.muted = !video.muted
    lyd.src = video.muted ? "images/lydaf.png" : "images/lyd.png"
  }

//  Samme funktioner som ved den overstående video, blot for video nr. 2
  function toggleSound2(){
    console.log(video)
    video2.muted = !video2.muted
    lyd2.src = video2.muted ? "images/lydaf.png" : "images/lyd.png"
  }

