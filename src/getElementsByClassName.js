// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var res = [];
  function inner(element){
  	if (element.classList !== undefined) {
  		if (element.classList.contains(className)) {
  			res.push(element);
  		}
  	}

  	for (var i = 0; i < element.childNodes.length; i++) {
  		inner(element.childNodes[i]);
  	};

  }
  inner(document.body);
  return res;
};
