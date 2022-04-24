$(document).ready (function(){
/*SLIDER STARTS**********************************************/
	//speed of slide
	var speed = 900;
	//pause between slides
	var pause = 5000;
	//number of images
	var numImg = 1;
	//slide images..
	$(".slide1").click(function(){
		$(".slider-container").animate({marginLeft:"0%"},speed);
		-slide();
	});
	
	function _slide() {
		$(".slider-container").animate({marginLeft:"-=100%"},speed,function(){
			numImg ++;
			if (numImg === 4) {
				numImg = 1;
				$(".slider-container").css({"margin-left":"0%"},speed);
			};
		});
	};
	
	//slide images continuously..
	var myInterval;
	function start(){
	myInterval = setInterval(function(){
		_slide();
	},pause);};
	start();
	
	//stop sliding if user hover images...
	$(".slider-container").mouseenter(function(){
		clearInterval(myInterval);
	});
	
	//start sliding if the mouse leaves image...
	$(".slider-container").mouseleave(function(){
		start();
	});
	
		
	$(".products-btn").mouseenter(function(){
		$(".products-dropdown").show(200);
	});	
	
	$(".products-btn").mouseleave(function(){
		$(".products-dropdown").hide(100,function(){
			$(".products-dropdown").stop();			
		});
	});	
	
	$(".sales-btn").mouseenter(function(){
		$(".sales-dropdown").show(200)

	});	
	
	$(".sales-btn").mouseleave(function(){
		$(".sales-dropdown").hide(100,function(){
			$(".sales-dropdown").stop();	
		});
	});
	
/*NAV MENU ENDS**********************************************/
	
	
	function _scaleUp(x) {
		x.style.transform = "scale(1.1)";
		x.style.transition = "all 1s";
	};	
	
	function _scaleDown(x) {
		x.style.transform = "scale(1)";
		x.style.transition = "all 1s";
	};
	
	
	$(".sales-dropdown .item3-text").mouseenter(function(){
		var x = document.getElementById("item3-img");
		_scaleUp(x)
	});	
	
	$(".item3-text").mouseleave(function(){
		var x = document.getElementById("item3-img");
		_scaleDown(x)
	});	
	
	
	/*Banners**********************************************/
	$("#slide1").mouseenter(function(){
		$(this).css({"transform":"scale(1.1)"},1000);
		
	});		
	
	$("#slide1").mouseleave(function(){
		$(this).css({"transform":"scale(1)"},1000);
		
	});		
	
	$("#slide2").mouseenter(function(){
		$(this).css({"transform":"scale(1.1)"},1000);
		
	});		
	
	$("#slide2").mouseleave(function(){
		$(this).css({"transform":"scale(1)"},1000);
		
	});		$("#slide3").mouseenter(function(){
		$(this).css({"transform":"scale(1.1)"},1000);
		
	});		
	
	$("#slide3").mouseleave(function(){
		$(this).css({"transform":"scale(1)"},1000);
		
	});		$("#slide4").mouseenter(function(){
		$(this).css({"transform":"scale(1.1)"},1000);
		
	});		
	
	$("#slide4").mouseleave(function(){
		$(this).css({"transform":"scale(1)"},1000);
		
	});	
	
	
	
	$(".banner2").mouseenter(function(){
		var x = document.getElementById("banner2-img");
		_scaleUp(x)
	});	
	
	$(".banner2").mouseleave(function(){
		var x = document.getElementById("banner2-img");
		_scaleDown(x)
	});		
	
	$(".banner3").mouseenter(function(){
		var x = document.getElementById("banner3-img");
		_scaleUp(x)
	});	
	
	$(".banner3").mouseleave(function(){
		var x = document.getElementById("banner3-img");
		_scaleDown(x)
	});		
	
	$(".banner4").mouseenter(function(){
		var x = document.getElementById("banner4-img");
		_scaleUp(x)
	});	
	
	$(".banner4").mouseleave(function(){
		var x = document.getElementById("banner4-img");
		_scaleDown(x)
	});	
		
	$(".banner5").mouseenter(function(){
		var x = document.getElementById("banner5-img");
		_scaleUp(x)
	});	
	
	$(".banner5").mouseleave(function(){
		var x = document.getElementById("banner5-img");
		_scaleDown(x)
	});	
	
	/*Product Adds**********************************************/	
	
	$(".p").mouseenter(function(){
		this.style.border = "1px solid #ccc";
	});	
		
	$(".p").mouseleave(function(){
		this.style.border = "1px solid #fff";
	});	
	
	});
/*SEARCH ENGINE*************************************************/
			function search() {
				var _input = document.getElementById("search-input").value;
				
				switch(_input) {
						
					case "time":
						var  d = new Date();
							var time = d.getHours() + ":" + d.getMinutes();
							window.alert(time)	
						break;
						
					case "home":
							window.location.href = 	"main.html";
						break;						
					case "women":
							window.location.href = 	"women.html";
						break;						
					case "men":
							window.location.href = 	"men.html";
						break;						
					case "sale":
							window.location.href = 	"75%.html";
						break;						
					case "sales":
							window.location.href = 	"75%.html";
						break;						
					case "children":
							window.location.href = 	"children.html";
						break;						
					case "about":
							window.location.href = 	"AboutUs.html";
						break;						
					case "contact":
							window.location.href = 	"contactUs.html";
						break;					
					case "phone":
							window.location.href = 	"contactUs.html";
						break;
										
					case "email":
							window.location.href = 	"contactUs.html";
						break;
										
					case "mail":
							window.location.href = 	"contactUs.html";
						break;
						
										
					case "report":
							window.location.href = 	"report.docx";
						break;
											
					default:
					window.alert("Result not found  ex:  sales, about, time, report");
				}
				
			};
/*Change FONTS**************************************************************************************/
				function bold(){					
					document.getElementById("wrapper").style.fontWeight = "bold";
				}function normal(){					
					document.getElementById("wrapper").style.fontWeight = "normal";
				};
				
/*SLIDE*********************************************************************************************/	
/*MAP**********************************************************************************************/

