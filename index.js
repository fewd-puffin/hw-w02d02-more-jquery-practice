/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 */
$(document).ready(function(){
/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery,
 * and changed the color to blue.
 */
/**
* Question 2:
* When button 1 is clicked, select all <h2> elements on this page,
* and change the text to say your name.
*/
/**
* Question 3:
* When button 1 is clicked, select the ordered list item that has the class "falseFact".
* Using jQuery change the content to read "True Fact".
*/
$('#button1').on('click', changePrColor);
function changePrColor() {
    console.log('Q1');
    $('p').css("color","blue");
    if ( $('li').hasClass('falseFact') == true ){
        console.log('Q3');
        $('.falseFact').text('True Fact');
       }
    console.log('Q2');
    $('h2').text('Amani');
}
 
/*$('#button1').on('click', changeH2text);
function changeH2text() {
    console.log('Q2');
    $('h2').text('Amani');
}*/

/*$('#button1').on('click', OrListitem);
function OrListitem(){
   if ( $('li').hasClass('falseFact') == true ){
    console.log('Q3');
    $('.falseFact').text('True Fact');
   }
}*/

/**
* Question 4:
* When button 2 is clicked, change the background color of the whole page to "pink"
*/
/**
* Question 5:
* When button 2 is clicked, change the color of all h2's to "green"
*/
$('#button2').on('click', PageBackColor);
function PageBackColor(){
    console.log('Q4');
   $('body').css('background-color','pink');
   console.log('Q5');
    $('h2').css('color','green');
}

/**
* Question 6:
* When button 2 is clicked, change the html content of all "blockquotes"
* to be "<span>no quote</span>" 
*/
$('#button2').on('click', ChangeBlock);
function ChangeBlock(){
console.log('Q6');
$('blockquote').replaceWith( "<div>" + 'on qutoe' + "</div>" );
//$('blockquote').contents().unwrap().wrap('<span/>');
//$('<span>').text('no quote');
} 
/**
* Question 7:
* When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
*/
$('#button3').on('click',ChangeText);
function ChangeText(){
 $('h1').text('jQuery Ninj');
 $(".city").attr("src", "http://lorempixel.com/g/500/400/food"); //When button 3 is clicked the image with class (city) change its attrabuite src
}

/**
* Question 8:
* Have the following code execute when button 3 is clicked
* Write a JavaScript comment with a description of what happened
* $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
*/

/**
* Question 9:
* When button 3 is clicked, select all paragraphs on the page
* and change the color to blue and font to Georgia.
* Bonus: Try to do this with only one jQuery call.
* $("selector").css({attribute: "value", attribute: "value"});
*/
$('#button3').click(function(){$('p').css({color: "blue", 'font-family': "Georgia"});});

//$('p').css({color: "blur", font: "Georgia"}));
})