To-Do App
In this assignment, you're going put together everything you've learned about listening to DOM events and manipulating the DOM with jQuery to build a dynamic Todo List application.

Loading Dependencies

For this project you should be using jQuery. Either use the link from the Google Developer Libraries, your jQuery Sublime snippet, or the link below before the </body> tag.

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
Minimum Requirements

A user should be able to add items to a 'todo' list from a form input using an input field and submit button.

The form should clear when the user submits a task and focus back on the todo item field.

On every item appended to the 'todo' list, have a way to delete the item. This could be in the form of a 'delete' link, a checkbox to mark it as active or inactive, or a plain button with an X on it.

Use event delegation so that clicking the x or other buttons removes the item. This will require setting up a click event on the main todoList container, and using .on("click", ".childItemSelector", function() {}) to watch for behavior on newly appended items.

How to get started

Start by constructing a basic index.html page as your starting point.

Load the CDN for jQuery

Setup your form to capture a task name. You can include a button to be part of the form to have many ways to submit.

Use an <ul> or <ol> as a tag you can append into.

Setup the on() action for the form to use that data to append to the todo list. Use a combination of var newThing = $("<li></li>") for creating elements and newThing.appendTo("#content") for adding to the page.

Add x buttons and set event handlers on them such that click on them removes the appropriate todo item, with $(this).remove().

Bonus

Style the todo list with your own beautiful sense of design.
Super Bonus

Use jquery-ui sortable to make the todo list sortable

Super Super Bonus

Using the built in HTML5 feature of local storage. Store your todo item into local storage. When your page is refreshed it will load the old todo items from localstorage.