#(document).ready(function() {
$('#toDo').submit(function(e) {
  e.preventDefault();
  var todoInput= $('#text_0').val();
  if (!todoInput) {   
    alert('please enter texta into field');
    return;
  } else {
    $('#lisCont').append('<li>' + todoInput + "<a href ='X'></a></li>");
    // $(todoList).val('');
    console.log(todoInput);
    };
)};
$('li').on('click', "a", function(event) { //and using .on("click", ".childItemSelector", function() {}) to watch for behavior on newly appended items.
  event.preventDefault();
  $(this).parent().remove(); 
};







// // ##Minimum Requirements
// // * A user should be able to add items to a 'todo' list from a form input using an input field and submit button.
// // * The form should clear when the user submits a task and focus back on the todo item field.
// // * On every item appended to the 'todo' list, have a way to delete the item. This could be in the form of a 'delete' link, a checkbox to mark it as active or inactive, or a plain button with an `X` on it.
// // * Use **event delegation** so that clicking the `x` or other buttons removes the item. This will require setting up a click event on the main todoList container, and using `.on("click", ".childItemSelector", function() {})` to watch for behavior on newly appended items.

// // ##How to get started




// // 5. Setup the `on()` action for the form to use that data to append to the todo list. Use a combination of `var newThing = $("<li></li>")`  for creating elements and `newThing.appendTo("#content")` for adding to the page.

// // 6. Add `x` buttons and set event handlers on them such that click on them removes the appropriate todo item, with `$(this).remove()`.

// // ##Bonus

// // * Style the todo list with your own *beautiful* sense of design.

// // ##Super Bonus

// // * Use [jquery-ui sortable](https://jqueryui.com/sortable/) to make the todo list sortable

// // ##Super Super Bonus

// // Using the built in HTML5 feature of local storage. Store your todo item into local storage. When your page is refreshed it will load the old todo items from localstorage.

// // * [Local Storage And How To Use It On Websites](http://www.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/)

