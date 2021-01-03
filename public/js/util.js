var Ajf = new Array();

function Aj(token,url,method,param,sync,callback)
{
	var async=true;
	if(sync!=true){
		async=false;
	}
	$.ajax({
		type: method,
		dataType: "json",
		beforeSend:function(xhr,settings){
			xhr.setRequestHeader('Authorization','Bearer '+token);
		},
		data: param,
		url: url,
		async: async
	}).done((data)=>{
		Ajf[callback].done(data);
	}).fail((data)=>{
		Ajf[callback].error(data);
	});
}
