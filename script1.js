var todos = JSON.parse(localStorage.getItem('todos')) || [];

#(document).ready(function() {
  for var i = 0; i < todos.length; i++) {
    createToDo(todos[i]);
}
$('#todo-list').sortable();
 

  )}
