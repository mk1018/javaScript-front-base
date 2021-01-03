// ログイン時に使用
function login(param_array){
	loginRequest(param_array);
}

// ログアウト時に使用
function logOut(){
	logOutRequest();
}

// トークンの有効性チェック（画面遷移時に使用）
function tokenValidityCheck(){
	var access_token = getStorageToken();
	if(access_token != null) {
		tokenValidityCheckRequest(access_token);
	}else{
		window.location.href = '/login';
	}
}

// トークンの有効期限更新（定期的にリクエスト）
function tokenRefresh(){
	tokenRefreshRequest();
}

// トークンの有効期限更新（定期的にリクエスト）
function tokenRefreshOnMethod(mlist){
	tokenRefreshOnMethodRequest(mlist);
}


function getStorageToken(){
	return localStorage.getItem('accses_token');
}

function tokenValidityCheckRequest(token){
	$.ajax({
		type: 'POST',
		url: '/api/me',
		dataType: 'json',
		beforeSend:function(xhr, settings){
			xhr.setRequestHeader( 'Authorization', 'Bearer '+ token );
		}
	}).done( ( data ) => {
		// console.log(data);
	}).fail( ( data ) => {
		console.log(data);
		window.location.href = 'test.html';
	});
}

function loginRequest(param_array) {
	$.ajax({
		type: 'post',
		url: '/api/user/token',
		dataType: 'json',
		async: false,
		data: JSON.stringify(param_array),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		success: function(res){
			localStorage.setItem('accses_token', res.access_token);
			window.location.href = '/home';
		},
		error: function(res){
			alert("ログインに失敗しました");
		}
	});
}

function logOutRequest(){
	var token = getStorageToken();
	$.ajax({
		type: 'POST',
		url: '/api/logout',
		dataType: 'json',
		beforeSend:function(xhr, settings){
			xhr.setRequestHeader( 'Authorization', 'Bearer '+ token );
		}
	}).done( ( data ) => {
		window.location.href = '/login';
	}).fail( ( data ) => {
		allert(data);
		window.location.href = '/login';
	});
}

function tokenRefreshRequest(){
	var token = getStorageToken();
	$.ajax({
		type: 'POST',
		url: '/api/refresh',
		dataType: 'json',
		beforeSend:function(xhr, settings){
			xhr.setRequestHeader( 'Authorization', 'Bearer '+ token );
		}
	}).done( ( data ) => {
		localStorage.setItem('accses_token', data.access_token);
	}).fail( ( data ) => {
		window.location.href = '/login';
		alert("ログインセッションが切れました。再度ログインしてください。");
	});
}


function tokenRefreshOnMethodRequest(mlist){
	var token = getStorageToken();
	$.ajax({
		type: 'POST',
		url: '/api/refresh',
		dataType: 'json',
		beforeSend:function(xhr, settings){
			xhr.setRequestHeader( 'Authorization', 'Bearer '+ token );
		}
	}).done( ( data ) => {
		localStorage.setItem('accses_token', data.access_token);
		for (var key in mlist) {
			mlist[key]();
		}
	}).fail( ( data ) => {
		window.location.href = '/login';
		alert("ログインセッションが切れました。再度ログインしてください。");
	});
}

function fromAssociativeArray(arrQuery){
	formArray = {};
	for (var key in arrQuery) {
		formArray[arrQuery[key]['name']] = arrQuery[key]['value'];
	}
	return formArray;
}