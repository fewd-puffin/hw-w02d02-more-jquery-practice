/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery,
 * and changed the color to blue.
 */
 function pragrav(){
     $('p').css('color','blue');
 }
 


/**
* Question 2:
* When button 1 is clicked, select all <h2> elements on this page,
* and change the text to say your name.

*/
function changetext(){
    $('h2').text('say your name');
}

/**
* Question 3:
* When button 1 is clicked, select the ordered list item that has the class "falseFact".
* Using jQuery change the content to read "True Fact".
*/
function order(){
    $('.falseFact').text('true fact')

}

/**
* Question 4:
* When button 2 is clicked, change the background color of the whole page to "pink"
*/
function pink(){
    $('body').css('color','pink');
}
 
/**
* Question 5:
* When button 2 is clicked, change the color of all h2's to "green"
*/
function green (){
    $('h2').css('color','green')
}


/**
* Question 6:
* When button 2 is clicked, change the html content of all "blockquotes"
* to be "<span>no quote</span>"
*/
function spann(){
    $('blockquot').html('<span>no quote</span>')
}

/**
* Question 7:
* When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
*/
function ninja(){
    $('h1').text('jQuery Ninja');
}

/**
* Question 8:
* Have the following code execute when button 3 is clicked
* Write a JavaScript comment with a description of what happened
* $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
*/
function City(){
    $('.city').attr('src','http://lorempixel.com/g/500/400/food');
}
//the image of city it will change to new one 
/**
* Question 9:
* When button 3 is clicked, select all paragraphs on the page
* and change the color to blue and font to Georgia.
* Bonus: Try to do this with only one jQuery call.
* $("selector").css({attribute: "value", attribute: "value"});
*/
function font(){
    $('p').css('color','blue'),
              ('font-family',' Georgia');
   
}

 

    var id = $(this).attr('id');
 
if ('id'==='#button1'){
    $('#button1').on('click',pragrav())
    $('#button1').on('click',changetext())
    $('#button1').on('click',order())

  
  }
  else if ('id'==='#button2'){
    $('#button2').on('click',pink())
    $('#button2').on('click',green())
    $('#button2').on('click',spann())
  }
  else {
      $('#button3').on('click',ninja())
      $('#button3').on('click',City())
      $('#button3').on('click',font())
  }
 


