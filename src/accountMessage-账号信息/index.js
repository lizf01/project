$(function(){
	$(".orgin").each(function(index){
        $(".orgin").eq(index).hover(function(){
        	$(".orgin_img").eq(index).show();
        },function(){
            $(".orgin_img").eq(index).hide();
        });
	});
});