// Check Off Todos by clicking

$("ul").on("click", "li", function() {
	
	$(this).toggleClass("completed");
	
});

// remove the todo by clicking on the X

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// add new todo to the list when press the Enter key and reset the input to empty

$("input[type = 'text']").keypress(function(event) {
	if ( event.which === 13 ) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + text + "</li>");
	}
});

// toggle text input with plus sign

$(".fa-plus").on("click", function() {
	
	$("input[type = 'text']").fadeToggle();

});