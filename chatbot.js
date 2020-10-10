
var inputLength=0;
$("input").on("keypress",function(e){
	if(e.which===13){
		add();
	}
});
function add(){
	var value=$("input").val();
	if(value!="")
	{
		inputLength=value.length;
		$("ul").append("<li class='question'>"+value+"</li><br>");
		$("input").val("");
		var elem = $(".chat");
		var mydiv = $(".chat");
		mydiv.scrollTop(mydiv.prop("scrollHeight"));
	}
}

