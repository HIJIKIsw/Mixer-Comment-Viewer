//--------------------------------------------------------------------------------------------------
//= SendCommentArea
//--------------------------------------------------------------------------------------------------
class SendCommentArea
{

	//----------------------------------------------------------------------------------------------
	//= コメント入力欄の初期化処理
	//----------------------------------------------------------------------------------------------
	static Init()
	{
		// 入力欄に keypress イベントを登録する
		$("#SendCommentArea textarea").keypress(function(event)
		{
			if( event.keyCode && event.keyCode == 13 )
			{
				SendComment(this.value);
				this.value = "";
				return false;
			}
			return true;
		});
	}

}