// popUp.module.js
define(function(require, exports, module) {
	function popUp() {
		this.mask = "<div class='mask'></div>";
		this.maskform = "<div class='maskform'>"+
		(arguments[0] ? arguments[0] : "")+
		"<img class='maskcancel' src='../images/delete.png'>"+
		"</div>";
		this.maskEntity = null;
		this.maskFormEntity = null;
	};
	module.exports = popUp;
	popUp.prototype.show = function () {
		var body = $("body").eq(0),
		       wWidth = $(window).width(),
		       wHeight = $(window).height();
		this.maskEntity = $(this.mask);
		this.maskFormEntity = $(this.maskform);

		body.append(this.maskEntity).append(this.maskFormEntity);

		this.maskEntity.css({
			height:wHeight + "px",
			width:wWidth + "px"
		})
		this.maskEntity.animate({
			opacity:0.5
		});

		this.maskFormEntity.css({
			left:(wWidth - 400)/2 + "px",
			top:(wHeight - 300)/2 + "px"
		})
		this.maskFormEntity.animate({
			opacity:1
		});

		var _this = this
		window.onresize = function() {
		              wWidth = $(window).width();
		              wHeight = $(window).height();
			_this.maskEntity.css({
				height:wHeight + "px",
				width:wWidth + "px"
			});
			_this.maskFormEntity.css({
				left:(wWidth - 400)/2 + "px",
				top:(wHeight - 300)/2 + "px"
			});
		}
		this.maskFormEntity.find(".maskcancel").eq(0).click(function(){
			_this.remove();
		});

		return _this;
	};
	popUp.prototype.remove = function() {
		this.maskEntity.remove();
		this.maskFormEntity.remove();
		window.onresize = null;
	};
})