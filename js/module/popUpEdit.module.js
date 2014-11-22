// popUpEdit.module.js
define(function(require, exports, module) {
	var popUp = require("./popUp.module");
	var dao = require("model/cantactDao");

	function popUpEdit(obj){
		this.telephone = obj.prev().prev();
		this.name = this.telephone.prev();
		this.curName = this.name.html();
		this.curTelephone = this.telephone.html();

		this.uniqueHtml = "<input style='margin-top:60px;' class='maskinput' type='text' placeholder='his name' value='"+this.curName+"'/>"+
		"<input class='maskinput' type='text' placeholder='his telephone' value='"+this.curTelephone+"'/>"+
		"<input class='maskinput maskconfirm' type='button' value='confirm'/>";
		
		popUp.call(this , this.uniqueHtml);
	}

	for(var attr in popUp.prototype){
		popUpEdit.prototype[attr] = popUp.prototype[attr];
	}

	popUpEdit.prototype.editEvent = function(){
		var _this = this,
		       inputs = $(".maskinput"),
		       nameinput = inputs.eq(0),
		       telephoneinput = inputs.eq(1);
		$(".maskconfirm").click(function(){
			dao.change(
				_this.curName,
				_this.curTelephone,
				nameinput.val(),
				telephoneinput.val()
				);
			_this.name.html(nameinput.val());
			_this.telephone.html(telephoneinput.val());
			_this.remove();
		})
	}
	module.exports = popUpEdit;
})