/* scripts */

var $body = $('body'),
$overlay = $('#overlay'),
$intro = $('#intro'),
$choose = $('#choose'),
$instructions = $('#instructions'),
$spinner = $('#spinner'),
$wheel = $('#wheel'),
$age = $('#age'),
$balance = $('#balance'),
$questions = $('#questions'),
$correct = $('#correct'),
$incorrect = $('#incorrect'),
$canvas = $('#canvas'),
$final = $('#final'),
$reset = $('#reset'),
$number = $('#number');

var game = {
	position: 0,
	age: 55,
	balance: 0,
	car: 'sitter',
	carWidth: 91,
	carHeight: 53,
	unansweredQuestions: [],
	circles: [],
	numbers: [],
	init: function() {
		
		$('#loading-spinner').addClass('spin');
		if (ie < 9) {
			$('#ie-start').click(function() {
				toggle($intro);
				setTimeout(function() { toggle($overlay); toggle($choose); }, 2000);
				return false;
			})
		}
		else {
			setTimeout(function() { toggle($intro); }, 4000);
			setTimeout(function() { toggle($overlay); toggle($choose); }, 6000);
		}
		
		game.initQuestions();
		game.initPaper();
		game.initCanvas();
		game.initSpinner();
		
		$choose.on('click', 'a', game.selectCar);
		$instructions.on('click', 'a', game.start);
		$body.on('click', '.spin-again', game.openSpinner);
		$questions.on('click', '.answers a', game.answerQuestion);
		
		if (!ie < 9) {
			$reset.click(game.reset);
		}
	},
	initQuestions: function() {
		var $questions = $('#questions');
		var html = '';
		for (var i=1, ii=questions.length+1; i<ii; i++) {
			var q = questions[i-1];
			var answers = q.answers;
			html += '<div id="q-'+i+'"><h2><span class="number">'+i+'</span></h2><p>'+q.text+'</p><ul class="answers">';
			for (var j=0, jj=answers.length; j<jj; j++) {
				html += '<li><a href="#" class="a-'+(j+1)+'">'+answers[j].text+'</a></li>';
			}
			html += '</ul></div>';
			game.unansweredQuestions.push(i);
			$questions.html(html);
		}
	},
	initSpinner: function(event) {
		var offset = $wheel.offset();
		var touching = false,
			pos = null, q = null,
			center = { x: offset.left+115, y: 254+115 };

		function getPos(event) {
			return {
				x: event.pageX,
				y: event.pageY
			}
		}
		function getQuadrant() {
			if (pos.x <= center.x && pos.y <= center.y) {
				return 1;
			}
			if (pos.x >= center.x && pos.y <= center.y) {
				return 2;
			}
			if (pos.x >= center.x && pos.y >= center.y) {
				return 3;
			}
			if (pos.x <= center.x && pos.y >= center.y) {
				return 4;
			}
			return null;
		}
		var down = function(event) {
			event = (window.Touch) ? event.originalEvent.touches[0] : event.originalEvent;
			pos = getPos(event);
			q = getQuadrant();
			touching = true;
			return false;
		}
		var move = function(event) {
			if (touching) {
				event = (window.Touch) ? event.originalEvent.touches[0] : event.originalEvent;
				var pos2 = getPos(event);
				if (!game.spinning) {
					if ((q == 1 && pos2.y > pos.y)
					 || (q == 2 && pos2.x < pos.x)
					 || (q == 3 && pos2.y < pos.y)
					 || (q == 4 && pos2.x > pos.x)) {
						game.spinReverse = true;
					}
					else {
						game.spinReverse = false;
					}
					game.spin();
					touching = false;
				}
			}
		}
		var up = function(event) {
			pos = null;
			touching = false;
		}
		
		if (window.Touch) {
			$spinner.bind('touchstart',down);
			$spinner.bind('touchmove',move);
			$spinner.bind('touchend',up);
		}
		else {
			$spinner.mousedown(down);
			$spinner.mousemove(move);
			$spinner.mouseup(up);
		}
	},
	start: function() {
		$overlay.removeClass('active');
		$instructions.removeClass('active');
		$age.html(game.age);
		game.addSuper(0);
		game.drawPaper();
		
		setTimeout(game.openSpinner, 3500);
		
		return false;
	},
	selectCar: function() {
		var carType = carTypes[this.id]
		game.carType = this.id;
		$instructions.find('.car')[0].src = 'img/car-'+this.id+'.png';
		$instructions.find('.car-type').html(carType.title);
		game.age = carType.age;
		game.balance = carType.balance;
		game.endAge = carType.age + 10;
		$instructions.find('.age').html(game.age);
		$instructions.find('.end-age').html(game.endAge);
		$instructions.find('.start-balance').html(game.balance.toDollars());
		setTimeout(function() {
			$instructions.show();
			$choose.hide();
		}, 200);
		
		return false;
	},
	openSpinner: function() {
		$correct.hide();
		$incorrect.hide();
		toggle($spinner);
		$overlay.removeClass('active');
		
		return false;
	},
	spin: function() {
		game.spinning = true;
		var number = random(6);
		$wheel.toggleClass('reverse', game.spinReverse);
		$wheel.addClass('spin-'+number);
		game.steps = (game.spinReverse) ? number : ((6-number) || 6);
		if (ie < 9) {
			$wheel.rotate(number*60);
		}
		else {
			$number.html(game.steps);
		}
		
		setTimeout(function() {
			$spinner.addClass('show-number');
		}, 2000);
		setTimeout(function() {
			toggle($spinner);
			$wheel.removeClass();
			if (ie < 9) {
				$wheel.rotate(0);
			}
		}, 3000);
		setTimeout(function() {
			game.spinning = false;
			$spinner.removeClass('show-number');
			game.stepCar();
		}, 4000);
		
		return false;
	},
	addSuper: function(add) {
		game.balance += add;
		$balance.animate({ "val": game.balance }, {
			easing: "linear",
			duration: 1000,
			step: function(fin,obj) {
				var $this = jQuery(this);
				var start = Number($this.html().replace(/[^0-9\.]+/g,""));
				var val = parseInt((fin-start)*obj.state) + start;
				$this.html(val.toDollars());
			}
		});
	},
	stepCar: function() {
		if (game.steps == 0) {
			game.selectNumber();
			setTimeout(game.openQuestion, 1000);
			return;
		}
		game.steps--;
		var start = game.position;
		game.position++;
		
		if (start > 0) {
			game.animateCar(game.pathPoints[start], game.pathPoints[game.position], 1000);
			if (game.position == 13) {
				game.age = Number($age.html()) +2;
				$age.html(game.age);
				game.position = 1;
				if (game.age == game.endAge) {
					game.end();
					return;
				}
				else {
					setTimeout(function() { game.stepCar(); }, 1000);
				}
			}
			else {
				setTimeout(function() { game.stepCar(); }, 1000);
			}
		}
		else {
			game.stepCar();
		}
		
	},
	paintCar: function(point, paint) {
		game.x = point.x;
		game.y = point.y;
		
		var ctx = game.ctx;
		ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
		ctx.save();
		ctx.translate(game.x, game.y);
		ctx.rotate(game.rotation);
		ctx.drawImage(game.carImage, 0-(game.carWidth/2), 0-game.carHeight, game.carWidth, game.carHeight);
		ctx.restore();
	},
	animateCar: function(start, end, time) {
		var distance = (end-start)*game.pathLength;
		start = start * game.pathLength;
		var ctx = game.ctx;
		var dy, dx, rotation;
		var negWidth = 1 - (game.carWidth/2);
		negHeight = 1 - game.carHeight;
		$canvas.animate({ "progress": 1 }, {
			easing: "linear",
			duration: time,
			step: function(a, obj) {
				var point = game.path.getPointAtLength(start + (obj.state * distance));
				if (typeof game.x == 'undefined') {
					game.rotation = -1.4028968567804556;
				}
				else {
					dx = point.x-game.x;
					dy = point.y-game.y;
					var rotation = 0-(Math.atan2(dx,dy) - 1.5707963267948966); /* magic numbers */
					game.rotation = (dx == 0 && dy == 0) ? game.rotation : rotation; /* same point glitch */
				}
				game.paintCar(point);
			}
			
		});
	},
	openQuestion: function() {
		var r = random(game.unansweredQuestions.length);
		game.activeQuestion = game.unansweredQuestions[r-1];
		var card = $('#q-' + game.activeQuestion);
		card.find('.number').html(game.position);
		toggle(card);
		toggle($overlay);
	},
	answerQuestion: function() {
		var answer = this.className.replace('a-','');
		var q = questions[game.activeQuestion-1];
		var a = q.answers[answer-1];
		var result = (a.correct) ? $('#correct'): $('#incorrect');

		// change data
		result.find('.topic').html(game.position);
		var $tip = result.find('.tip').addClass('invisible');
		var $msg = result.find('.msg').html(a.msg).addClass('invisible');
		result.find('.tip-text').html(q.tip);
		if (a.reward > 0) {
			var $reward = result.find('.reward').html(a.reward.toDollars());
		}
		var $rewardArea = result.find('.reward-area').addClass('invisible');
		var $icon = result.find('.icon').addClass('invisible');
		
		// transitions
		setTimeout(function() {
			$icon.removeClass('invisible');
			bounce($icon, 30, 500);
		}, 500);
		setTimeout(function() {
			$msg.removeClass('invisible');
		}, 640);
		if (a.reward > 0) {
			setTimeout(function() {
				$rewardArea.removeClass('invisible');
				bounce($reward, 60, 500);
				game.addSuper(a.reward);
			}, 1000);
		}
		setTimeout(function() {
			$tip.removeClass('invisible').hide();
			$tip.fadeIn('slow');
		}, 1500);
		
		if (a.correct) {
			game.unansweredQuestions.remove(game.unansweredQuestions.indexOf(game.activeQuestion));
		}
		
		if (game.unansweredQuestions.length == 0) {
			result.find('.spin-again').remove();
			setTimeout(function() {
				toggle(result);
				game.end();
			}, 10000);
		}
		
		game.deselectNumber();
		toggle($('#q-' + game.activeQuestion));
		result.show();
		
		return false;
	},
	end: function() {
		$('#score').html(game.balance.toDollars());
		var lifestyle = null;
		for(var i=0; i<3; i++) {
			if (lifestyles[i].over < game.balance) {
				lifestyle = lifestyles[i];
			}
		}
		var html = '';
		var randoms = [];
		function uniqueRandom(num) {
			var r = random(num);
			if (randoms.indexOf(r) == -1) {
				randoms.push(r);
				return r;
			}
			else {
				return uniqueRandom(num);
			}
		}
		
		for(var i=0; i<3; i++) {
			var r = uniqueRandom(links.length);
			var link = links[r-1];
			html += '<li id="l-'+(i+1)+'"><a href="'+link.url+'" target="_blank">'+link.title+'</a></li>';
		}
		$('#choices').html(html);
		$('#lifestyle').html(lifestyle.title);
		$('#story').html(lifestyle.story);
		
		$overlay.addClass('active');
		$final.addClass('active');
	},
	selectNumber: function() {
		game.circles[game.position-1].animate({
			fill: "#b2bb1e",
			r: 23
		}, 500, 'bounce');
		game.numbers[game.position-1].animate({
			fill: "#d9dd8f"
		}, 500, 'bounce');
	},
	deselectNumber: function() {
		game.circles[game.position-1].animate({
			fill: "#9cc5c9",
			r: 19
		}, 500, 'bounce');
		game.numbers[game.position-1].animate({
			fill: "#fff"
		}, 500, 'bounce');
	},
	reset: function() {
		game.position = 0;
		$age.html(55);
		game.addSuper(0-(game.balance));
		game.circles = [];
		game.numbers = [];
		for (var i=1, ii=questions.length+1; i<ii; i++) {
			game.unansweredQuestions.push(i);
		}
		$spinner.removeClass('active');
		$final.removeClass('active');
		$overlay.addClass('active');
		game.paper.clear();
		game.ctx.restore();
		game.ctx.clearRect(-1000,-1000,3000,3000);
		$choose.show();
		$instructions.addClass('no-transition');
		$instructions.addClass('active');
		$instructions.removeClass('no-transition');
		
		return false;
	},
	initPaper: function() {
		var p = game.paper = Raphael('paper', 1022, 762);
		game.path = p.path('M196.5,117.5L906,118c0,0,27.038,5.5,27,29c-0.039,24.331,0,96,0,96s2,28-23,32s-283,2-283,2s-75.86,11.37-76,91c-0.142,81.018,71,88,71,88h52c0,0,31,6,31,40s1,92,1,92s-8,68-74,67s-264,0.011-264,0.011s-24-2.934-24-29.011c0-22.5,22.913-25.153,22.913-25.153L408,601c0,0,75-17,79-94s-82.742-93.03-82.742-93.03L173,414c0,0-76-6-78-78s0-113,0-113l-7-28c0,0,0-39,26-62s60-21,60-21L196.5,117.5z').attr({ 'stroke-width': 0 });
		game.pathPoints = [.96, .01, .1, .176, .247, .31, .42, .5, .570, .645, .71, .81, .882, .999];
		game.pathLength = game.path.getTotalLength();
	},
	drawPaper: function() {
		var p = game.paper;
		var coords = [
			[335,91],
			[578,91],
			[820,91],
			[958,223],
			[770,300],
			[592,410],
			[730,558],
			[562,680],
			[327,652],
			[462,505],
			[256,437],
			[70,327]
		];
		var num = 0;
		var plotNumbers = function() {
			if (!coords[num]) {
				// roll car in
				var img = new Image();
				img.src = 'img/car-'+game.carType+'-small.png';
				game.carImage = img;
				game.animateCar(.95, 1, 1000);
				return;
			}
			var coord = coords[num];
			game.circles.push(
				p.circle(coord[0], coord[1], 5).attr({
					'fill': "#9cc5c9",
					'stroke-width': '0'
				}).animate({
					r: 19
				}, 200)
			);
			game.numbers.push(
				p.text(coord[0], coord[1], num+1).attr({
					fill: '#fff',
					"font-size": 21,
					"font-family": "MontserratRegular"
				})
			);
			num++;
			setTimeout(plotNumbers, 200);
		}
		plotNumbers();
	},
	initCanvas: function() {
		if (ie < 9) {
			game.initIE();
		}
		else {
			game.canvas = $canvas[0];
			game.ctx = game.canvas.getContext("2d");
		}
	},
	initIE: function() {
		var foo = document.getElementById("ie-canvas");
		var canvas = document.createElement('canvas');
		canvas.setAttribute("width", 1022);
		canvas.setAttribute("height", 760);
		foo.appendChild(canvas);
		game.canvas = G_vmlCanvasManager.initElement(canvas);
		game.ctx = game.canvas.getContext("2d");
		
		document.body.onselectstart = function() { return false; }
	}
}
game.init();