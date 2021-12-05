function arrayRemove(arr, value) {   
	return arr.filter(function(ele){ 
		return ele != value; 
	});
}

function containsObject(obj, list) {
	for(let i = 0; i < list.length; i++) {
		if (list[i] === obj) {
			return true;
		}
	}
	return false;
}


