// index.ui.js
define(function(require, exports, module) {

	require("jquery");

	var contactItem = require("module/contactItem.module");
	var popUpAdd = require("module/popUpAdd.module");
	var dao = require("model/cantactDao");

	function indexUiInit(){

	}
	
	module.exports = new indexUiInit();


	indexUiInit.prototype.start = function(){
		$(".menu").animate({
			left:"270px"
		});
	}

	indexUiInit.prototype.emmitEvent = function(){
		$(".menu").bind("click",addHandler);
	}

	indexUiInit.prototype.itemInit = function(){

		dao.fetchAll(function(re){
			var length = re.rows.length,
			       i = 0;
			for( ; i < length ; i ++){
				new contactItem(
					$(".content"),
					re.rows.item(i)["name"] ,
					re.rows.item(i)["telephone"]).init();				
			}
		})

	}

	function addHandler(){
		new popUpAdd().show().submitEvent();
	}

});