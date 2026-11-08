var ie = (function() {
	var undef,
	v = 3,
	div = document.createElement('div'),
	all = div.getElementsByTagName('i');
	while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		all[0]
	);
	return v > 4 ? v : undef;
}());

var $form = $('#form'),
$formForm = $('#form-form'),
$msg = $('#msg'),
$content = $('#content');

var form = {
	init: function() {
		$fakeSelect = $('#fake-select');
		$fakeSelect.on('click', '.trigger', function() {
			$fakeSelect.addClass('active');
			return false;
		});
		$fakeSelect.on('click', 'ul a', function() {
			var $this = $(this);
			$fakeSelect.removeClass('active');
			$fakeSelect.find('.trigger').html($this.html());
			$fakeSelect.find('input').val($this.html());
			return false;
		});
		
		if (window.Touch || ie) {
			$form.on('click', 'label', function() {
				var $this = $(this);
				var $input = $this.find('input');
				if ($input[0].checked) {
					$input.removeAttr('checked');
				}
				else {
					$input.attr('checked', 'checked');
				}
				if (ie < 9) {
					$this.toggleClass('active', $input[0].checked);
				}
			});
		}
		$form.on('change', '.check', function() {
			var label = $(this).parent();
			label.toggleClass('active');
		});
		
		if (ie) {
			$('input').placeholder();
		}
		
		$('#submit').click(form.submit);
	},
	submit: function() {
		$.ajax({
			type: 'POST',
			url: $formForm[0].action,
			data: $formForm.serialize(),
			success: form.response,
			dataType: 'json'
		});

		return false;
	},
	response: function(data) {
		var $msg = $('#msg');
		$msg.html(data.msg);
		if (data.success == 'True') {
			$form.addClass('yep');
		}
		else {
			$msg.html(data.msg);
			$form.addClass('nope');
			setTimeout(function() {
				$form.removeClass('nope');
			}, 2000);
		}
	}
}

form.init();