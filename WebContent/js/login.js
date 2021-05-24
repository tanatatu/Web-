/**
 * javascript for login
 */

/**
* ログイン機能
*/
$(function(){
	//ログイン処理
	//20210510 田中追記
	$.ninsyo = function(){

		var user = $('#user_name').val();
		var pass = $('#pass_word').val();

		//submit処理開始
		//$.ajaxSetup({ async: false }); //同期
		$.postJSON("DQube",{actionID:'ADDWORK02',user:user, pass:pass}, function(login){

		if(login.tblData.length==0){
			$('#ebase6_initial_bottom').html("ユーザー名、パスワードが間違っています。再入力して下さい。");
			$('#ebase6_initial_bottom').css("color","red");
		} else {

		$('#ebase6_initial_body').css('display', 'none');
		$('#ebase6_shadow').css('display', 'none');

		}

		});

	}

});
