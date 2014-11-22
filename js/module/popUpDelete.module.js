// popUpDelete.module.js
define(function(require, exports, module) {

	var popUp = require("./popUp.module");
	var dao = require("model/cantactDao");

	function popUpDelete(obj){
		uniqueHtml = "<p style='margin-top:80px;' class= \"maskinput\">Are you sure to delete it?click X to cancel</p>"+
		"<input  class='maskinput maskconfirm' type='button' value='confirm'/>"
		popUp.call(this , uniqueHtml);
		this.item = obj.parent();
	}

	for(var attr in popUp.prototype){
		popUpDelete.prototype[attr] = popUp.prototype[attr];
	}

	popUpDelete.prototype.deleteEvent = function(){
		var _this = this;
		$(".maskconfirm").click(function(){

			dao.del(
				_this.item.find("span").eq(0).html(),
				_this.item.find("span").eq(1).html()
				);
			_this.item.remove();
			_this.remove();
		});
		$(".maskcancel").click(function(){
			_this.remove();
		});
	}
	module.exports = popUpDelete;
})