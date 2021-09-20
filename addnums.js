var Node = function(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}


var createLL = (arr) => {
	let head = Node(arr[0]);
	let curr = head;
	for(let i = 0; i < arr.length; i++) {
		curr.next = i < arr.length ? Node(arr[i+1]) : null
		curr = curr.next
	}

	return head;
}

var printLL = (ll) => {
	while(ll.next != null) {
		console.log(ll.val);
	}
}

createLL([2,4,3]);



