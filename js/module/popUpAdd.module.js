// popUpAdd.module.js
define(function(require, exports, module) {
	var popUp = require("./popUp.module");
	var contactItem = require("./contactItem.module");
	var dao = require("model/cantactDao");

	function popUpAdd(){
		uniqueHtml = "<input style='margin-top:60px;' class='maskinput' type='text' placeholder='his name'/>"+
		"<input class='maskinput' type='text' placeholder='his telephone'/>"+
		"<input class='maskinput maskconfirm' type='button' value='confirm'/>"
		popUp.call(this , uniqueHtml);
	}

	for(var attr in popUp.prototype){
		popUpAdd.prototype[attr] = popUp.prototype[attr];
	}

	popUpAdd.prototype.submitEvent = function(){
		var _this = this,
		       inputs = $(".maskinput"),
		       nameinput = inputs.eq(0),
		       telephoneinput = inputs.eq(1);
		$(".maskconfirm").click(function(){
			dao.add(nameinput.val() ,telephoneinput.val());
			new contactItem($(".content").eq(0) ,nameinput.val() ,telephoneinput.val()).init();
			_this.remove();
		})
	}
	module.exports = popUpAdd;
})