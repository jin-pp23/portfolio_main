/*********modal******** */
function modalOpen(){$(".modal1").show(0);}
function modalClose(){$(".modal1").hide(0);}
/*****Products *****/

//쓸데없는 작업


var Ajax = (function(){
	function Ajax(_file) {
		this.file = _file;
		this.data = {};
	}
	Ajax.prototype.addData = function(_data) {
		this.data = _data;
	}
	Ajax.prototype.send = function(_fn) {
		$.ajax({
			url: this.file,
			type: "get",
			dataType: "json",
			data: this.data,
			success: _fn,
			error: function (xhr, status, error) {
				alert("통신이 원할하지 않습니다.\n잠시 후 다시 시도해 주세요.");
				console.log(xhr, status, error);
			}
		});
	}
	return Ajax;
}());


var prdNum = 0;
// { "result":[{"title":"best","data":[{},{}]},{},{}]} 이런구조로 만듦
var prds = new Ajax("json/prds.json");
prds.send(resultFn);
function resultFn(data){
	var html = '';
	var li;
	for(var i=0; i<data.result.length; i++){
		html = '<ul class="prd_wrap clear">';
		for(var j=0; j<data.result[i].data.length; j++){
			li = data.result[i].data[j];
			html += '<li class="prd">';
			html += '<div class="prd_img">';
			html += '<img src="'+li.img[0]+'" class="img">';
			html += '</div>';
			html += '<div class="prd_tit">'+li.title+'</div>';
			html += '<div class="prd_cate">'+li.cate+'</div>';
			// html += '<div class="prd_price">';
			// html += '<span>'+li.price[0]+'</span>';
			// html += '<span>'+li.price[1]+'</span>';
			// html += '</div>';
			html += '<div class="prd_hover">';
			html += '<div class="prd_img">';
			html += '<img src="'+li.img[1]+'" class="img prd_hover_img">';
			html += '</div>';
			html += '<ul>';
			html += '<li class="prd_compare">';
			html += '<div>';
			html += '</div>';
			html += '</li>';
			html += '<li class="prd_tit">'+li.title+'</li>';
			html += '<li class="prd_cate">'+li.cate+'</li>';
			// html += '<li class="prd_price">';
			// html += '<span>'+li.price[0]+'</span>';
			// html += '<span>'+li.price[1]+'</span>';
			// html += '</li>';
			html += '<li class="prd_cont">';
			html += li.cont;
			html += '<div><i class="fa fa-ellipsis-h"></i></div>';
			html += '</li>';
			html += '<li class="prd_detail">';
			html += '<div>';
			html += '<a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist">';
			html += '</a>';
			html += '</div>';
			html += '<ul onclick="linkFn(this);" data-link="'+li.link+'">';
			html += '<li>VIEW MORE</li>';
			html += '<li><i class="fa fa-arrows-alt"></i></li>';
			html += '</ul>';
			html += '<div>';
			html += '<a href="#" data-toggle="tooltip" data-placement="top" title="View">';
			html += '</a>';
			html += '</div>';
			html += '</li>';
			html += '</ul>';
			html += '</div>';
			// if(li.pct > 0)html += '<div class="prd_pop">-'+li.pct+'%</div>';
			html += '</li> ';
		}
		html += '</ul>	';
		$(".prd_out_wrap").append(html);
	}
		//생성완료된 후 이벤트 처리
		$(".prd_nav > li").click(function(){
			$(".prd_wrap").eq(prdNum).stop().animate({"top":"5rem", "opacity":0}, 500, function(){
				$(this).css({"display":"none"});	
			});
			prdNum = $(this).index();
			$(".prd_wrap").eq(prdNum).css({"display":"block"}).stop().animate({"top":0, "opacity":1}, 500);
			$(".prd_nav > li").css({"color":"#666"});
			$(".prd_nav div").css({"width":0});
			$(this).css({"color":"#222"});
			$(this).children("div").css({"width":"100%"});
		});
		$(".prd_nav > li").hover(function(){
			if($(this).index() != prdNum) {
				$(this).css({"color":"#222"});
				$(this).children("div").stop().animate({"width":"100%"}, 100);
			}
		},function(){
			if($(this).index() != prdNum) {
				$(this).css({"color":"#666"});
				$(this).children("div").stop().animate({"width":0}, 100);
			}
		});
		$(".prd_nav > li").eq(0).trigger("click");
		
		$(".prd").hover(function(){
			$(this).children(".prd_hover").stop().fadeIn(300);
			$(this).find(".prd_compare").find("div").stop().animate({"top":"25px"}, 300);	
			if($(this).find(".prd_cont")[0].offsetHeight < $(this).find(".prd_cont")[0].scrollHeight) {
				console.log("overflow");
				$(this).find(".prd_cont").children("div").stop().animate({"bottom":0}, 200);
				$(this).find(".prd_cont").children("div").click(function(){
					$(this).parent().css({"height":"auto"});
					$(this).hide(0);
				});
			}
			$(this).find(".prd_detail").children("ul").hover(function(){
				$(this).children(":first-child").stop().animate({"margin-top":"-38px"}, 200);
			}, function(){
				$(this).children(":first-child").stop().animate({"margin-top":0}, 200);
			});
		}, function(){
			$(this).children(".prd_hover").stop().fadeOut(300);
			$(this).find(".prd_compare").find("div").stop().animate({"top":0}, 300);
			if($(this).find(".prd_cont")[0].offsetHeight < $(this).find(".prd_cont")[0].scrollHeight) {
				$(this).find(".prd_cont").children("div").stop().animate({"bottom":"-20px"}, 200);
			}
		});
		$(".prd_hover_img").hover(function(){
			$(this).stop().animate({"opacity":1}, 200).css({"animation-name":"prdImg"});
		}, function(){
			$(this).stop().animate({"opacity":0}, 200).css({"animation-name":"prdImgBack"});
		});
		$('[data-toggle="tooltip"]').tooltip(); 
	}
	


//history_line 자바로 짜봣는데 안됨
// var path = document.querySelector('.history_line');
// var length = path.getTotalLength()

//drop paint
$(".drop").hover(function(){
    $(this).find(".drop2").stop().slideDown(1000);
},
function(){
    $(this).find(".drop2").stop().slideUp(1000);
});


function linkFn(obj) {
	var linkAddr = $(obj).data("link");
	console.log(linkAddr);
	window.open(linkAddr);
}
