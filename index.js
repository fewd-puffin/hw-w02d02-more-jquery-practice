/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery,
 * and changed the color to blue.
 */
$('#button1').on('click',changesOfButton1);
function changesOfButton1(){
    $('p').css('color','blue');
    $('h2').text('raghad');
    $('.falseFact').text('True fact');
}

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


/**
* Question 4:
* When button 2 is clicked, change the background color of the whole page to "pink"
*/
$('#button2').on('click',changesOfButton2);
function changesOfButton2(){
    $('body').css('background-color','pink');
    $('h2').css('color','green');
    $( 'blockquote').replaceWith( '<span> no quote </span>');
        
}
/**
* Question 5:
* When button 2 is clicked, change the color of all h2's to "green"
*/

/**
* Question 6:
* When button 2 is clicked, change the html content of all "blockquotes"
* to be "<span>no quote</span>"
*/

/**
* Question 7:
* When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
*/
$('#button3').on('click',changesOfButton3);

function changesOfButton3(){
    $('header h1').text('jQuery Ninja');
    //this line set the  new image source to the images that has class .city 
    $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
  
    

    $("p").css(  { "color": "blue" , "font-family": "georgia"} )
    
   
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
