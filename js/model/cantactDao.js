// cantactDao.js
define(function(require, exports, module) {
	var dataBase = null;
	if(window.openDatabase){
		dataBase = openDatabase("contact", "1.0", "contact_db", 1024 * 1024, function () { });
		dataBase.transaction(function  (fx) {
			fx.executeSql(
				"create table if not exists list (name varchar(20), telephone varchar(20))",
				[],
				function  () {
					console.log("success create table");
				},
				function  () {
					console.log("failed create table");
				}
			);
		});
	}else{
		console.log("your browser is low");
	}
	var sqls = {
		fetchAll : function(callback){
			dataBase.transaction(function  (fx) {
				fx.executeSql(
					"select * from list",
					[],
					function(fx ,result){
						console.log("success select");
						callback(result);
					},function(){
						console.log("failed select");
					}
				)
			})
		},
		add : function(name ,telephone){
			dataBase.transaction(function  (fx) {
				fx.executeSql(
					"insert into list values(?,?)",
					[name ,telephone],
					function(){
						console.log("success add");
					},function(){
						console.log("failed add");
					}
				)
			})
		},
		change : function(curN , curT ,name ,telephone){
			dataBase.transaction(function  (fx) {
				fx.executeSql(
					"update list set name = ? , telephone = ? where name = ? and telephone = ?",
					[name ,telephone ,curN ,curT],
					function(){
						console.log("success change");
					},function(){
						console.log("failed change");
					}
				)
			})
		},
		del : function(name ,telephone){
			dataBase.transaction(function  (fx) {
				fx.executeSql(
					"delete from list where name = ? and telephone = ?",
					[name ,telephone],
					function(){
						console.log("success delete");
					},function(){
						console.log("failed delete");
					}
				)
			})
		}
	}
	module.exports = sqls;
});