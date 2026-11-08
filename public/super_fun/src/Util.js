Number.prototype.toDollars = function() {
	var n = this,
	c = 0,
	d = '.',
	t = ',',
	s = n < 0 ? "-" : "",
	i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
	j = (j = i.length) > 3 ? j % 3 : 0;
	return s + '$' + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

if (!Array.indexOf) {
	Array.prototype.indexOf = function(obj){
		for(var i=0; i<this.length; i++){
			if(this[i]==obj){
				return i;
			}
		}
		return -1;
	}
}

jQuery.extend(jQuery.easing, {
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}
});

function toggle(el) {
	el.toggleClass('active');
}

function bounce(el, height, duration) {
	var top = el.css('top').replace(/[^-\d\.]/g, '');
	el.css({ top: top - height })
	el.animate({
		top: top
	},{
		easing: "easeOutBounce",
		duration: duration || 200
	});
}

function random(num) {
	return Math.floor(Math.random()*num)+1;
}

/* ugh */
jQuery.fn.rotate = function(angle) {
	var el = this.get(0);
  el.angle = angle;

	if (el.angle >= 0) {
		var rotation = Math.PI * el.angle / 180;
	} else {
		var rotation = Math.PI * (360+el.angle) / 180;
	}
	if (angle != 0 && angle != 180 && angle != 360  && angle != -180  && angle != -360) {
	  el.style.top = '-18px';
	  el.style.left = '-18px';
	}
	else {
	  el.style.top = '23px';
	  el.style.left = '23px';
	}
	var costheta = Math.cos(rotation);
	var sintheta = Math.sin(rotation);
	el.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+costheta+",M12="+(-sintheta)+",M21="+sintheta+",M22="+costheta+",SizingMethod='auto expand')";
}

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