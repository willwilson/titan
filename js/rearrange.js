$(function(){
	$.controller.defaults.url = "server/index.php";
	var list = $.controller.array("list", {order: "position"});
	$("ul").template(list);
	$("ul").rearrange(list, {autoRetrieve: false, update: function(){$("ul").rearrange('destroy')}});
});
