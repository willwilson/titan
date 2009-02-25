$(function(){
	$.controller.defaults.url = "server/index.php";
	//$("#ex").formatNumber("number", {dec_point: ",", decimals: 4});
	//$("#ex2").formatDate("M j, Y", "date");
	//$("#ex2").formatLink("{name}", "{id}", {title: "{date}"});
	

	list = $.controller.array("list", {paginate: {perPage: 10}});

	$("#ex2").format(function(elem, data){
		$(elem).text($(list).valueForKey("count"));
	});

	$("#test-list").template(list);
});
