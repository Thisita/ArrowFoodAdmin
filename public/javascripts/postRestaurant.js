$("form").submit(function()
{
	var req = "";
	var first = true;
	$("input").each(function(key, value)
	{
		if(!first)
			req += ",";
		var keyVal = key + ":" + value;
		req += keyVal;
		if(first)
			first = false;
	});
	alert(req);
});