var $ = require('jquery');

var button = $('<button></button>').html('click me').on('click', function () {
	alert('I have been clicked');
});
$('body').append(button);