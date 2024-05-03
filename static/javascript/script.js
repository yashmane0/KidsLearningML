$(window).load(function(){
	var height = window.innerHeight,
  x= 0, y= height/2,
	curveX = 10,
	curveY = 0,
	targetX = 0,
	xitteration = 0,
	yitteration = 0,
	menuExpanded = false;
	
	blob = $('#blob'),
	blobPath = $('#blob-path'),
    menu = $('.menu'),
    menuInner = $('.menu-inner');
	hamburger = $('.hamburger');
	

	$(this).on('mousemove', function(e){
		x = e.pageX;
		
		y = e.pageY;
	});

	menuInner.on('mouseenter', function(){
        $(this).parent().addClass('expanded');
        menuExpanded = true;
        checkOverflow(); // Check overflow when menu expands
        scrollToItem(4); // Scroll to 4th item in the list
    });

    menuInner.on('mouseleave', function(){
        menuExpanded = false;
        $(this).parent().removeClass('expanded');
    });
    function checkOverflow() {
        // Check if menu-inner overflows its parent (.menu)
        var isOverflowing = menuInner[0].scrollHeight > menuInner.height();
        if (isOverflowing) {
            menu.addClass('scrollable-menu');
        } else {
            menu.removeClass('scrollable-menu');
        }
    }
	function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
	}

	var hoverZone = 150;
	var expandAmount = 20;
	
	function svgCurve() {
		if ((curveX > x-1) && (curveX < x+1)) {
			xitteration = 0;
		} else {
			if (menuExpanded) {
				targetX = 0;
			} else {
				xitteration = 0;
				if (x > hoverZone) {
					targetX = 0;
				} else {
					targetX = -(((60+expandAmount)/100)*(x-hoverZone));
				}			
			}
			xitteration++;
		}

		if ((curveY > y-1) && (curveY < y+1)) {
			yitteration = 0;
		} else {
			yitteration = 0;
			yitteration++;	
		}

		curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
		curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);

		var anchorDistance = 200;
		var curviness = anchorDistance - 40;

		var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";

		blobPath.attr('d', newCurve2);

		blob.width(curveX+60);

		hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
    
    // $('h2').css('transform', 'translateY('+curveY+'px)');
		window.requestAnimationFrame(svgCurve);
	}

	window.requestAnimationFrame(svgCurve);

	menuInner.on('wheel', function(e) {
        e.preventDefault();
        var delta = e.originalEvent.deltaY;
        this.scrollTop += (delta < 0 ? -30 : 30);
    });
	function scrollToItem(index) {
        var item = menuInner.find('a').eq(index - 1);
        if (item.length) {
            var scrollPos = item.position().top;
            menuInner.scrollTop(scrollPos);
        }
    }	
	
});

// document.getElementById('fruit').onclick = function () {
//     open("fruit.html");
    
// };