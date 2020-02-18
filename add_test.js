var add = require('./add.js');
var x = 3;
var y = 3;
var result = add.addfct(x,y);

if (result == 6) {
	var IsWorking = "Is it working? " + true; 
}else {
	IsWorking = "Is it working? " + false;
}




console.log(IsWorking);