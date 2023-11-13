$(function () {

	var sp = 1000,
		$wrap = $('.wrap'),
		$header = $('header'),
		$gnb = $('#gnb'),
		$btn = $('#btn'),
		$section = $('.wrap').find('section'),
		$article = $('section').find('article'),
		$article1 = $('section').find('article:nth-child(1)'),
		$article2 = $('section').find('article:nth-child(2)'),
		$article3 = $('section').find('article:nth-child(3)'),
		$article4 = $('section').find('article:nth-child(4)'),
		$deco = $wrap.find('.deco'),
		$logo = $deco.find('#logo');


	$deco.on('mouseenter', function () {
		$(this).find('p').stop().animate({
			'left': 0
		},sp);
		$(this).stop().animate({
			'width': '55%'
		},sp);
		$logo.stop().animate({
			'left': '55%'
		},sp);
	}).on('mouseleave', function () {
		$(this).find('p').stop().animate({
			'left': '95%'
		},sp);
		$(this).stop().animate({
			'width': '30%'
		},sp);
		$logo.stop().animate({
			'left': '50%'
		},sp);
	});
	
	$article.on('mouseenter', function () {
		$deco.find('p').stop().animate({
			'left': 0
		},sp);
		$deco.stop().animate({
			'width': '55%'
		},sp);
		$logo.stop().animate({
			'left': '55%'
		},sp);
	}).on('mouseleave', function () {
		$deco.find('p').stop().animate({
			'left': '95%'
		},sp);
		$deco.stop().animate({
			'width': '30%'
		},sp);
		$logo.stop().animate({
			'left': '50%'
		},sp);
	});

	$article1.on('mouseenter', function () {
		$(this).stop().animate({
			'width': '40%',
			'height': '100%'
		}, sp);
		$(this).find('video').stop().animate({
			'opacity': '1'
		});
		$('article:nth-child(n+2)').find('h2').stop().animate({
			'opacity': 0
		});
	});

	$article1.on('mouseleave', function () {
		$(this).stop().animate({
			'width': '8%',
			'height': '20%'
		}, 500);
		$(this).find('video').stop().animate({
			'opacity': 0,
		});
		$('article:nth-child(n+2)').find('h2').stop().animate({
			'opacity': '1'
		});
	});

	$article2.on('mouseenter', function () {
		$(this).stop().animate({
			'width': '40%',
			'height': '100%',
			'top': '-140px'
		}, sp);
		$(this).find('video').stop().animate({
			'opacity': '1'
		});
		$('article:nth-child(n+3),article:nth-child(1)').find('h2').stop().animate({
			'opacity': 0
		})
	}); 

	$article2.on('mouseleave', function () {

		$(this).stop().animate({
			'width': '8%',
			'height': '20%',
			'top': 0
		}, sp);

		$(this).find('video').stop().animate({
			'opacity': 0
		});
		$('article:nth-child(n+3),article:nth-child(1)').find('h2').stop().animate({
			'opacity': '1'
		});
	});
	
	$article3.on('mouseenter', function () {
		$(this).stop().animate({
			'width': '40%',
			'height': '100%',
			'top': '-260px'
		}, sp);
		$(this).find('video').stop().animate({
			'opacity': '1'
		});
		$('article:nth-child(4),article:nth-child(-n+2)').find('h2').stop().animate({
			'opacity': 0
		});
	});

	$article3.on('mouseleave', function () {
		$(this).stop().animate({
			'width': '8%',
			'height': '20%',
			'top': 0
		}, sp);
		$(this).find('video').stop().animate({
			'opacity': 0
		});
		$('article:nth-child(4),article:nth-child(-n+2)').find('h2').stop().animate({
			'opacity': '1'
		});
	}); 

	$article4.on('mouseenter', function () {
		$(this).stop().animate({
			'width': '40%',
			'height': '100%',
			'top': '-400px'
		}, sp);
		$(this).find('video').stop().animate({
			'opacity': '1'
		});
		$('article:nth-child(-n+3)').find('h2').stop().animate({
			'opacity': 0
		});
	});

	$article4.on('mouseleave', function () {
		$(this).stop().animate({
			'width': '8%',
			'height': '20%',
			'top': 0
		},sp);
		$(this).find('video').stop().animate({
			'opacity': 0
		});
		$('article:nth-child(-n+3)').find('h2').stop().animate({
			'opacity': '1'
		});
	}); 


	$article.on('mouseenter', function () {
		$(this).find('video').prop({
			'muted': false
		});
		var vid = $(this).find('video').get(0);
		vid.currentTime = 0;
		vid.play();
	});
	$article.on('mouseleave', function () {
		$(this).find('video').prop({
			'muted': true
		});
		var vid = $(this).find('video').get(0);

		vid.currentTime = 0;
		vid.pause();
	});

	$btn.on('click', function () {
		$(this).fadeOut();
		$header.stop().animate({
			'top': 0
		});
	});

	$header.on('mouseleave', function () {
		$(this).stop().animate({
			'top': '-150px'
		});
		$btn.fadeIn();
	});
	$gnb.on('click', 'li', function () {
		$header.stop().animate({
			'top': '-150px'
		});
	});
}) 
