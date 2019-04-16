var fewdText = "Build the web you want to see. When you learn front-end development " +
              "— coding with HTML, CSS, and JavaScript — you can create any interactive" +
              " website you dream up to show off personal and professional projects. " +
              "Hone the skills you need in a front - end course."

var jsText = "Learn to code in JavaScript, the native language of the web used by developers " +
            "the world over. Build a single - page web app that persists user data and connects" +
            " to services like Twitter and Facebook via APIs. Learn the fundamentals of object - " +
            "oriented programming while receiving support from industry experts and a community of peers."

var wdiText = "Build rich, interactive, full-stack apps with key languages and dive into algorithms, " +
             "data structures, design patterns, APIs, and more. Get hands-on with HTML, CSS, JavaScript," +
             " Python, Django, Ruby on Rails, React, Angular, or SQL. Master how to discuss and use data " +
             "structures and algorithms to solve real-world problems."

$(document).ready(function(){

 // Gallery
 // When you click on '.gallery-tile'
 // get the background image of 'this' gallery-tile
 // set '#main-img' background image to the image
 $('.gallery-tile').on('click',changeGallery);

 function changeGallery(){
  var background = $(this).css('background-image');
  $('#main-img').css('background-image',background);
 }

 // Classes
 // when you click on a '.tab'
 // select the element with the class of 'selected' and remove the class 'selected'
 // add the class 'selected' to 'this' element
 // select the '#tab-conent' element
 // if 'this' tab has an id of 'fewd' set the text of the '#tab-content' to the fewdText
 // if it has an id of 'js' set it to the jsText
 // if it has an id of 'wdi' set it to the wdiText
 // HINT: use attr to get the id of the element http://api.jquery.com/attr/



$(".tab").on("click" , content);


function content(){
 $(".selected").removeClass("selected");
 $(this).addClass("selected");

 var selecteID= $(this).attr("id");

 if (selecteID==='fewd')
 {
   $("#tab-content").text(fewdText);
 }

 else if (selecteID==='js')
 {
   $("#tab-content").text(jsText);
 }
 else {
   $("#tab-content").text(wdiText);
 }

}


 // Instructors
 // when you click on '#jackie'
 // select '#jackie-info' and toggle the class 'show'
 // when you click on 'trevor'
 // select 'trevor-info' and toggle the class 'show'


$("#jackie").on("click", toggleJackie);

function toggleJackie(){
 $("#jackie-info").toggleClass("show");
}
$("#trevor").on("click", toggleTrevor);

function toggleTrevor(){
 $("#trevor-info").toggleClass("show");
}


 // BONUS (this will be a tough one!)
 // When the page loads, set the #main-img to a random image from the '.gallery-tile's
 // HINT: Look at Math.random() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var randomIndex = Math.floor(Math.random()*14) + 1;

var randomImage= $(".gallery-tile:nth-of-type("+ randomIndex+ ")").css("background-image")
$("#main-img").css("background-image", randomImage);

})//don't write below