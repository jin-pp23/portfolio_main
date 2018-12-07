var pages = new WheelScroll({
    page: ".page",
    nav:".nav",
    speed: 200
});
    //var pages = new WhellScroll();
/*
var scTop = $(window).scrollTop();
var gap = [];
var now = 0;
$(window).resize(function(){
    $(".page").each(function(i){
        gap[i] = $(this).offset().top; //this=.page  .offset().top:부모로부터 떨어진 값에 top을 넣어라
        });
}).trigger("resize");
$(window).on("mousewheel DOMMouseScroll",wheelFn)//$(document) : 현재 문서에 있는 것들, $(window) : 현재 브라우저
function wheelFn(e) {
e.preventDefault();//preventDefault():이벤트의 기본기능을 멈추게함
e.stopPropagation();//stopPropagation():이벤트는 멈추고 값은 적힘.
    var dir = e.originalEvent.wheelDelta;
	$(window).off("mousewheel DOMMouseScroll");
	scTop = $(window).scrollTop();
    for(var i=0; i<gap.length; i++){
        if(scTop <= gap[i]){
            now = i;
            break;//break:반복문에서 break를 만나면 더이상 반복하지않고 빠져나옴
        }
    }//반복문에서 나오고 하단 함수 실행
    if(dir > 0){
        if(now > 0) now--;
    }
    else {
        if(now < gap.length-1) now++;
    }
    $("html,body").stop().animate({"scrollTop":gap[now]+"px"},200, function(){ 
        $(window).on("mousewheel DOMMouseScroll",wheelFn);
    });
    }
    $(".nav").on("click",function(){
        var oldNow = now;
        now = $(this).data("now");
        var speedGap = Math.abs(now - oldNow);//abs:절댓값 absolute (ex -2 = 2,-4 = 4)
        $("html,body").stop().animate({"scrollTop":gap[now]+"px"},100*speedGap);
    });
 */
