function ApiRequest(token, type, url, data){
	$.when(
	$.ajax({
		type: type,
		url: url,
		dataType: 'json',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		beforeSend:function(xhr, settings){
			xhr.setRequestHeader( 'Authorization', 'Bearer '+ token );
		}
	})).done( ( data ) => {
		console.log(data);
		return data;
	}).fail( ( data ) => {
		alert("取得失敗");
	});
}
