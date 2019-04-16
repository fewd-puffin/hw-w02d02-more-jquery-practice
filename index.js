/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery,
 * and changed the color to blue.
 */
$('#button1').on('click',Button101);
$('#button1').on('click',Button102);
$('#button1').on('click',Button103);
$('#button2').on('click',Button201);
$('#button2').on('click',Button202);
$('#button2').on('click',Button203);
$('#button3').on('click',Button301);
$('#button3').on('click',Button302);
$('#button3').on('click',Button303);

function Button101(){
    $('p').css('color','blue');
}

/**
* Question 2:
* When button 1 is clicked, select all <h2> elements on this page,
* and change the text to say your name.
*/

function Button102(){
    $('h2').append(' Aljawharah Alqahtani ' );
}
/**
* Question 3:
* When button 1 is clicked, select the ordered list item that has the class "falseFact".
* Using jQuery change the content to read "True Fact".
*/

function Button103(){
    $('li').text('True Fact' );
}

/**
* Question 4:
* When button 2 is clicked, change the background color of the whole page to "pink"
*/
function Button201(){
    $('body').css('background-color','pink');
}
/**
* Question 5:
* When button 2 is clicked, change the color of all h2's to "green"
*/
function Button202(){
    $('h2').css('color','green');
}
/**
* Question 6:
* When button 2 is clicked, change the html content of all "blockquotes"
* to be "<span>no quote</span>"
*/
function Button203(){
    $('blockquotes').text('<span>no quote</span>' );
}
/**
* Question 7:
* When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
*/
function Button301(){
    $('h1').text('jQuery Ninja' );
}

/**
* Question 8:
* Have the following code execute when button 3 is clicked
* Write a JavaScript comment with a description of what happened
* $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
*/
function Button302(){
    $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
}
// the images are changing every click 
/**
* Question 9:

* When button 3 is clicked, select all paragraphs on the page
* and change the color to blue and font to Georgia.
* Bonus: Try to do this with only one jQuery call.
* $("selector").css({attribute: "value", attribute: "value"});
*/
function Button303(){
$('p').css({'color':"blue", 'font-family':'Georgia'});

}