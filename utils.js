var ListNode = function(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

var createLL = (arr) => {
	let head = new ListNode(arr[0]);
	let curr = head;
	for(let i = 1; i < arr.length; i++) {
		curr.next = i < arr.length ? new ListNode(arr[i]) : null;
		curr = curr.next;
	}

	return head;
}

var lengthLL = (ll) => {
	let len = 0;
	while(ll !== null) {
		len++;
		ll = ll.next;
	}
	return len;
}

var reverseLL = (ll) => {
	let curr = ll //head of ll
	let prev = null

	while (curr !== null) {
		let node = curr.next
		curr.next = prev
		prev = curr
		curr = node
	}

	return prev;
}

var arrayFromLL = (ll) => {
	let arr = []
	while(ll !== null) {
		arr.push(ll.val);
		ll = ll.next
	}

	return arr;
}

var numberFromLL = (ll) => {
	let p = 0;
	let num = 0;
	while(ll !== null) {
		num += Math.pow(10, p) * ll.val;
		ll = ll.next;
		p++;
	}
	return num;
}

var llFromNumber = (num) => {
	let arr = num.toString().split('');
	arr = arr.map(n => parseInt(n))
	return createLL(arr);
}
