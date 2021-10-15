

function removeWhiteSpace(){
	// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
	var forEach = function (array, callback, scope) {
	  for (var i = 0; i < array.length; i++) {
	    callback.call(scope, i, array[i]); // passes back stuff we need
	  }
  	};	
	forEach(document.querySelectorAll(‘.sw-js-list-empty-state’), function(index, node){
	if (node.textContent !== ‘’){
		return;
	}
	node.parentElement.parentElement.parentElement.parentElement.style.display = ‘none’;
	})	
}
setTimeout(removeWhiteSpace, 200);