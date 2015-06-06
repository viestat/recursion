// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
  	var i = 0;
  	var res = "[";

  	while (i < obj.length){

  		if (i !== obj.length - 1){
  			res += stringifyJSON(obj[i]) + ",";
  		} else {
  			res += stringifyJSON(obj[i]);
  		}
  		i++;
  	}

  	return res + "]";

  } else if (typeof(obj) === "object" && obj !== null) {
  	var res = [];
  	for (var key in obj){
  		if (obj[key] !== undefined && typeof(obj[key]) !== "function"){
  			res.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  		}
  	}
  	return "{" + res.join(",") + "}";

  } else if (obj === null) {
  	return "null";

  } else if (typeof(obj) === "undefined") {
  	return undefined;

  } else if (typeof(obj) === "function") {
  	return undefined;

  } else if (typeof(obj) === "string"){
  	return "\"" + obj + "\"";

  } else if (typeof(obj) !== "string") {
  	return obj + "";
  }
};
