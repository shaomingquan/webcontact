// contactItem.module.js
define(function(require, exports, module) {

	var popUpDelete = require("module/popUpDelete.module");
	var popUpEdit = require("module/popUpEdit.module");

	function contactItem(obj ,name ,telephone){
		this.content = "<div class=\"contact-item\">"+
			"<span class=\"contact-item-attr\">"+name+"</span>"+
			"<span class=\"contact-item-attr\">"+telephone+"</span>"+
			"<span class=\"contact-item-attr delete\"><a href=\"javascript:;\">delete</a></span>"+
			"<span class=\"contact-item-attr edit \"><a href=\"javascript:;\">edit</a></span>"+
		"</div>";
		this.parent = obj;
	}
	contactItem.prototype.init = function(){
		var content = $(this.content);
		this.parent.append($(this.content));
		content = this.parent.find(".contact-item").last();
		content.find(".delete").click(deleteHandler);
		content.find(".edit").click(editHandler);
	}
	
	function deleteHandler(){
		new popUpDelete($(this)).show().deleteEvent();
	}
	function editHandler(){
		new popUpEdit($(this)).show().editEvent();
	}
	module.exports = contactItem;
})