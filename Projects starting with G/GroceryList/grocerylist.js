$(function() {
	var callback = function(event) {
		event.preventDefault();                     // prevent Default
		var input = $('input[type=text][name=item]'),
			value = input.val(),
			need = ($(event.target).attr('id') === 'addNeed'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (need) ? $('ul').first() : $('ul').last();
		
		input.val("");                   // empty string value
		input.focus();					

		if (value === "") return;

		if (!need) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(list);
	}

	$('#addHave, #addNeed').click(callback);                   
	
	$('ul').on('click', 'li a', function(event){
		$(event.target).parent('li').remove();             // remove the value
	});

	$('ul').on('click', 'input[type=checkbox]', function(event){
		var listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);           // append for list
	});
});
