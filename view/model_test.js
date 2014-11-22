// model_test.js
define(function(require){
	var dao = require("model/cantactDao");
	dao.add("xiaoming","123456789");
	dao.change("xiaoming","123456789","xiaomingming","1234856789486");
	dao.fetchAll(function(re){
		console.log(re);
	})
})